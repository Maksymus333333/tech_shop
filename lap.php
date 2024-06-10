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
$category_id = isset($_GET['category_id']) ? intval($_GET['category_id']) : null;
$subcategory_ids = isset($_GET['subcategory_ids']) ? explode(',', $_GET['subcategory_ids']) : [];

switch($request_method) {
  case 'GET':
    handleGetRequest($path_info, $category_id, $subcategory_ids, $conn);
    break;
  default:
    // Відповідь для інших методів запиту
    http_response_code(405);
    echo json_encode(["message" => "Method Not Allowed"]);
    break;
}

function handleGetRequest($path_info, $category_id, $subcategory_ids, $conn) {
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
  } elseif ($path_info == '/products') {
    // Отримуємо всі продукти для категорії або підкатегорії
    $query = "SELECT p.* FROM products p
              JOIN subcategories s ON p.subcategory_id = s.id
              WHERE 1=1";
    if ($category_id !== null) {
      $query .= " AND s.category_id = $category_id";
    }
    if (!empty($subcategory_ids)) {
      $subcategory_ids = array_map('intval', $subcategory_ids); // Ensure all IDs are integers
      $subcategory_ids_list = implode(',', $subcategory_ids);
      $query .= " AND p.subcategory_id IN ($subcategory_ids_list)";
    }
    $result = $conn->query($query);
    $products = [];
    while($row = $result->fetch_assoc()) {
      $products[] = $row;
    }
    echo json_encode($products);
  } elseif (preg_match('/\/product\/(\d+)/', $path_info, $matches)) {
    $productId = $matches[1];
    $query = "SELECT * FROM products WHERE id = $productId";
    $result = $conn->query($query);
    if ($row = $result->fetch_assoc()) {
      echo json_encode($row);
    } else {
      http_response_code(404);
      echo json_encode(["message" => "Product Not Found"]);
    }
  } else {
    http_response_code(404);
    echo json_encode(["message" => "Not Found"]);
  }
}

// Закриття з'єднання з базою даних
$conn->close();
?>
