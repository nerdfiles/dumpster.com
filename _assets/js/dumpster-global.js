jQuery.validator.addMethod("postalcode", function(postalcode, element) {
    return this.optional(element) || postalcode.match(/(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXYabceghjklmnpstvxy]{1}\d{1}[A-Za-z]{1} ?\d{1}[A-Za-z]{1}\d{1})$/);
}, "Please specify a valid postal/zip code");

/**
 * Metadata
 */

$.metadata.setType('attr', 'validate');

/**
 * Modal Init
 */

$.modalWindow();

/**
 * Dumpster Validation
 */ 
 
$('.accessiblyClick').bind('change', function() {
    var $self = $(this);
    $self.next().find('input').trigger('click');
});

/**
 * Dumpster Validation
 */

$('#form_zipSearch #input_zipSearch').attr("validate", "{ required: true, postalcode: true, messages: { required: 'Please provide ZIP or State',postalcode: 'Please provide ZIP or State' }}");
$('#form_zipSearch').validate({
  errorPlacement: function(error, element) {
     if (element.attr("id") == "input_zipSearch")
       error.insertAfter("dd.submit");
     else
       error.insertAfter(element);
  }
});


/**
 * Dumpster Validation
 */

$('#form_zipSearch #input_zipSearch').attr("validate", "{ required: true, postalcode: true }");

$('#form_zipSearch').validate({
  errorPlacement: function(error, element) {
     if (element.attr("id") == "input_zipSearch")
       error.insertAfter( '#form_zipSearch dl' );
     else
       error.insertAfter(element);
  }
});


// Dumpster calendars validation

$('input.dumpster-calendar-input').attr('validate', '{ required: true }');

// Dumpster selection validation

$('form.form_dumpsterSelection').bind('submit', function() {

    // placeholder validation
    if( !Modernizr.input.placeholder ) {

        var $placeholders = $(this).find('input[placeholder]:visible'),
            i = $placeholders.length;

        while(i--) {
            if( $placeholders[i].value === $placeholders[i].getAttribute('placeholder') ) {
                $placeholders[i].value = '';
            }
        }

    }// placeholder validation
}).each(function() {

	$(this).validate({
			ignore: ':hidden',
			errorPlacement: function(error, element) {
				if(element.hasClass('dumpster-calendar-input')) {
					error.insertAfter(element.closest('dd').find('button'));
				} else {
					error.insertAfter(element);
				}
			}
    });// dumpster selection validation

});

/**
 * Document.ready
 */

