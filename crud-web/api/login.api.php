<?php

    session_start();

    require_once("../config/db.config.php");

    $email = filter_var(@$_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = filter_var(@$_POST['password'], FILTER_SANITIZE_STRING);

    $response = array();

    if(empty($email) || empty($password)){
        $response = array(
            "error"=>true,
            "message"=>"Campos inválidos!",
            "code"=>500,
        );
    }else{

        $con = Database::getConnection();

        $sql = "SELECT * FROM users WHERE user_email='$email' AND user_password='$password'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  

        if($count > 0) {
            $response = array(
                "error"=>false,
                "message"=>"Logado com sucesso!",
                "code"=>200,
            );

            $_SESSION['login'] = $email;

        }else{
            $response = array(
                "error"=>true,
                "message"=>"Usuário não existe!",
                "code"=>500,
            );
        }

    }

    echo json_encode($response);

?>