<?php

    session_start();

    class Router {

        public static function view ($request) {
            switch($request){
                case "login":
                    if(!self::isAuthenticated()){
                        require_once("./pages/account.page.php");
                    }else{
                        require_once("./pages/home.page.php");
                    }
                    break;
                case "home":
                    require_once("./pages/home.page.php");
                    break;
                case "cadastro-curso":
                    require_once("./pages/cadastro-curso.page.php");
                    break;
                default: 
                    require_once("./pages/home.page.php");
                    break;
            }
        }

        public static function isAuthenticated () {
            if(!isset($_SESSION['login'])){
                return false;
            }else{
                return true;
            }
        }

    }

?>