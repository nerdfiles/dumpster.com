/**
 * HR Careers Employee Login Form
 */

var $form_employeeLogin = $('#form_employeeLogin'),
    $input_employeeId = $('#input_employeeId'),
    $input_employeeLastname = $('#input_employeeLastname');
    
$input_employeeId.attr('validate', '{required:true, messages: '+errorMessaging.form_employeeLogin.input_employeeId+'}');
$input_employeeLastname.attr('validate', '{required:true, messages: '+errorMessaging.form_employeeLogin.input_employeeLastname+'}');
$form_employeeLogin.validate({
    submitHandler: function(form) {
        form.submit();
    }
});

