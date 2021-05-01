<?php include 'conectionsdb.php';

function formSubmit()
{
    if (isset($_POST['submit'])) {

        global $connection;
        $username = $_POST['username'];
        $email = $_POST['email'];
        $about = $_POST['about'];
        $message = $_POST['message'];

        $username = mysqli_real_escape_string($connection, $username);
        $email = mysqli_real_escape_string($connection, $email);
        $about = mysqli_real_escape_string($connection, $about);
        $message = mysqli_real_escape_string($connection, $message);


        $query = "INSERT INTO formData(username, email, about, message) VALUES ('$username', '$email', '$about', '$message')";
        $result = mysqli_query($connection, $query);

        if (!$result) {
            die("QUERY FAILED" . mysqli_error($connection));
        }
    }
}
