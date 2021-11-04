<?php

    session_start();
    $_SESSION['login'] = "";
    unset($_SESSION['login']);
    session_destroy();

    $response = array(
        "error"=>false,
        "message"=>"Deslogado com sucesso!",
        "code"=>200
    );

    echo json_encode($response);

?>