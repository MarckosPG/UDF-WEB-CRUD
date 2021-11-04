<?php

    session_start();

    require_once("../config/db.config.php");

    $nome = filter_var(@$_POST['nome'], FILTER_SANITIZE_STRING);
    $tags = filter_var(@$_POST['tags'], FILTER_SANITIZE_STRING);

    $response = array();

    if(empty($nome)){
        $response = array(
            "error"=>true,
            "message"=>"Nome inválido!",
            "code"=>500,
        );
    }else{

        $con = Database::getConnection();

        $sql = "INSERT INTO cursos (nome, tags) VALUES ('$nome', '$tags')";  
        $result = mysqli_query($con, $sql);  

        if($result) {

            $response = array(
                "error"=>false,
                "message"=>"Cadastrado com sucesso!",
                "code"=>200,
            );

        }else{
            $response = array(
                "error"=>true,
                "message"=>"Não foi possivel cadastrar!",
                "code"=>500,
            );
        }

    }

    echo json_encode($response);

?>