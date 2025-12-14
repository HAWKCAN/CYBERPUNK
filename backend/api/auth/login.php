<?php
require_once __DIR__ . '/../../config/database.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'msg' => 'Method not allowed'
    ]);
    exit;
}

// Ambil JSON body
$data = json_decode(file_get_contents('php://input'), true);

if (!is_array($data)) {
    echo json_encode([
        'status' => 'error',
        'msg' => 'Body request tidak valid'
    ]);
    exit;
}

$username = trim($data['username'] ?? '');
$password = $data['password'] ?? '';

if ($username === '' || $password === '') {
    echo json_encode([
        'status' => 'error',
        'msg' => 'Username dan password wajib diisi'
    ]);
    exit;
}

try {
    $stmt = $pdo->prepare("
        SELECT id, password_hash 
        FROM users 
        WHERE username = :u
        LIMIT 1
    ");
    $stmt->execute([':u' => $username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo json_encode([
            'status' => 'error',
            'msg' => 'Username tidak ditemukan'
        ]);
        exit;
    }

    if (!password_verify($password, $user['password_hash'])) {
        echo json_encode([
            'status' => 'error',
            'msg' => 'Password salah'
        ]);
        exit;
    }

    // Login sukses
    echo json_encode([
        'status' => 'success',
        'msg' => 'Login berhasil',
        'user_id' => $user['id'],
        'username' => $username
    ]);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'msg' => 'Kesalahan server',
        'detail' => $e->getMessage()
    ]);
    exit;
}
