<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "127.0.0.1";
$username = "root";
$password = ""; // Вкажіть ваш пароль тут
$dbname = "store.db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM tickers";
$result = $conn->query($sql);

$tickers = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tickers[] = $row;
    }
}

echo json_encode($tickers);

$conn->close();
?>