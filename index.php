<?php

#connectToDb
$servername = "localhost";
$username = "root";
$dbpassword = "";
$dbname = "generator";
$conn = mysqli_connect($servername, $username, $dbpassword, $dbname);

#login check
session_start();
if(isset($_SESSION['nickname'])){
    
}
else{
    header("Location: login.php");
}

#logout
if(isset($_POST['logout'])){
    session_destroy();
    exit('zostałeś wylogowany');
}

?>

<!DOCTYPE html>
<html lang="epl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="toolbar">
        <p id="nickname">jesteś zalogowany jako: <input type="button" value="wyloguj"></p>
    </div>
    <div id="container">
        <div id="output">
            <input type="text" id="result">
            <input value="refresh" type="button" onclick="generatePassword()">
            <input type="button" value="kopiuj" onclick="copy()">
            <input type="button" value="zapisz" onclick="save()">
        </div>
        
        <div id="passwordLength"><div id="lengthInfo">długość hasła: 12</div>
            <input type="button" value="-" id="minus" onclick="changeLength('minus')">
            <input type="range" min="1" value="12" max="50" id="range" oninput="changeLength(value)">
            <input type="button" value="+" id="plus" onclick="changeLength('plus')">
        </div>

        <div class="characterCheckbox">Użyte znaki:</div>
        <div class="characterCheckbox">abc <input type="checkbox" checked  onchange="changeStatus(0), generatePassword()"></div>
        <div class="characterCheckbox">ABC <input type="checkbox" checked onchange="changeStatus(1), generatePassword()"></div>
        <div class="characterCheckbox">123 <input type="checkbox" checked onchange="changeStatus(2), generatePassword()"></div>
        <div class="characterCheckbox">#@% <input type="checkbox" onchange="changeStatus(3), generatePassword()"></div>
    </div>
    <div id="passwords">
        <h2>Twoje hasła:</h2>
        <?php
            $userId = $_SESSION['id'];
            $query = "SELECT * FROM passwords where userId = '$userId'";
            $result = mysqli_query($conn, $query);

            while($row = mysqli_fetch_assoc($result)){
                echo "<div>
                        <p>witryna: ". $row['website'] . "</p>
                        <p>nick: ". $row['nickname'] . "</p>
                        <p>hasło: ". $row['password'] . "</p>
                    </div>";
            }
        ?>
    </div>
    <script src="script.js"></script>
</body>
</html>