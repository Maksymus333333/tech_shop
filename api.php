<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "127.0.0.1";
$username = "root";
$password = ""; // Вкажіть ваш пароль тут
$dbname = "store.db";

// Створення з'єднання з базою даних
$conn = new mysqli($servername, $username, $password, $dbname);

// Перевірка з'єднання
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Отримання маршруту запиту
$request_method = $_SERVER["REQUEST_METHOD"];
$path_info = isset($_SERVER["PATH_INFO"]) ? $_SERVER["PATH_INFO"] : '';

switch($request_method) {
  case 'GET':
    handleGetRequest($path_info, $conn);
    break;
  default:
    // Відповідь для інших методів запиту
    http_response_code(405);
    echo json_encode(["message" => "Method Not Allowed"]);
    break;
}

function handleGetRequest($path_info, $conn) {
  if ($path_info == '/categories') {
    $query = "SELECT * FROM categories";
    $result = $conn->query($query);
    $categories = [];
    while($row = $result->fetch_assoc()) {
      $categories[] = $row;
    }
    echo json_encode($categories);
  } elseif (preg_match('/\/subcategories\/(\d+)/', $path_info, $matches)) {
    $categoryId = $matches[1];
    $query = "SELECT * FROM subcategories WHERE category_id = $categoryId";
    $result = $conn->query($query);
    $subcategories = [];
    while($row = $result->fetch_assoc()) {
      $subcategories[] = $row;
    }
    echo json_encode($subcategories);
  } elseif (preg_match('/\/products\/(\d+)/', $path_info, $matches)) {
    $subCategoryId = $matches[1];
    $query = "SELECT * FROM products WHERE subcategory_id = $subCategoryId";
    $result = $conn->query($query);
    $products = [];
    while($row = $result->fetch_assoc()) {
      $products[] = $row;
    }
    echo json_encode($products);
  } else {
    http_response_code(404);
    echo json_encode(["message" => "Not Found"]);
  }
}

// Закриття з'єднання з базою даних
$conn->close();
?>
