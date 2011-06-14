/**
 * Site Consolidation / Manhattan Beach
 */

/**
 * jQuery Metadata Configuration
 *
 * jQuery Metadata Configuration
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery.metadata
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 */

$.metadata.setType('attr', 'data-settings');
$.metadata.setType('attr', 'data-duration');
$.metadata.setType('attr', 'validate');


/**
 * jQuery init
 *
 * jQuery init
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */


$(function() {
    
/**
 * jQuery Tabs Configuration
 *
 * jQuery Tabs Configuration
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery.tabs
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */
 
    $.tabs("div.tabs");
    
/**
 * jQuery FAQ Init
 *
 * jQuery FAQ Init
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @subsubpackage       wm-module-faq
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */

    $("dl[class*='faq']").each(function(e) {
        var $self = $(this),
            cn = $self.attr("class"),
            grid = cn.match(/\:(grid\_\d{0,2})/),
            grid = grid[1];
            
        $self.find("dd").addClass(grid+" alpha").css({
            margin: "0 !important"
        });

    });
    

/**
 * jQuery FAQ Toggle Next
 *
 * jQuery FAQ Init
 *
 * @author              aalexander
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @subsubpackage       wm-module-faq
 * @version             0.0.1
 * @lastmodified        03-18-2011 1:40PM
 * @depends             jquery
 *
 * @js-for              all
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */
    
    $(".toggle-next").each(function(e) {
        var that = $(this),
            nextElem = that.next(),
            parentElem = that.parent();
            
        nextElem.wrapInner('<div class="faq-answer-container" style="padding-left: 30px"></div>');
        /*nextElem.wrapInner(function() {
            return '<div class="faq-answer-container" style="height: '+nextElem.height()+'px"></div>';
        });*/
        
        that.bind("click", function(e) {
            if (parentElem.hasClass("faq-toggle-list")) {
                //nextElem.height()
                nextElem.animate({
                    height: ["toggle", "swing"]
                }, 300);
                //nextElem.slideToggle("slow", function() {});
            } else {
                nextElem.toggle();
            }
        
            that.toggleClass("toggle-next-active");
            
            e.preventDefault();
        });
        
    });
    
    $(".toggle-all").bind("click", function(e) {
    
        var $self = $(this);
            
        if ( $self.hasClass('toggle-all-active') == false ) {
            // show all
            $self.closest('.faq-container').find('dd').slideDown();
            $self.closest('.faq-container').find('dt').addClass('toggle-next-active');
            $self.addClass('toggle-all-active');
        } else {
            // all hidden
            $self.closest('.faq-container').find('dd').slideUp();
            $self.closest('.faq-container').find('dt').removeClass('toggle-next-active');
            $self.removeClass('toggle-all-active');
        }
        
        e.preventDefault();
        //return false;
    });
	
	/**
 * jQuery FAQ Toggle Next
 *
 * jQuery FAQ Init
 *
 * @author              kfargason
 * @project             wm-redesign
 * @package             wm-redesign-r2
 * @subpackage          site-consolidation
 * @subsubpackage       form validation
 * @version             0.0.1
 * @lastmodified        03-23-2011 
 * @depends             jquery, jquery.validate.js
 * @tested              ie6,ie7,ie8,chrome_10.x,opera_11.x,firefox_3.6.x,safari_5.x,
 * @valid               true
 */
 
   //container-selection-form 
	$("#container-selection-form #container-selection-first-name").attr("validate", "required: true, maxlength: 50");
	$("#container-selection-form #container-selection-last-name").attr("validate", "required: true, maxlength: 50");
	$("#container-selection-form #container-selection-address-1").attr("validate", "required: true, maxlength: 100");
	$("#container-selection-form #container-selection-unit").attr("validate", "maxlength: 10, number: true ");
	$("#container-selection-form #container-selection-address-2").attr("validate", "maxlength: 50");
	$("#container-selection-form #container-selection-city").attr("validate", "required: true, maxlength: 50");
	$("#container-selection-form #container-selection-state").attr("validate", "required: true, maxlength: 25");
	$("#container-selection-form #container-selection-zip").attr("validate", "required: true, postalcode:true");
	$("#container-selection-form #container-selection-email").attr("validate", "required: true, maxlength: 50, email:true");

    $("#container-selection-form").validate();
    
});

