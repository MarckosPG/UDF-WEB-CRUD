const API_BASE_URL = "./api/";

function activeLoaderIfDivExists (visible) {
    if(visible){
        $(".loader").show();
    }else{
        $(".loader").hide();
    }
}

function notifyIfExistsDivAlert (type, message) {
    switch(type){
        case "error":
            $(".alert").addClass('alert-danger');
            $(".alert").html(message);
            $(".alert").slideDown('fast');
            break;
        case "success":
            $(".alert").addClass('alert-success');
            $(".alert").html(message);
            $(".alert").slideDown('fast');
            break;
    }
    setInterval(function () {
        $(".alert").slideUp('fast');
        $(".alert").html('');
        $(".alert").removeClass('alert-danger');
        $(".alert").removeClass('alert-success');
    }, 3000)
}

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}