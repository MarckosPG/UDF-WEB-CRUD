<?php

    session_start();

    require_once("../config/db.config.php");
    require_once("../models/course.model.php");

    $response = array();

    $con = Database::getConnection();

    $sql = "SELECT * FROM cursos";  
    $result = mysqli_query($con, $sql);  

    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
        $response[] = (object) $row;
    }

    echo json_encode($response);

?>