/**
 * Careers
 */
/*
;(function($){
    $.fn.extend({
        '_data': $.fn.data,
        'data' : function( key, value ) {
            if ( typeof key === "undefined" && this.length ) {
                return jQuery.data( this[0] );
            } else if ( typeof key === "object" ) {
                return this.each(function() {
                    jQuery.data( this, key );
                });
            }
            var retValue;
            retValue = $.fn._data(key, value);
            if ('undefined' == (typeof retValue) || retValue.length == 0) {
                var nakedElem = this.get(0);
                if (nakedElem) {
                    if (nakedElem.hasOwnProperty && nakedElem.hasOwnProperty('dataset')) {
                        if ('undefined' != (typeof nakedElem.dataset[key])) {
                            retValue = nakedElem.dataset[key];
                        }
                    } else {
                        retValue = this.attr('data-'+key);
                    }
                }
            }
            return retValue;
        }
    });
})(jQuery);
*/
var carouselPick = null,
    carouselLength,
    carouselCount = 0,
    carouselControl = true,
    boo = true,
    $mapElem;
    
function sparkCarousel(event, state, carouselCount, elem) {
    var $mapAnchors = $('#carousel-map a');
    var carousel = jQuery('#carousel-list').data('jcarousel');
    var event = (carouselCount < $mapAnchors.length) ? (state) : event; // Done! Waiting for interaction.
    var carouselCountO = carouselCount;
    var $mapElem = elem;
    var carouselCount = (event.type === 'click') ? // the steady stream
        (carouselPick++) : // flows
        (carouselCount++); // ('no more.') ;
    
    if (event != 'next') {
        carouselCount = carouselCountO;
    }
    
    // jcarousel's
    if (state === 'init') {
        carouselCount = 0;
        $mapAnchors.eq(carouselCount).addClass('active');
    }
    
    if ( event !== 'click' && (event === 'next' || event === 'animate') ) {
        $mapAnchors.removeClass('active');
        carouselCount = carouselCountO;
        //console.log(carouselCount);
        
        if ( carouselCount <= $mapAnchors.length ) { 
            $mapAnchors.eq(carouselCount-1).delay(300).addClass('active');
        } else {
            carouselCount = 0;
            $mapAnchors.eq(0).delay(300).addClass('active');
        }

    }
    
    if (event === 'click') {
        $mapAnchors.removeClass('active');
        $mapElem.addClass('active');
    }

}
    