$(document).ready(function() {

	/**
	 * Dumpster Selection Guide
	 */
	var $selectionGuide = $('#form_selectionGuide');

	if($selectionGuide.length) {

		$selectionGuide.find('.mod_radio-list label').bind('click', function() {
			$(this).parents('li').addClass('active')
								 .find('input').attr('checked','checked').end()
								 .siblings('li.active').removeClass('active');
		});

	}

	/**
	 * Dumpster Selection Page
	 */
    var $dumpsterSelection = $('#dumpster-list');

    // Dumpster selection specific
    if ($dumpsterSelection.length)
    {
		// Hide elements
		$dumpsterSelection.find('p.next-day-disclaimer').hide();

        $dumpsterSelection.find('div.dumpster-container').bind('schedule', function(e, mode) {
            var $self = $(this),
                $dumpsterPrice = $self.find('div.dumpster-price'),
				$dumpsterSchedule = $self.parent('form').find('div.schedule'),
				dumpsterBtn;

			dumpsterBtn = ( $dumpsterPrice.find('a.shopping-cart').length ) ? 'a.shopping-cart,p.warning' : 'div.add-cart';

            if(mode === 'expand') {
                $self.addClass('expanded');
                $dumpsterPrice.find('div.select').hide().end()
                              .find(dumpsterBtn).css('display','inline-block').end()
                              .find('dd.cost-table').animate({
                                opacity: 'toggle',
                                height: 'toggle'
                                }, 400).end();
                 $dumpsterSchedule.slideDown('slow').end().stop();
				 updateTotal($dumpsterPrice.find('table.price-summary'));
				 initDumpsterCalendars($dumpsterSchedule);
            }

            if(mode === 'collapse') {
                $self.removeClass('expanded');
                $dumpsterPrice.find('div.select').show().end()
                              .find(dumpsterBtn).hide().end()
                              .find('dd.cost-table').animate({
                                opacity: 'toggle',
                                height: 'toggle'
                                }, 400).end();
                 $dumpsterSchedule.slideUp('slow', function() {
					$(this).closest('li.dumpster-container-item').find('div.dumpster-container').addClass('clearfix');
				}).end().stop();
            }

        });

        $dumpsterSelection.find('table.price-summary').bind('updateTable', function(e, mode, priceClass) {

            var $self = $(this),
                price,
                priceObj = {},
                days,
                id;

            if (priceClass === 'day-next') {
                price = dumpsterResults.nextDay;
            }

            if (priceClass === 'day-extra') {
                id = (($self.parents('div[id^=dumpster-sku]').attr('id')).split('-'))[2];
                priceObj = calcExtraDays(id);
                price = priceObj.price;
                days = priceObj.days;

                if(days) {
                    $self.find('span.extra-day').html('+' + days + ' ');
                }
            }

            price = (parseFloat(price)).toFixed(2);

            if(isNaN(price)) {
                price = '';
            }

            if(mode === 'add') {
                $self.animate({
                    'margin-top' : '-=18'
                    }, 500, function() {
                                // attach to end of table row
                                var $newRow = $self.find('.'+priceClass).addClass('active');
                                $newRow.detach().appendTo($self).effect('highlight', {color: '#BED600'}, 2000)
                                       .find('td').html('$'+price);
                                updateTotal($self);
                            });
            }

            if(mode === 'update') {
                $self.find('.'+priceClass).find('td').html('$'+price).addClass('active').effect('highlight', {color: '#BED600'}, 2000);
                updateTotal($self);
            }

            if(mode === 'delete') {
                $self.find('.'+priceClass).removeClass('active').fadeOut('slow', function() {
                    $self.animate({
                        'margin-top' : '+=18'
                        }, 500, function(){
                            updateTotal($self);
                            });
                    });
            }

        }); // update table


        // select button functionality
        $dumpsterSelection.find('div.select input').bind('click', function(e) {
            // collapse open schedulers
            var $schedules = $('div.schedule:visible');

            if($schedules.length) {
                $schedules.parent('form').find('div.dumpster-container').trigger('schedule',['collapse']);
            }

            // open targeted scheduler
            $(this).closest('div.dumpster-container').trigger('schedule',['expand']);

            e.preventDefault();
        }); // select button functionality


        // next day functionality
        $dumpsterSelection.find('div.next-day').bind('show hide', function(e) {
            switch (e.type) {
                case 'show':
                    $(this).find('input').attr('checked','').end().fadeIn('slow');
                    break;

                case 'hide':
                        var $nextDayOption = $(this).find('input');
                        $(this).fadeOut('slow');

                        if( $nextDayOption.is(':visible:checked') ) {
                            $nextDayOption.attr('checked','').trigger('click');
                        }
                        break;
                }
        });

        // Next Day checkbox
        $dumpsterSelection.find('div.next-day input').bind('click', function(e) {
            var mode;
            mode = ( $(this).is(':checked') ? 'add' : 'delete' );
            $(this).closest('li.dumpster-container-item').find('table.price-summary').trigger('updateTable',[mode,'day-next']);
        });

        // prevent label from toggling checkbox
        $dumpsterSelection.find('div.next-day label').bind('click', function(e) {
            e.preventDefault();
        });

        // Placeholder support
        addPlaceholderSupport();

    } // Dumpster selection page

}); // document.ready

/**
 * Dumpster Selection Helper Functions
* @todo fold dumpster selection functions into own namespace
 */

