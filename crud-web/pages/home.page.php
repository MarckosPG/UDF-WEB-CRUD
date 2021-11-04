<?php
    if(!Router::isAuthenticated()){
        header("location: ./?page=login");
    }
?>
<link rel="stylesheet" href="./css/home_page.css">
<script src="./js/home_page.js"></script>

<div class="courser-list">

    <div class="container">
        <div class="bg-white rounded d-flex align-items-center justify-content-between" id="header"> <h3>Lista de cursos</h3> <button class="btn btn-primary btn-cadastrar-curso btn-hide text-uppercase" type="button" data-toggle="collapse" data-target="#filterbar" aria-expanded="false" aria-controls="filterbar" id="filter-btn" onclick="changeBtnTxt()"> <span class="fas fa-angle-left" id="filter-angle"></span> <span id="btn-txt">+ Adicionar Curso</span> </button>
            <div class="d-flex align-items-center">
                <div class="input-group">
                    <span class="input-group-text">Pesquisar</span>
                    <input type="text" class="form-control" placeholder="Pesquisar curso...">
                </div>
            </div>
        </div>
        <div id="content" class="my-5">
            <div id="products">
                <div class="row mx-0 product-list"></div>
            </div>
        </div>
    </div>
    
</div>
