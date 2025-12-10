<?php
require_once __DIR__ . '/../../config/database.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
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

// Ambil JSON
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$username = $data['username'] ?? '';
$side     = $data['side'] ?? '';

if ($username === '' || $side === '') {
    echo json_encode([
        'status' => 'error',
        'msg' => 'Data tidak lengkap'
    ]);
    exit;
}

try {

    // cek user ada atau tidak
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :u");
    $stmt->execute([':u' => $username]);
    $user = $stmt->fetch();

    if (!$user) {
        echo json_encode([
            'status' => 'error',
            'msg' => 'User tidak ditemukan'
        ]);
        exit;
    }

    // UPDATE side user
    $stmt = $pdo->prepare("
        UPDATE users
        SET side = :s
        WHERE username = :u
    ");
    $stmt->execute([
        ':s' => $side,
        ':u' => $username
    ]);

    echo json_encode([
        'status' => 'success',
        'msg' => 'Side berhasil disimpan'
    ]);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'msg' => 'Terjadi kesalahan pada server',
        'detail' => $e->getMessage()
    ]);
    exit;
}
