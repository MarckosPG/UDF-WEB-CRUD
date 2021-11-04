<?php

    define("HOST", "localhost");
    define("USERNAME", "root");
    define("PASSWORD", "");
    define("DATABASE", "webcrud");

    date_default_timezone_set("America/Sao_Paulo");

    class Database {

        public static function getConnection () {
            $con = mysqli_connect(HOST, USERNAME, PASSWORD, DATABASE) or die("erro in connection to database");
            return $con;
        }

    }

?>

