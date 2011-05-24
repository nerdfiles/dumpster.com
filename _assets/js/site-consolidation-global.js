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
    uCarouselCount = carouselCount,
    carouselControl = false;
    
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
    
    $('#carousel-play').hide();
    
    carousel.play();
    
    $('#carousel-controls').hide().css({
        bottom: "20px",
        right: "20px" 
    }).delay(1500).fadeIn('slow');
    
    jQuery('#carousel-map a').bind('mouseover', function() {
        $(this).addClass('hover');
    });
    
    jQuery('#carousel-map a').bind('mouseout', function() {
        $(this).removeClass('hover');
    });
    
    jQuery('#carousel-map a').bind('click', function(e) {
    
        var c = jQuery.jcarousel.intval(jQuery(this).text()),
            uCarouselCount = c,
            $a = $('#carousel-map a');
        
        if (carouselControl === false) {
        
            var carouselPick = c,
                carouselLength = ($a.length);
            
            $a.animate({
                opacity: .1
            }, 1000);
                
            carouselCount = carouselPick-1;
                
            if ( carouselLength === carouselCount )
                carouselCount = 0;
            
            $a.removeClass('active');
            $a.eq(carouselCount).addClass('active');
            
            //carouselPick = null;
            
            carouselControl = true;
            
            // Leave this alone; it's smart enough to know which node to
            // actually scroll to.
            
            //if ( !$.browser.ie ) {
            $('#carousel li').parent().animate({
                opacity: .5
            }, 1600, function() {
                carousel.scroll(c);
            });
            //}
        
        } else {
            //var carouselPick = c;
        }
        
        //carousel.scrollTail(c);
        //return false;
        e.preventDefault();
    });
    
    
    jQuery('#carousel-pause').bind('click', function() {
        
        var $self = $(this);
        
        $('#carousel-pause').hide();
        $('#carousel-play').show();
        
        carousel.pause();
        //carousel.pauseAuto();
        
        return false;
    });
    
    jQuery('#carousel-play').bind('click', function() {
        
        var $self = $(this);
        
        $('#carousel-play').hide();
        $('#carousel-pause').show();
        
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
    
        carousel.stopAuto();
        
    }, function() {
    
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
    
    $('#carousel-controls a').animate({
        opacity: .5
    }, 700);
    
    if ( carouselCount < $('#carousel-map a').length ) {
        
        carouselCount = carouselCount + 1;
        
    } else {
    
        carouselCount = 1;
    
    }

}
  
jQuery(document).ready(function() {

    $('.wm-area area').each(function(e) {
    
        var $self = $(this),
            coords = $self.attr('coords'),
            coords = coords.split(","),
            units = "px",
            x = coords[0]+units,
            y = coords[1]+units,
            w = $self.width(),
            h = $self.height();
            
        $self.parent().parent().find('img').css({
            position: "absolute",
            "z-index": "8999"
        });
        
        $self.parent().parent().css({
            position: "relative",
            height: $self.parent().parent().find('img').height()+"px"
        });
    
        $self.bind('loadFrame', function(e) {
            var id = 'frame-'+Math.floor((Math.random()*1000)*(Math.random()*1000)),
                $container = $self.parent().parent(),
                $frame =  $("<div class='frame'>")
                            .attr('id', id)
                            .css({
                                cursor: "pointer",
                                position: "absolute",
                                "z-index": "9000",
                                left: x,
                                top: y,
                                width: w,
                                height: h,
                                background: "orange",
                                border: "1px #ccc solid",
                                opacity: 0
                            });
            
            $('#'+this.oldFrameId).animate({opacity: 0}, 500, function() { $(this).remove() });
            
            $container.prepend($frame);
            
            var $newFrame = $self.parent().parent().find("#"+id);
            
            $newFrame.animate({
            
                opacity: 1,
                easing: "easeOutExpo"
            
            }, 900, function() {
            
                $(this).delay(300).animate({
                
                    opacity: 1
                
                }, 500);
            
            });
            
            $newFrame.bind('click.rm', function(e) {
                
                var $self = $(this);
                
                $self.animate({
                    opacity: 0
                }, 500, function() { 
                    $(this).remove();
                });
                
                //console.log("You've just interacted with a polygon, rect or circle. And you've now just cleared away a lazy modal.");
            
                $self.unbind('click.rm');
                
            });
            
            this.oldFrameId = id;
            
        });
        
        $self.trigger('loadFrame');
        
        $self.bind('click', function(e){
            $self.trigger('loadFrame');
            
            e.preventDefault();
        });
    
    });

    jQuery("#carousel-list").jcarousel({
        scroll: 1,
        auto: 7,
        wrap: 'circular',
        easing: 'easeInOutSine',
        animation: 2500,
        initCallback: initCarousel,
        buttonNextHTML: null,
        buttonPrevHTML: null,
        itemLoadCallback: {
            onBeforeAnimation: function(carousel, state, callbackName) {
            
                // onpageload intro fade
                
                var $lis = $('#carousel li');
                
                carouselControl = true;
                
                if ( state === 'init' ) {
                
                //if ( !$.browser.ie ) {

                $lis.parent()
                    
                    .delay(200)
                    
                    .animate({
                        opacity: 1
                    }, 1500);

                //}
                
                }

            },
            onAfterAnimation: function(carousel, state, callbackName) {
                
                var $a = $('#carousel-map a'),
                    $ctrls = $('#carousel-controls a');
                
                carouselControl = false;
                    
                $a.removeClass('active');
                $a.eq(carouselCount-1).addClass('active');
                
                $ctrls.animate({
                    opacity: 1
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
                
                $lis.parent()
                    .animate({
                        opacity: 1
                    }, 700, function() {
                        //carousel.play();
                    });
                
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