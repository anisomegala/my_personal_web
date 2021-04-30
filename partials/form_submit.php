<?php

if (isset($_POST['submit'])) {

    $username = $_POST['username'];
    $email = $_POST['email'];
    $connection = mysqli_connect('localhost', 'root', '', 'portafolio_db');
    if (!$connection) {
        die('Database connection failed');
    }
    $query = "INSERT INTO form_data(username, email) VALUES ('$username', '$email') ";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die("QUERY FAILED" . mysqli_error($connection));
    }
}