function initCarousel(carousel, state) {

    if (state == 'init') { 
    
        carousel.startAutoOrig = carousel.startAuto; 
        carousel.startAuto = function() { 
            if (!carousel.paused) { 
                carousel.startAutoOrig(); 
            } 
        } 
        
        carousel.pause = function() { 
            carousel.paused = true; 
            carousel.stopAuto(); 
        }; 
        
        carousel.play = function() { 
            carousel.paused = false; 
            carousel.startAuto(); 
        }; 
        
    }
    
    carousel.play();
    
    $('#carousel-controls').css({
        bottom: "15px",
        left: "600px"
    });
    
    jQuery('#carousel-controls a').bind('mouseover.h', function() {
        
        var carousel = jQuery('#carousel-list').data('jcarousel');
        
        if (carousel.animating !== false) {
            $(this).css({
                opacity: .8
            });
        }
        
    });
    
    jQuery('#carousel-controls a').bind('mouseout.h', function() {
        
        var carousel = jQuery('#carousel-list').data('jcarousel');
        
        if (carousel.animating !== false) {
            $(this).css({
                opacity: .25
            });
        }
        
    });
    
    jQuery('#carousel-map a').bind('click', function(event) {
    
        var c = jQuery.jcarousel.intval(jQuery(this).text()),
            carouselPick = c,
            $mapAnchors = $('#carousel-map a'),
            carousel = jQuery('#carousel-list').data('jcarousel');

            /*
            $('#carousel li').parent().animate({
                opacity: .5
            }, 300, function() {
            */  
            
            if ( carousel.animating !== true ) {
                carouselCount = (carouselCount <= $mapAnchors.length) ? carouselCount : 0;
                carousel.scroll(c);
                
                $mapAnchors.removeClass('active');
                $mapAnchors.eq(c-1).addClass('active');
                sparkCarousel(event, 'animate', carouselPick, $mapElem);
            
            }
            /*  
            });
            */
            
        event.preventDefault();
    });
    
    
    jQuery('#carousel-pause').bind('click', function() {
        
        var $self = $(this);
        
        $('#carousel-pause').css({
            position: 'absolute',
            left: '-9999px'
        });
        
        $('#carousel-play').css({
            position: 'relative',
            left: '0px'
        });
        
        $('#carousel-pause').addClass('hide');
        $('#carousel-play').removeClass('hide');
        
        carousel.pause();
        
        return false;
    });
    
    jQuery('#carousel-play').bind('click', function() {
        
        var $self = $(this);
        
        $('#carousel-pause').css({
            position: 'relative',
            left: '0px'
        });
        
        $('#carousel-play').css({
            position: 'absolute',
            left: '-9999px'
        });
        
        $('#carousel-play').addClass('hide');
        $('#carousel-pause').removeClass('hide');
        
        carousel.play();
        
        return false;
    });
    
    /*
    jQuery('#carousel-next').bind('click', function() {
        carousel.next();
        return false;
    });
 
    jQuery('#carousel-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
    */
    
    // disable if next or prev
    
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto();
    });
 
    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto();
    });
    
    // pause on hover
    
    carousel.clip.hover(function() {
    
        var $mapAnchors = $('#carousel-map a');
            l = $mapAnchors.length;
    
        if ( carouselCount < l )
            carousel.stopAuto();
                    
    }, function() {
    
        var $mapAnchors = $('#carousel-map a');
            l = $mapAnchors.length;
    
        if ( carouselCount < l )
            carousel.startAuto();
        
    });
    
}

function setActive(carousel, state, index, s) {

    var fade = carousel.options.fade,
        $state = $(state),
        $ul = $state.parent(),
        $li = $ul.find('li'),
        $copyContainer = $state.find('.carousel-item-copy'),
        $elems = $state.find('h2 span'),
        header = $("<h2></h2>"),
        $p = $state.find('p'),
        div = $("<div></div>");
    
    // ...
    
    $ul.css({
        height: $li.height()+"px"
    });
    
    $li.css({
        position: "relative",
        left: "0px"
    });
    
    // ...
    
    // remove old content
    
    $copyContainer.find('> div').remove();    
    $p.remove();

    $p.each(function() {
        var $self = $(this),
            $copy = "<p>"+$self.clone().text()+"</p>";
        
        div.prepend($copy);
    });
    
    $p.remove();
    
    $copyContainer.prepend(div);

    $state.find('h2').remove();
    
    $elems.each(function() {
        var $self = $(this),
            $copy = "<span>"+$self.clone().text()+"</span>";
        
        header.prepend($copy);
    });
    
    $state.find('h2').remove();
    
    $copyContainer.prepend(header);
    
    Cufon.refresh();

    
    /**
     * for custom timing in seconds 
     *
     * @class is overridden by @data-duration; 
     * uses carousel object's "auto" if neither one is set
     *
     * @todo        Cleanup. Check if metadata plugin works here.
     */
     
    var secs = ($state.find('> div[class*="carousel-item-duration"]').length) ?
        parseInt($state.find('> div').attr('class').match(/carousel\-item\-duration\-([0-9]+)/)[1]) : false;
    
    if ($state.find("> div").data("duration")) {
        secs = parseInt($state.find("> div").data("duration"));
    }
        
    if ( typeof( secs ) === "number" ) {
        if (secs === 0) {
            carousel.stopAuto();
        } else {
            carousel.stopAuto();
            
            secs = (parseInt(secs)*1000);
            
            window.setTimeout(function() {
                carousel.startAuto();
                carousel.next();
            }, secs );
        }
    }

}
  
