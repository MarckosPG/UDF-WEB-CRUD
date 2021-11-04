$(document).ready(function () {

    $(".go-register").click(function () {
        $(".main-login").hide();
        $(".main-register").slideDown('fast');
    })   
    
    $(".go-login").click(function () {
        $(".main-register").hide();
        $(".main-login").slideDown('fast');
    })

    $(".login").click(function () {

        let email = $("#email_input").val();
        let password = $("#password_input").val();

        if(email.isEmpty()){
            notifyIfExistsDivAlert("error", "Digite seu email!");
            return;
        }
        if(!validateEmail(email)){
            notifyIfExistsDivAlert("error", "Digite um email válido!");
            return;
        }
        if(password.isEmpty()){
            notifyIfExistsDivAlert("error", "Digite sua senha!");
            return;
        }

        $("#email_input").prop("disabled", true);
        $("#password_input").prop("disabled", true);

        activeLoaderIfDivExists(true);

        $(".login").hide();

        let response = Api.login(email, password);

        if(response.error){
            $("#email_input").prop("disabled", false);
            $("#password_input").prop("disabled", false);
            activeLoaderIfDivExists(false);
            $(".login").show();
            notifyIfExistsDivAlert("error", response.message);
        }else{
            window.location = "./?page=home";
        }

    })

})