function initDumpsterCalendars($container) {

		var $dateContainer = $container;

        // datepicker instantiation
        if ( $dateContainer.find('input.dumpster-calendar-input').length ) {

            var currentDate = new Date();

            $dateContainer.find('input.dumpster-calendar-input').attr('readonly','readonly');

            $dateContainer.find('input.dumpster-dropOff').not('.hasDatepicker').datepicker({
                showButtonPanel: true,
                showOn: 'both',
                buttonText: "Choose Calendar Date",
                dateFormat: 'mm/dd/yy',
                numberOfMonths: 2,
                minDate: +1,
                maxDate: +91,
                beforeShowDay: function(date) {
                    var noWeekendsAndHolidays = noWeekendsOrHolidays(date),
                        $dateModal,
                        pickUpMinDate,
                        pickUpMaxDate,
                        disclaimer;

                    $dateModal = $('#ui-datepicker-div');
                    if ( !$dateModal.find('a.btn_modalclose').length ) {
                        $dateModal.append('<a href="#" class="btn_modalclose">Close</a>');
                        $dateModal.find('.btn_modalclose').bind('click', function(e) {
                            $(this).parent().find('div.ui-datepicker-buttonpane button').trigger('onclick');
                            e.preventDefault();
                        });
                    }
                    if ( !$dateModal.find('p.next-day-disclaimer').length) {
                        disclaimer = $dateContainer.find('p.next-day-disclaimer').eq(0).clone();
                        $dateModal.append(disclaimer.show());
                    }

                return noWeekendsAndHolidays;
                },
                onSelect: function(dateText, inst) {
                    inst.input.prev().val(dateText);
                    // for placeholder support
                    if(inst.input.hasClass('placeholder')) {
                        inst.input.removeClass('placeholder');
                    }

                    // Set pick up date to next available date + 2
                    pickUpMinDate = new Date(dateText);
                    pickUpMinDate = new Date(pickUpMinDate.setDate(pickUpMinDate.getDate()+2));

                    // + 90 days from min date
                    pickUpMaxDate = new Date(dateText);
                    pickUpMaxDate = new Date(pickUpMaxDate.setDate(pickUpMaxDate.getDate()+90));

                    for(var i = 0; i < 7; i++) {
                        if($.datepicker.noWeekends(pickUpMinDate)[0]) break; //found a valid day, hop out
                        pickUpMinDate.setDate(pickUpMinDate.getDate() + 1); //move to the next day
                    }

                    $(this).closest('dl').find('input.dumpster-pickUp').datepicker('option',{ 'minDate': pickUpMinDate, 'maxDate': pickUpMaxDate } );

                        var $self = $(this),
							pickVal = $self.parents('dl').find('input.dumpster-pickUp').val(),
                            pickDate = $self.parents('dl').find('input.dumpster-pickUp').datepicker('getDate'),
                            dropVal = $self.val(),
                            dropDate = $self.datepicker('getDate'),
                            extraDays = dayDiff(dropDate, pickDate),
                            id = ($(this).parents('li').find('div[id^=dumpster-sku]').attr('id').split('-'))[2],
                            dumpster = getDumpsterInfo(id),
                            valid = true,
                            $container = $self.closest('li.dumpster-container-item');

					// validation
					$self.valid();

					if(dropVal === 'MM/DD/YYYY' || pickVal === 'MM/DD/YYYY') {
						valid = false;
					}

					if(valid && pickDate && dropDate && (dumpster.numberFreeDays < extraDays) ) {
						if( $container.find('tr.day-extra:visible').length ){
							$container.find('table.price-summary').trigger('updateTable',['update','day-extra']);
						} else {
							$container.find('table.price-summary').trigger('updateTable',['add','day-extra']);
						}
					} else {
						if($container.find('tr.day-extra:visible').length) {
							$container.find('table.price-summary').trigger('updateTable',['delete','day-extra']);
						}
					}

                    // calculate if selection option is tomorrow
                    var $nextDay = $(this).closest('div.schedule').find('div.next-day');

                    if(isItTomorrow(dateText,$(this))) {
                        $(this).closest('div.schedule').find('div.next-day').trigger('show');
                    } else {
                        $(this).closest('div.schedule').find('div.next-day').trigger('hide');
                    }

                }
            });

            // Dumpster Pickup Datepicker

            $dateContainer.find('input.dumpster-pickUp').not('.hasDatepicker').datepicker({
                showButtonPanel: true,
                showOn: 'both',
                buttonText: "Choose Calendar Date",
                dateFormat: 'mm/dd/yy',
                numberOfMonths: 2,
                minDate: +2,
                maxDate: +92,
                beforeShowDay: function(date) {
                    var noWeekendsAndHolidays = noWeekendsOrHolidays(date),
                        $dateModal,
                        pickUpMinDate,
                        disclaimer;

                    $dateModal = $('#ui-datepicker-div');
                    if ( !$dateModal.find('.btn_modalclose').length) {
                        $dateModal.append('<a href="#" class="btn_modalclose">Close</a>');
                        $dateModal.find('.btn_modalclose').bind('click', function(e) {
                            $(this).parent().find('.ui-datepicker-buttonpane button').trigger('onclick');
                            e.preventDefault();
                        });
                    }


                    if ( !$dateModal.find('p.next-day-disclaimer').length) {
                        disclaimer = $dateContainer.find('p.next-day-disclaimer').eq(0).clone();
                        $dateModal.append(disclaimer.show());
                    }

                    return noWeekendsAndHolidays;
                },
                onSelect: function(dateText, inst) {
                    inst.input.prev().val(dateText);
                    // for placeholder support
                    if(inst.input.hasClass('placeholder')) {
                        inst.input.removeClass('placeholder');
                    }

					var $self = $(this),
						dropVal = $self.parents('dl').find('input.dumpster-dropOff').val(),
						dropDate = $self.parents('dl').find('input.dumpster-dropOff').datepicker('getDate'),
						pickVal = $self.val(),
						pickDate = $self.datepicker('getDate'),
						extraDays = dayDiff(dropDate, pickDate),
						id = ($(this).parents('li').find('div[id^=dumpster-sku]').attr('id').split('-'))[2],
						dumpster = getDumpsterInfo(id),
						valid = true,
						$container = $self.closest('li.dumpster-container-item');

					// validation
					$self.valid();

					if(dropVal === 'MM/DD/YYYY' || pickVal === 'MM/DD/YYYY') {
						valid = false;
					}

					if(valid && pickDate && dropDate && (dumpster.numberFreeDays < extraDays) ) {
						if( $container.find('tr.day-extra:visible').length ){
							$container.find('table.price-summary').trigger('updateTable',['update','day-extra']);
						} else {
							$container.find('table.price-summary').trigger('updateTable',['add','day-extra']);
						}
					} else {
							if($container.find('tr.day-extra:visible').length) {
							$(this).closest('li.dumpster-container-item').find('table.price-summary').trigger('updateTable',['delete','day-extra']);
							}
					}

                }

            }); // Pick Up Datepicker

            // set minDate if Rush delivery isn't available
            $dateContainer.find('input.dumpster-dropOff').each(function() {
                if( !isRushAvailable( $(this) ) ) {
                    $(this).datepicker( 'option', 'minDate', +2);
                    $(this).parents('dl').find('input.dumpster-pickUp').datepicker('option','minDate', +4);
                }
            });

            // add custom class to datepicker
            $('#ui-datepicker-div').addClass('dumpster-datepicker-div');

        } // datepicker instantiation

}

