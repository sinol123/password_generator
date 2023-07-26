<?php

#login check
session_start();
if(isset($_SESSION['nickname'])){
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="mateusz.jpg" type="image/x-icon">
        <link rel="stylesheet" href="style2.css">
        <title>Panel logowania</title>
    </head>
    <body>
        <form id="form" action="login.php" method="POST">
            <h2>Zaloguj się</h2>
            <input placeholder="login" type="text" name="nickname" id="">
            <input placeholder="hasło" type="password" name="password">
            <input id="submitInput" type="submit" value="Zaloguj">
            <p><?php
                
                if(isset($_POST['nickname']) && isset($_POST['password'])){
                                    
                    $nickname = $_POST['nickname'];
                    $password = $_POST['password'];
                    $shaPassword = sha1($password);
                
                    $servername = "localhost";
                    $username = "root";
                    $dbpassword = "";
                    $dbname = "generator";
                
                    $conn = mysqli_connect($servername, $username, $dbpassword, $dbname);
                    $sql = "SELECT id, nickname, password FROM users WHERE nickname = '$nickname' AND password= '$shaPassword'";
                    $result = mysqli_query($conn, $sql);
                
                    if (mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_assoc($result) ) {
                            session_start();
                            $_SESSION['nickname'] = $row["nickname"];
                            $_SESSION['id'] = $row['id'];
                        }
                        header("Location: index.php");
                    }
                    else {
                        echo "błędny login lub hasło";
                    }
                }
                ?></p>
        </form>
    </body>
</html>