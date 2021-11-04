$(document).ready(function () {

    $(".logout").click(function () {
        let response = Api.logout();
        window.location = "./?page=login";
    })

    $(".btn-cadastrar-curso").click(function () {
        window.location = "./?page=cadastro-curso";
    })
    
    fetchCourses();

})

var COURSE_LIST = [];

function fetchCourses () {

    let data = Api.getCourses();

    $(".product-list").html("");

    data.map(c => {

        console.log(c)

        let item = `
            <div class="col-lg-4 col-md-6 product product-${c.id} mt-2" data-id='${c.id}'>
                <div class="card d-flex flex-column align-items-center">
                    <div class="product-name">${c.nome}</div>
                    <div class="card-img"> <img src="./img/hero.svg" alt=""> </div>
                    <div class="card-body pt-2">
                        <div class="text-muted text-center mt-auto">${c.tags}</div>
                        <div class="d-flex align-items-center justify-content-center colors my-2">
                            <div class="btn-group" data-toggle="buttons" data-tooltip="tooltip" data-placement="right" title="choose color"> <label class="btn btn-red form-check-label"> <input class="form-check-input" type="radio" autocomplete="off"> </label> <label class="btn btn-blue form-check-label active"> <input class="form-check-input" type="radio" autocomplete="off"> </label> <label class="btn btn-green form-check-label"> <input class="form-check-input" type="radio" autocomplete="off"> </label> <label class="btn btn-orange form-check-label"> <input class="form-check-input" type="radio" autocomplete="off"> </label> <label class="btn btn-pink form-check-label"> <input class="form-check-input" type="radio" autocomplete="off"> </label> </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <!--<div class="btn btn-primary view-${c.id}">Visualizar</div>&nbsp-->
                            <div class="btn btn-warning update-${c.id}">Alterar</div>&nbsp;
                            <div class="btn btn-danger delete-${c.id}">Excluir</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $(".product-list").append(item);
        
        $(".delete-"+c.id).click(function () {
            $(".product-"+c.id).slideUp();
            let response = Api.deleteCourse(c.id);
            console.log(response);
        })

        $(".update-"+c.id).click(function () {
            Swal.fire({
                html: `
                    <div>
                        <h4>Atualizar Curso</h4>
                        <div class="form-row">
                            <div class="alert" style="display: none;"></div>
                            <div class="form-group col">
                                <input type="text" class="form-control nameInput" id="nome" placeholder="Nome" value="${c.nome}">
                            </div>
                            <div class="form-group col mt-2">
                                <input type="text" class="form-control tagsInput" value="${c.tags}" id="tags" placeholder="Ex: Tecnologia, Ciência, TI">
                            </div>
                        </div>
                    </div>
                `
            }).then((result) => {
                if (result.isConfirmed) {
                    let response = Api.updateCourse(c.id, $(".nameInput").val(), $(".tagsInput").val());
                    Swal.fire({
                        icon: 'success',
                        text: "Alterado com sucesso!",
                    })
                    fetchCourses();
                }
            })
        });

    })

    console.log(data);

}

