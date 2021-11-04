<?php

    class Course {

        private $name;
        private $tag;

        function __construct($name, $tag) {
            $this->name = $name;
            $this->tag = $tag;
        }

        function getName () {
            return $this->name;
        }

        function getTag () {
            return $this->tag;
        }

    }

?>