function getDumpsterInfo(id) {
    var i = 0,
        array = dumpsterResults.dumpsters,
        len = array.length;
    for (i; i < len; i++) {
        if (array[i].id ==  id) {
             return array[i];
        }
    }
} // retrieves dumpster info from JSON printed to page

function noHolidays(date) {
    var holidays = dumpsterResults.holidays || [],
        len = holidays.length;
    for (var i = 0; i < len; i++) {
            if (new Date(holidays[i]).toString() == date.toString()) {
                return [false, 'holiday'];
            }
        }
        // return empty optional class
        return [true, ''];
} // eliminates holidays for datepickers

function noWeekendsOrHolidays(date) {
    var noWeekend = $.datepicker.noWeekends(date);
    if (noWeekend[0]) {
        return noHolidays(date);
    } else {
        return noWeekend;
    }
} // eliminates weekends or holidays for datepickers

function isRushAvailable($input) {
    var currDate = new Date(),
        dumpster,
        id = (($input.parents('li.dumpster-container-item').find('div[id^=dumpster-sku]').attr('id')).split('-'))[2];

    // Check for before noon
    if(currDate.getHours() < 12) {
        // get container
        dumpster = getDumpsterInfo(id);
        return dumpster.nextDayAvailable;
    } else {
        return false;
    }
} // Checks if rush delivery is available

