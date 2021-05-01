<?php

$connection = mysqli_connect('localhost', 'root', '', 'personalWeb');
if (!$connection) {
    die('Database connection failed');
}
