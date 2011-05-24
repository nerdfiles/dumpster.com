// JavaScript Document

$(function(){
		
/* ADDCLASSES */      									
	var ele_homecontentpodlast = $('#home_features div.homecontentpod:last'); if(ele_homecontentpodlast[0]) { $(ele_homecontentpodlast).addClass('norightmargin'); }
	/*var ele_homepromopodlast = $('#home_features a:last'); if(ele_homepromopodlast[0]) { $(ele_homepromopodlast).addClass('clearfix'); }*/
	$('#home_features a:last').addClass('clearfix');
	var ele_homefullcontentpodlast = $('#home_features_full div.homecontentpod:last'); if(ele_homefullcontentpodlast[0]) { $(ele_homefullcontentpodlast).addClass('norightmargin'); }
	var ele_facilitylistlast = $('#facility_list ul:last'); if(ele_facilitylistlast[0]) { $(ele_facilitylistlast).addClass('norightmargin'); } 	
	var ele_h1hero = $('h1.hero'); if (ele_h1hero[0]) { $('#breadcrumb').addClass('breadcrumbwithhero'); }
	var ele_lasttitlenav = $('#titlenav li:last'); if (ele_lasttitlenav[0]) { $(ele_lasttitlenav).addClass('noborder'); }
	$('#customer_service_faq_nav li:last').addClass('noborder');
	$('.marketing-data-table-one.zebra-stripes tr:even').addClass('even');	

/* INTERSTITIAL MODAL LOGIC REMOVED, MAY ADD BACK IN POST TEAM DISCUSSION */	
	$("#right_content a[href^='http://'],#right_content a[href^='https://']").addClass('modalInterstitial').attr("target", "_blank");	
				
/* APPENDS */
	// CAH - 20110113: removed reference to #home_left .home_3col h2 because we don't want angle brackets on the column header links on the default home page
	$('#content .sitemap h2 a, #content .sitemap h3 a, .pod_2colA p a, .pod_2colB h3 a, #right_content .rightcontentpod a span, .related_links li a, #home_carousel_main li a strong, #home_features .homecontentpod a, #facility_list li a').each( function () { 
		if ($(this).attr('target') != '_blank') {
			$(this).append('&nbsp;&raquo;');
		} else {			
			if ($(this).hasClass('modalInterstitial')) {
				// CAH - 20110113: added ".attr('title','Leaving the site')" to the chain
				$(this).attr('title','Leaving the site').append('&nbsp;<img src="/_assets/images/icons/icon_external_link.gif" alt="" style="display: inline; margin-bottom: -2px;" />'); 
			}
		}
	});	
	$('a.btn_cta_lg.home_cta_diag.modalInterstitial').attr('title','Leaving the site')
	$('#cs_content a[href$=.pdf]').addClass('link-pdf');
	$('.home_3col ul').each(function(){ $("a:last",this).append('&nbsp;&raquo;'); });
	//if($('#home_hero').length) { } else { $('#right_content').append('<span class="rightbottom"></span>'); }
	//$('#cs_nav').prepend('<span class="cs_on_under">&nbsp;</span>'); 
		

/* TOGGLES */
	$('.customer_service_faq_list a.faq_question, .customer_service_faq_list .plusminussign').click(function(){ $(this).parent('li').children('.faq_answer').slideToggle('fast'); if( $(this).parent().hasClass('faqs_minus') ) $(this).parent().removeClass('faqs_minus'); else $(this).parent().addClass('faqs_minus'); });
	/* $('.facilities_togglecanus').click(function(){ $('.facilities_usdrop,.facilities_canadadrop').toggle(); }); */
	$('#cs_content h3 span a.faqs_expandcollapse').click(function() { $(this).toggleClass('faqs_minus'); if( $(this).hasClass('faqs_minus') ) { $('.customer_service_faq_list li').addClass('faqs_minus'); $('.faq_answer').slideDown('fast'); } else { $('.customer_service_faq_list li').removeClass('faqs_minus'); $('.faq_answer').slideUp('fast'); } });
	

/* IF HREF IS BLANK, RETURN FALSE */
	var ele_globalanchors = $('a'); $(ele_globalanchors).bind('click', function(){ var getHref = $(this).attr('href'); if (getHref == "") { return false } });

	/* SET THE HEIGHT OF #CS_NAV TO THAT OF THE CONTENT, THEN APPEND THE TOP ON-STATE SHADOW TO THE LEFT NAV ON STATE */
	getContentHeight = $('#main_content').height(); setCSNavHeight = (getContentHeight-100); $('#cs_nav').height(setCSNavHeight);
	$('#cs_nav ul li.csnavon').each(function(){ $(this).before('<span class="csnav_ontop">&nbsp;</span>'); });


/* SUBPAGE VIDEOS */
		$("a[href*='/_assets/flash/swf/videoplayer.swf']").each(function(){
		var videoName = this.href.match(/\w+\.flv/);
      	var href = this.href.replace("&amp", "&");
		var hrefA = this.href.replace("&amp", "&") + '&autoPlay=false';
      	var html = '<object type="application\/x-shockwave-flash" data="' + href + '" width="397" height="199"><param name="movie" value="' + href + '" \/><\/object>';
		var htmlA = '<object type="application\/x-shockwave-flash" data="' + hrefA + '" width="397" height="199"><param name="movie" value="' + hrefA + '" \/><\/object>';
		var cookie = $.cookie(videoName + '.c');
		if (cookie != null) {
			$(this).replaceWith(htmlA);
			$.cookie(videoName + '.c', 'false');
		} else {
			$(this).replaceWith(html);
			$.cookie(videoName + '.c', 'false');
		}
      });		
		
		
/* HOMEPAGE CAROUSEL */
	var ele_homeCarousel = $('#home_carousel_main');
	if ( ele_homeCarousel[0] ) {
		var carouselCount = $('#home_carousel_main ul li').size();
		if (carouselCount == 5) { $('#home_carousel').addClass('carousel_5'); }

		var carouselCurrent = 1;
		var carouselGroup = (carouselCurrent+4);
		var carouselWidth = ((126*carouselCount)+'px');
		$('#home_carousel_main ul').css('width',carouselWidth);
		
		$('.cntr_current').html(carouselCurrent);
		$('.cntr_group').html(carouselGroup);
		$('.cntr_total').html(carouselCount);
		
		var leftandrightarrows = '<a href="" class="home_carousel_left"></a><a href="" class="home_carousel_right"></a>';
		$(ele_homeCarousel).prepend(leftandrightarrows);

		var carousel_block = false;
		$('.home_carousel_right').bind('click',function(){
			if(!carousel_block) {
				var left = parseFloat($('#home_carousel_main ul').css('left'));
				var maxWidth = (126*(carouselCount-5))*-1;
				if ((left<1)&&(left>maxWidth)){
					carousel_block = true;
					left=left-126;
					carouselCurrent++;
					carouselGroup++;
					$('.cntr_current').html(carouselCurrent);
					$('.cntr_group').html(carouselGroup);
					$('#home_carousel_main ul').stop(true, true).animate({'left':left+'px' },500,function() {carousel_block=false});	
					$('.home_carousel_left').css('background-position','top').css('cursor','pointer'); 
					if(left==maxWidth){ $('.home_carousel_right').css('background-position','bottom').css('cursor','default'); }				
				}
			}
			return false;
		});
		
		$('.home_carousel_left').bind('click',function(){
			if(!carousel_block) {
				var left = parseFloat($('#home_carousel_main ul').css('left'));
				var maxWidth = (126*(carouselCount-5))*-1;
				if ((left>=maxWidth)&&(left<0)){
					carousel_block = true;
					left=left+126;
					carouselCurrent--;
					carouselGroup--;
					$('.cntr_current').html(carouselCurrent);
					$('.cntr_group').html(carouselGroup);
					$('#home_carousel_main ul').stop(true, true).animate({'left':left+'px' },500,function() {carousel_block=false});
					$('.home_carousel_right').css('background-position','top').css('cursor','pointer'); 	
					if(left==0){ $('.home_carousel_left').css('background-position','bottom').css('cursor','default'); }				
				}
			}
			return false;
		});
	}
			
 				

/* HIDE/SHOW FORM INPUT LABELS AND AUTOCOMPLETE AS APPROPRIATE */
	var arr_USStates = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
	var arr_USTerritories = ["American Samoa","Federated States of Micronesia","Guam","Marshall Islands","Northern Mariana Islands","Palau","Puerto Rico","Virgin Islands"]
	var arr_CanProvinces = ["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon"];
	var arr_USStatesAbbrev = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
	var arr_USTerritoriesAbbrev = ["AS","FM","GU","MH","MP","PW","PR","VI"]
	var arr_CanProvincesAbbrev = ["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"];
	var arr_matches = arr_USStates.concat(arr_USTerritories, arr_CanProvinces, arr_USStatesAbbrev, arr_USTerritoriesAbbrev, arr_CanProvincesAbbrev); 
	var arr_invalidStartingChars = ["e","j","x","z"]; // not used as first char in any state or province
	var arr_invalidStartingChars_CanPostalCodes = ["d","f","i","o","q","u","z"]; // not used in canadian postal codes
	var arr_digits = ["0","1","2","3","4","5","6","7","8","9"];
	var regex_1 = /^(\d{0,5}|(\d{0,5}(?:(-|\s))?\d{0,4})|[A-Za-z]|[A-Za-z]\d|[A-Za-z]\d[A-Za-z]|[A-Za-z]\d[A-Za-z](?:(-|\s))?\d*|[A-Za-z]\d[A-Za-z](?:(-|\s))?\d[A-Za-z]|[A-Za-z]\d[A-Za-z](?:(-|\s))?\d[A-Za-z]\d)$/;
	var regex_2 = /^(\d{5}|\d{5}(?:(-|\s))?\d{4}|[A-Za-z]\d[A-Za-z](?:(-|\s))?\d[A-Za-z]\d)$/;
	
	//set max input lengths
	var longestStr = '';
	for(var i=0;i<arr_matches.length;i++){
		if(arr_matches[i].length > longestStr.length){						
			longestStr = arr_matches[i];
		}					 
	}
	var maxTextLength = longestStr.length;
	var maxCodeLength = 10;
	
	var ele_searchInput = $('#input_sitesearch');
	if ( ele_searchInput[0]) { toggleLabel(ele_searchInput); }			
	
	//var ele_modalZipInput = $('#input_modalzipcode'); 
	var ele_facilitySearchInput = $('#input_facilitysearch');
	var ele_floInput = $('#input_findlocalinfo');
	var input = '';
	
	//if(ele_modalZipInput[0]){validateInput(ele_modalZipInput, true);}
	if(ele_facilitySearchInput[0]){validateInput(ele_facilitySearchInput, true);}
	if(ele_floInput[0]){validateInput(ele_floInput, false);}
	
	function validateInput(inputElem, zipOnly) {
		toggleLabel(inputElem); 
		//should options be sent differently?  check api
		$(inputElem).validate_input({matches : arr_matches, re1 : regex_1, re2 : regex_2, invalidChars : arr_invalidStartingChars, invalidChars2 : arr_invalidStartingChars_CanPostalCodes, digits : arr_digits}, zipOnly, maxTextLength, maxCodeLength);
		if(!zipOnly){$(inputElem).autocomplete(arr_matches, { width: 155, max: 30, highlight: false, multiple: false, selectFirst: true, scroll: true, scrollHeight: 300 });}
	}//endfun validateInput
				
			
				
/* MODAL VIDEO PLAYER MARKUP & LOGIC */
	$("a.modalVideoPlayer").click(function(){
		var modalPaddingTop = 25;
		var videoHeight = 303; 
		var videoWidth = 600;
		var hrefTarget;
		if(window.location.hash == "#autoOverlay"){ 
			//hrefTarget = location.href.replace('#autoOverlay', '');
			hrefTarget = "javascript:location.href=location.href.replace('#autoOverlay', '')";			
		}else{
			//hrefTarget = location.href;
			hrefTarget = "javascript:location.href=location.href";
		} 
	
		//var videoPath is provided by the DOM
		$('body').append('<div id="blackout"></div><div id="modalVideoPlayer" style="z-index:10000; height:'+(videoHeight+modalPaddingTop)+'px; width:'+videoWidth+'px;"><div class="modal_content right_rail_CTA"><a href="'+hrefTarget+'" class="btn_modalclose close">Close</a><div id="swfDiv" style="display:block;"></div></div></div>');
		openModalVideo('#modalVideoPlayer', true);
		swfobject.embedSWF("/_assets/flash/swf/videoplayer.swf?"+videoPath, "swfDiv", videoWidth+"px", videoHeight+"px", "10.0.0", "/_assets/flash/swf/expressInstall.swf", "", "", "", "")
	});

/* MODAL VIDEO PLAYER - TRIGGER .click() */

	if(window.location.hash == "#autoOverlay"){
		var videoEmbed = $("a.modalVideoPlayer")
		if(videoEmbed[0]){
			$(videoEmbed).trigger('click');
		}
	}

	
/* MODAL MARKUP */			
	var modalmarkup_zip = ' \
	<div id="blackout"></div><div id="modalZipCode"><div class="modal_content"><a href="javascript:location.href=location.href" class="btn_modalclose close">Close</a>\
	<h2>Please enter your location</h2> \
	<p>So that we can direct your inquiry to your local Waste Management representative, please provide your ZIP or postal code.</p> \
	<form id="form_modalzipcode" action="javascript:;"><fieldset id="modalzipcode"> \
		<label for="input_modalzipcode">ZIP or Postal Code</label> \
		<input type="text" id="input_modalzipcode" name="input_modalzipcode" value="" /> \
		<input type="submit" id="submit_modalzipcode" /> \
	</fieldset></form> \
	</div></div>';   


/* CUSTOMER SERVICE AND CONTACT US MODAL LOGIC */
	var zipFound = false
	var zipValue = "";
	var modalBound = false;
	var cookie = $.cookie("siteId");
		
	if (cookie != null && cookie != "") {
		var token = cookie.split('|');
		if (token.length >= 2) {
			zipFound = (token[1].length > 0);
			if (zipFound) zipValue = token[1];
		}
	}
	
	if (zipFound) {
		if ($("#input_findlocalinfo").length > 0) {
			$("#input_findlocalinfo").prev().html("");
			toggleLabel('#input_findlocalinfo');
			$('#input_findlocalinfo').val(zipValue);
			$("#input_findlocalinfo").parents('form').attr('action','/facility-locator.jsp');
		}
		if ($("#input_facilitysearch").length > 0) {
			$("#input_facilitysearch").prev().html("");
			toggleLabel('#input_facilitysearch');
			$("#input_facilitysearch").val(zipValue);
			$("#input_facilitysearch").parents('form').attr('action','/facility-locator.jsp');
		}
	}
	else {
		if (location.href.indexOf("/customer-service/") == -1) {
			$("a[href*='/customer-service/']").each(function(){
				$(this).addClass('modalZipCode');					
			});
			$('a.modalZipCode').bind('click',function(){	
				$('body').append(modalmarkup_zip);
				sendZipCodeModalAnalytics('Location');
				openModal('#modalZipCode'); 
				var getHref = $(this).attr('href');
				toggleLabel('#input_modalzipcode');
				$('#input_modalzipcode').validate_input({matches : arr_matches, re1 : regex_1, re2 : regex_2, invalidChars : arr_invalidStartingChars, invalidChars2 : arr_invalidStartingChars_CanPostalCodes, digits : arr_digits}, true, maxTextLength, maxCodeLength);
				$('#form_modalzipcode').submit(function(){
					if (!modalBound) {
						modalBound = true;
						var getValue = $("#input_modalzipcode").val();
						location.href = getHref+"?zip="+getValue;	
					}
					return false;		
				});
				return false; 
			});
		}
	}
	
	
	
		
/* NEW PDF LOGIC. OPEN IN NEW WINDOW WITH "ABBREVIATED" HEADER 	*/	
	$('a[href$=.pdf]').bind('click',function(e){
		var getHref = $(this).attr('href');
		window.open(getHref,'wm_pdf','status=yes,resizable=yes');
		e.preventDefault();
	}); 
		

/* CALL FUNCTION TO DEAL WITH FIXED POISTION. KEEPS FROM OVERLAPPING FOOTER */
	fixed_to_absolute('#rightnav','#footer');
	
	/* DIVIDEND HISTORY */
$('.dividend_history td').hover( function() { $('.info_tooltip', this).show(); }, function() { $('.info_tooltip', this).hide(); });
				
/**
 * Sticky Footer
 *
 * footer always flush bottom
 *
 * @author          kfargaso
 * @date            3-2-2011
 * @lastmodifiedby  aalexan1
 * @lastmodified    11:21AM 05-02-2011
 */
 
$(window).bind('resize initFooterPos', function(){
    var footer = $('#footer'),
        win = $(window),
        bod = $('body');
    
    if ( win.height() > bod.height() ) {
    
        footer.css({
            position: "relative",
            bottom: bod.height() - win.height()
        });
        
    } else {
    
        footer.css({
            position: "relative"
        });
        
    }
    
}).trigger('initFooterPos');


// JS snippet from Aaron for Pay my bill tab. 11-19-2010
    $('li.pay-my-bill').hover(function() {
        $('li.pay-my-bill > a').toggleClass('hover');
        $(this).toggleClass('hover');
    });		
}); 



		
/* SIGN UP FOR SERVICE - TOGGLE CHECK BOX DIVS */
var signup_toggle = $('.toggle_div .toggle_title');
$(signup_toggle).hover(function() { $(this).children('.toggle_title_a').css({'text-decoration':'underline'}); },
function() { $(this).children('.toggle_title_a').css({'text-decoration':'none'}); });

	//change toggle box values
