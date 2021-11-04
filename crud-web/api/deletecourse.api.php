<?php

    session_start();

    require_once("../config/db.config.php");

    $id = filter_var(@$_POST['id'], FILTER_SANITIZE_STRING);

    $response = array();

    if(empty($id)){
        $response = array(
            "error"=>true,
            "message"=>"Id inválido!",
            "code"=>500,
        );
    }else{

        $con = Database::getConnection();

        $sql = "DELETE FROM cursos WHERE id='$id'";  
        $result = mysqli_query($con, $sql);  

        if($result) {

            $response = array(
                "error"=>false,
                "message"=>"Deletado com sucesso!",
                "code"=>200,
            );

        }else{
            $response = array(
                "error"=>true,
                "message"=>"Não foi possivel deletar!",
                "code"=>500,
            );
        }

    }

    echo json_encode($response);

?>