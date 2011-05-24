jQuery.validator.addMethod("postalcode", function(postalcode, element) {
    return this.optional(element) || postalcode.match(/(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXYabceghjklmnpstvxy]{1}\d{1}[A-Za-z]{1} ?\d{1}[A-Za-z]{1}\d{1})$/);
}, "Please specify a valid postal/zip code");

$.metadata.setType('attr', 'validate');

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
 * Dumpster jQuery
 */

$(function() {
    
});