$(signup_toggle).click(function() {
  $(this).parent('div').children('.toggle_div_content').slideToggle();
  if( $(this).children('.toggle_title_box').html() == '+' ){
	   $(this).children('.toggle_title_box').css({'line-height':'.8em'}).html('&ndash;');	   
  }else{ $(this).children('.toggle_title_box').css({'line-height':'1em'}).html('+');}
});



/*  FORM VALIDATION */
//  Add phone validation method
$.validator.addMethod("phoneUS", function(phone_number, element) {
	phone_number = phone_number.replace(/\s+/g, "");
	return this.optional(element) || phone_number.length > 9 && phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please enter a 9-digit phone number in the format:###-###-####");

jQuery.validator.addMethod("postalcode", function(postalcode,element) {
	return this.optional(element) || postalcode.match(/(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXYabceghjklmnpstvxy]{1}\d{1}[A-Za-z]{1} ?\d{1}[A-Za-z]{1}\d{1})$/);
}, "Please specify a valid postal/zip code");

// Validate the form
$("#probForm,").validate({
	rules: {			emailId: {email: true, required: "#preferEmail:checked"},			phoneNumber: {phoneUS: true, required: "#preferPhone:checked"},			zip_contact: {required: true, postalcode: true},			zip: {postalcode: true},			state_contact: "required",			fname: "required",			lname: "required",			city_contact: "required",			streetaddress_contact: "required",			customer_service_preferred_contact: "required",			problemDesc: "required"		},		messages: {			emailId: "Please enter your email address",			zip_contact: "Please enter your zip code or postal code",			state_contact: "Please select your state or province",			fname: "Please enter your first name",			lname: "Please enter your last name",			city_contact: "Please enter your city",			streetaddress_contact: "Please enter your address",			customer_service_preferred_contact:"Please enter a preferred contact method",			problemDesc:"Please enter a message describing the issues you are having",			phoneNumber: "Please enter your phone number"		}
});



/* FORM - add asterisks to required fields - KF added &nbsp; at end of all spans*/
$('form #fname').prev('label').prepend('<span class="required">*&nbsp;</span>');
$('form #lname').prev('label').prepend('<span class="required">*&nbsp;</span>');
$('form #addressContact').prev('label').prepend('<span class="required">*&nbsp;</span>');
$('form #cityContact').prev('label').prepend('<span class="required">*&nbsp;</span>');
$('form #stateContact').prev('label').prepend('<span class="required">*&nbsp;</span>');
$('form #zipContact').prev('label').prepend('<span class="required">*&nbsp;</span>');
//not required
$('form #company').prev('label').prepend('<span class="">&nbsp;&nbsp;</span>');
$('form #emailId').prev('label').prepend('<span class="">&nbsp;&nbsp;</span>');
$('form #phoneNumber').prev('label').prepend('<span class="">&nbsp;&nbsp;</span>'); 

/* FORM - Copy a set of fields to another set of fields */
$("input#copy-form-fields").click(function(){ 
	if ($("input#copy-form-fields").is(':checked')){
		// copy values
		if($("input#cityContact").val().length > 0) {
			$("input#city").val($("input#cityContact").val()).next('label.error').css('display','none');
		}
		if($("input#zipContact").val().length > 0) {
			$("input#zip").val($("input#zipContact").val()).next('label.error').css('display','none');
		}
		if($("#stateContact").val().length > 0) {
			$("#state").val($("#stateContact").val()).next('label.error').css('display','none');
		}
		if($("input#addressContact").val().length > 0) {
			$("input#streetAddress").val($("input#addressContact").val()).next('label.error').css('display','none');
		}
	}else{
		// Clear on uncheck
		$("input#city").val("");
		$("input#zip").val("");
		$("input#streetAddress").val("");
		$("#stateDropdown").val("");
	}
}); // ending copy logic
// END $(function(){

/* FUNCTION - TOGGLE FORM LABELS/INPUTS */
/*function toggleLabel(label_ref){
	var inputValue = $(label_ref).attr('value');	
	$(label_ref).next().val("");
	if(inputValue != ""){ $(label_ref).prev().css('display','none'); } else { $(label_ref).prev().css('display','block'); }				
	$(label_ref).focus(function(){
		$(this).prev().css('display','none');
		$(this).blur(function(){
			var getInputValue = $(this).attr('value');
			if (getInputValue == ""){ $(this).prev().css('display','block'); }
		});
	});
}
*/
// EXPAND APPROPRIATE SERVICES SECTION BASED ON CUSTOMER TYPE
function expandServiceBox(divID){
	productDiv = $('#'+divID);
	$(productDiv).children('.toggle_title').children('.toggle_title_box').css({'line-height':'.8em'}).html('&ndash;');
	$(productDiv).children('.toggle_div_content').slideToggle();
}

function toggleLabel(curr_input){
	$(curr_input).next().val("");
			$(curr_input).val('');
	$(curr_input).prev().click(function() {
			$(this).hide();
			$(curr_input).focus();
			$(curr_input).blur(function() { if( $(this).val() == '' ) { $(this).prev().css('display','block'); } });       
	});
	$(curr_input).click(function() {
			$(this).prev().hide();
			$(this).focus();
			$(this).blur(function() { if( $(this).val() == '' ) { $(this).prev().css('display','block'); } });
	});
} 


/* FUNCTION - OPEN MODAL ZIP code */
function openModal(modalId){
	var blackoutHeight = $(document).height();
	var blackoutWidth = $(window).width();		
	var blackout = $('#blackout');	
	var winH = $(window).height();
	var winW = $(window).width();
	var modalHeight = $(modalId).height();					
	$(blackout).css({'display':'none','width':blackoutWidth,'height':blackoutHeight}).fadeIn(500).fadeTo(100,0.8, function(){ $(modalId).css('top',  winH/2-$(modalId).height()/2).css('left', winW/2-$(modalId).width()/2).css('height', modalHeight).fadeIn(500); });		    			
	if($.browser.msie && $.browser.version == 6){ $('#stateDropdown, #provinceDropdown, #email_topic_dropdown').addClass('hidedropdown'); }
	$(blackout,'div.modal_content .btn_modalclose').bind('click', function(){ closeModal(modalId); return false; });
	if($.browser.msie && $.browser.version == 6){ 
		$('html').scrollTop(0);
	} else {
		$('html','body').animate({scrollTop:0},'fast');
	}
}




/* FUNCTION - OPEN MODAL */
function openModalVideo(modalId, isVideo){
		var blackoutHeight = $(document).height();
		var blackoutWidth = $(window).width();		
		var blackout = $('#blackout');	
		var winH = $(window).height();
		var winW = $(window).width();
		var modalHeight = $(modalId).height();
		$(blackout).css({'width':blackoutWidth,'height':blackoutHeight}).fadeIn(500).fadeTo(100,0.8, function(){
			if(isVideo && $.browser.msie){$(modalId).css('position','absolute')}
			$(modalId).css('top',  winH/2-$(modalId).height()/2).css('left', winW/2-$(modalId).width()/2).css('height', modalHeight).fadeIn(500); 
		});		    			
		$(blackout,'div.modal_content .btn_modalclose').bind('click', function(){ closeModal(modalId); return false; });
		if($.browser.msie && $.browser.version == 6){ 
			$('html').scrollTop(0);
		} else {
			$('html','body').animate({scrollTop:0},'fast');
		}
	}



/* FUNCTION - CLOSE MODAL */
function closeModal(modalId){
	if($.browser.msie && $.browser.version == 6){ $('#stateDropdown, #provinceDropDown, #email_topic_dropdown').removeClass('hidedropdown'); }
	$('#blackout').remove(); 
	$(modalId).remove();
	return false;
}

	
/* FORM - character counter */
function limitChars(id, limit, statusId){
	var text = $('#'+id).val(); 
	var textlength = text.length;
	if(textlength > limit){
		$('#'+id).val(text.substr(0,limit));
		return false;
	}else{
		$('#' + statusId).html(textlength +' out of '+ limit + ' characters');
		return true;
	}
}


				
/* ANALYTICS */
var analyticsSent = false;

function sendLocationAnalytics(fieldName) {
	sendFindAFacilityAnalytics(fieldName)
}

 

/* REMOVING PER ABOVE FUNCTION AND CALL
function sendLocationAnalytics(fieldName) {
	var val = $("#" + fieldName).val();
	s.linkTrackVars = "prop2,eVar7";
	s.linkTrackEvents = "event12";
	s.prop2 = "Find Local Information";
	s.eVar7 = s.pageName + "|" + val;
	s.events = "event12";
	s.tl(true, "o", s.prop2 + "|" + s.pageName);
}*/

 

function sendFindAFacilityAnalytics(fieldName) {
	var val = "";
	if (fieldName instanceof Array) {
		for(var i=0; i<fieldName.length; i++) {
			val = $("#" + fieldName[i]).val();
			if (val != '') break;
		}
	} else {
		val = $("#" + fieldName).val();
	}
	if (val != '') {
		sendFindAFacilityAnalyticsValue(val);
	}
}


function sendFindAFacilityAnalyticsValue(fieldValue) {
	if (!analyticsSent) {
		analyticsSent = true;
		s.linkTrackVars = "prop2,eVar7,events";
		s.linkTrackEvents = "event13";
		s.prop2 = "Find a Facility";
		s.eVar7 = s.pageName + "|" + fieldValue.replace(/&nbsp;\xbb/g,"");
		s.events = "event13";
		s.tl(true, "o", s.prop2 + "|" + s.pageName);
	}
}


function sendZipCodeModalAnalytics(caption) {
	if (!analyticsSent) {
		analyticsSent = true;
		s.pageName = "Pop-up: " + caption;
		s.t();
	}
}


/*FIXED ELEMENT RIGHT NAV. KEEPS FROM GOING OVER FOOTER 
function fixed_to_absolute(fixed_element, footer)
{
var ie_test = getInternetExplorerVersion();
if(ie_test==-1 || ie_test>=7){
	$(fixed_element).css('position','absolute');
	var ini_pos_fixed = $(fixed_element).position();
	var max_top = $('body').height() - $(footer).height() - ini_pos_fixed.top - $(fixed_element).height() - 114;
	$(fixed_element).css('position','fixed');
	$(window).scroll(function() {
		var scroll_val = $(window).scrollTop();
		if(scroll_val >= max_top)
		{
			var max_top_val = max_top + 60 + 'px';
			$(fixed_element).css({'position':'absolute','top':max_top_val});
		}
		else if (scroll_val < max_top) { $(fixed_element).css({'position':'fixed','top':ini_pos_fixed.top}) }
	});
}
}
*/
	
function fixed_to_absolute(fixed_element, footer){
	var ie_test = getInternetExplorerVersion();
	var test_el = $(fixed_element);
	if(test_el[0]){
		if(ie_test==-1 || ie_test>=7){	
			$(fixed_element).css('position','absolute');
			var ini_pos_fixed = $(fixed_element).position();
			var max_top = $('body').height() - $(footer).height() - ini_pos_fixed.top - $(fixed_element).height() - 114;
			$(fixed_element).css('position','fixed');
			
			$(window).scroll(function() {
				var scroll_val = $(window).scrollTop();
				if(scroll_val >= max_top){
					var max_top_val = max_top + 'px';
					$(fixed_element).css({'position':'absolute','top':max_top_val});
				}
				else if (scroll_val < max_top) { $(fixed_element).css({'position':'fixed','top':ini_pos_fixed.top}) }
			});	
		}			
	}
}


// Returns the version of Internet Explorer or a -1 (indicating the use of another browser).
function getInternetExplorerVersion() {
	var rv = -1; // Return value assumes failure.
	if (navigator.appName == 'Microsoft Internet Explorer') {
	var ua = navigator.userAgent;
	var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	if (re.exec(ua) != null)
	  rv = parseFloat( RegExp.$1 );
	}
	return rv;
}




//$("#content div.sitemap ul li:eq(2)").after("<div class='clear'></div>");