jQuery(document).ready(function() {

    $('.wm-city-map').bind('cleartips', function(e) {
    
        var $self = $(this);
        
        $self.find('.wm-city-map-tip').css({left:"-9999px"}).hide();
        
    });
    
    $('.wm-city-map').trigger('cleartips');
    
    $('.wm-city-map img').bind('mouseover', function() {
    
        $('.wm-city-map').trigger('cleartips');
    
    });
    
    $('.wm-city-map .item > a').each(function() { 
        var $a = $(this);
        
        $a.bind('mouseover', function(e) {
            
            var $self = $(this),
                $tip = $self.next();
            
            $('.wm-city-map').trigger('cleartips');
            $tip.addClass('active-tip').css({left:"0"}).fadeIn('slow');
        
        });
        
    });

    jQuery("#carousel-list").jcarousel({
        scroll: 1,
        auto: 3,
        wrap: 'circular',
        easing: 'easeInOutQuint',
        animation: 3000,
        initCallback: initCarousel,
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemLoadCallback: {
            onBeforeAnimation: function(carousel, state, callbackName) {
                
                var opacitySetting = ($.browser.msie) ? 'show' : 1,
                    $lis = $('#carousel li'),
                    $mapAnchor = $('#carousel-map a');
                
                carouselControl = false;
                
                //alert(state);
                
                if ( state === 'init' ) {
                
	                if ( !$.browser.msie ) {
	
	                    $lis.parent()
	                        .delay(200)
	                        .animate({
	                            opacity: opacitySetting
	                        }, 1500);
	
	                } else {
	                	$lis.parent().show();
	                }
                
                } else {
                    $('#carousel-controls a').animate({
                        opacity: .25
                    }, 1000);
                    
                }

            },
            onAfterAnimation: function(carousel, state, callbackName) {
                
                var $mapAnchor = $('#carousel-map a'),
                    $ctrls = $('#carousel-controls a'),
                    opacitySetting = ($.browser.msie) ? 'show' : .8;
                    
                carouselControl = true;
                
                $ctrls.animate({
                    opacity: opacitySetting
                }, 2000);
            }
        },
        itemFirstInCallback: {
            onBeforeAnimation: setActive
        },
        itemLastOutCallback: {
            onAfterAnimation: function(carousel) {
                
                var $lis = $('#carousel li');
                
                //carousel.pause();

                //if ( !$.browser.ie ) {
                $lis.parent()
                    .animate({
                        opacity: 1
                    }, 700, function() {
                        //carousel.play();
                    });
                //}
                
            }
        },
        itemVisibleInCallback: {
            onBeforeAnimation: function(carousel, li, index, state) {
                
                carouselCount++;
                
                sparkCarousel('animate', state, index);
                
            }  
        },
        fade: false
    });
    
    $('.module-branding-carousel ul').each(function() {
    
        var $self = $(this),
            marginBottom = 0,
            l = ($self.find('li').length),
            c = 0,
            init = true,
            $lis = $self.find('li'),
            _src = $lis.eq(0).find('img').attr('src');
            crossFade = true;
        
        $self.height( $lis.height() + marginBottom );
        $lis.filter(':eq(1)').hide();
        $lis.eq(c).addClass('active');
        
        window.setInterval(function() {
        
            var $oldactive = $self.find('li.active');
            
            if ( (c+1) < l ) {
                c = c + 1;
                _src = $lis.eq(c-1).next().find('img').attr('src');
            } else {
                c = 0;
                _src = $lis.eq(0).find('img').attr('src');
            }

            if (crossFade === true) {
            $lis.parent().parent().css({
                "background": 'url('+_src+')'
            });
            }
            
            //$lis.parent().animate({opacity: 0}, 500);
            $lis.eq(c).addClass('active');
            $lis.parent().animate({opacity: 0}, 500, function() {
                $lis.hide();
                $lis.eq(c).show();
            });

            $lis.parent().animate({opacity: 1}, 500, function() {
                $lis.eq(c).addClass('active')
            });
        
            if ( init === true ) {
                init = false;
            }
        
        }, 4000);
    
    });
  
});