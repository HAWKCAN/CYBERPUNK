<?php
$host = "localhost";
$dbname = "cyberpunk_db"; // bebas, nanti bikin di phpMyAdmin
$user = "root";
$pass = ""; // default XAMPP

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        "success" => false,
        "message" => "Gagal konek database",
        "error"   => $e->getMessage()
    ]);
    exit;
}
