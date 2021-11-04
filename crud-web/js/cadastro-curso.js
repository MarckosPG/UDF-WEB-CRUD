$(document).ready(function () {
    $('.cadastrar').click(function () {

        let nome = ""+$("#nome").val();
        let tags = ""+$("#tags").val();

        if(nome.isEmpty()){
            notifyIfExistsDivAlert("error", "Digite o nome do curso!");
            return;
        }

        $("#nome").prop("disabled", true);
        $("#tags").prop("disabled", true);

        $('.cadastrar').hide();

        let response = Api.insertCourse(nome, tags);

        if(response.error){
            $("#nome").prop("disabled", false);
            $("#tags").prop("disabled", false);
            $('.cadastrar').show();
            notifyIfExistsDivAlert("error", "Houve um erro ao cadastrar o curso!");
        }else{
            //comprovante! swal
            notifyIfExistsDivAlert("success", "Sucesso ao cadastrar curso!");
            $("#nome").val("");
            $("#tags").val("");
            $("#nome").prop("disabled", false);
            $("#tags").prop("disabled", false);
            $('.cadastrar').show();
        }

    })
})