function isItTomorrow(selectedDate,$input) {
    var currDate = new Date(),
        tomorrow = new Date(currDate.setDate(currDate.getDate()+1)),
        selected = new Date(selectedDate);

        // return false if past noon
        if( isRushAvailable($input) ) {
            tomorrow = tomorrow.getMonth()+1 + '.' + tomorrow.getDate() + '.' + tomorrow.getFullYear();
            selected = selected.getMonth()+1 + '.' + selected.getDate() + '.' + selected.getFullYear();
            return (selected === tomorrow);
        } else {
            return false;
        }
} // Checks for tomorrow including if rush is available

function dayDiff(dropDate,pickDate) {
    return Math.floor((pickDate-dropDate)/(1000*60*60*24));
} // Calculate difference of two dates

function calcExtraDays(id) {
    var dumpster = getDumpsterInfo(id),
        selector = '#dumpster-sku-' + id,
        $container = $(selector).parent('form'),
        dropDate = $container.find('input.dumpster-dropOff').datepicker('getDate'),
        pickDate = $container.find('input.dumpster-pickUp').datepicker('getDate'),
        extraDays = dayDiff(dropDate, pickDate);

        price = dumpster.costPerDay * (extraDays-dumpster.numberFreeDays);
        priceObj = { "price": price, "days": extraDays-dumpster.numberFreeDays};

        if(dumpster.numberFreeDays > extraDays) {
            return false;
        } else {
            return priceObj;
        }
}// Calculate days over free days

function updateTotal($table) {
    var total = 0;

    $table.find('tr.active td.price').each(function() {
        total += parseFloat( $(this).text().replace(/[^0-9\.]+/g, '') );
    });

    if(isNaN(total)) {
        total = '';
    } else {
        total = total.toFixed(2);
    }

    $table.closest('dd.cost-table').find('tr.subtotal td').text('$'+total).closest('tr').effect('highlight', {color: '#BED600'}, 2000);
}// updates total and highlights

function addPlaceholderSupport() {

    // placeholder support
    if( !Modernizr.input.placeholder ) {

        $('input[placeholder]').bind('focus blur initInput',function(e) {

            var $self = $(this);

            switch(e.type) {

                case 'focus':
                    if( $self.val() === $self.attr('placeholder') ) {
                        $self.removeClass('placeholder').val('');
                    }
                    break;

                case 'blur':
                    if( $self.val() === '' ) {
                        $self.addClass('placeholder').val( $self.attr('placeholder') );
                    } else {
                        $self.removeClass('placeholder');
                    }
                    break;

                case 'initInput':
					alert('placeholder added');
                    if( $self.val() === $self.attr('placeholder') ) {
                        $self.addClass('placeholder');
                    } else if ( $self.val() === '' ) {
                        $self.addClass('placeholder').val( $self.attr('placeholder') );
                    }
                    break;

            } // switch(e.type)

        }).trigger('initInput'); // bind focus blur
    }
}// add placeholder support