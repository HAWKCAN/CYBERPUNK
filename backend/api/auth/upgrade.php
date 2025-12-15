<?php
session_start();
$conn = new mysqli("localhost", "root", "", "cyberpunk_db");

$user_id = $_SESSION['user_id'] ?? null;
$car_id  = $_POST['car_id'] ?? null;
$engine  = $_POST['engine'] ?? null;

if (!$user_id || !$car_id || !$engine) {
  http_response_code(400);
  exit("Data tidak lengkap");
}

$stmt = $conn->prepare("
  INSERT INTO car_upgrades (user_id, car_id, engine_tier)
  VALUES (?, ?, ?)
  ON DUPLICATE KEY UPDATE engine_tier = VALUES(engine_tier)
");

$stmt->bind_param("iis", $user_id, $car_id, $engine);
$stmt->execute();

echo "OK";
