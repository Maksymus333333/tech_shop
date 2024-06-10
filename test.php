<?php
$servername = "127.0.0.1";
$username = "root";
$password = ""; // або ваш пароль, якщо ви його встановлювали
$dbname = "store.db"; // ваша база даних

// Створення підключення
$conn = new mysqli($servername, $username, $password, $dbname);

// Перевірка підключення
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>";

// Виконання запиту
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

if ($result) {
    echo "Query executed successfully<br>";
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Price: " . $row["price"]. "<br>";
        }
    } else {
        echo "0 results";
    }
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
