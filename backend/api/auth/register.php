<?php
require_once __DIR__ . '/../../config/database.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight (kalau kepake)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'msg'    => 'Method not allowed'
    ]);
    exit;
}

// -------------------------
// Ambil data dari JSON body
// -------------------------
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    echo json_encode([
        'status' => 'error',
        'msg'    => 'Body request tidak valid (bukan JSON)'
    ]);
    exit;
}

$username = trim($data['username'] ?? '');
$password = $data['password'] ?? '';

// Validasi sederhana
if ($username === '' || $password === '') {
    echo json_encode([
        'status' => 'error',
        'msg'    => 'Username dan password wajib diisi'
    ]);
    exit;
}

// -------------------------
// Cek apakah username sudah dipakai
// -------------------------
try {
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :u");
    $stmt->execute([':u' => $username]);

    if ($stmt->fetch()) {
        echo json_encode([
            'status' => 'error',
            'msg'    => 'Username sudah digunakan'
        ]);
        exit;
    }

    // Hash password sebelum disimpan
    $hash = password_hash($password, PASSWORD_DEFAULT);

    // Insert ke database
    $stmt = $pdo->prepare("
        INSERT INTO users (username, password_hash)
        VALUES (:u, :p)
    ");
    $stmt->execute([
        ':u' => $username,
        ':p' => $hash
    ]);

    // Balas ke frontend dalam bentuk JSON
    echo json_encode([
        'status' => 'success',
        'msg'    => 'Registrasi berhasil'
    ]);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'msg'    => 'Terjadi kesalahan pada server',
        // kalau buat production, biasanya error detail tidak dikirim
        'detail' => $e->getMessage()
    ]);
    exit;
}
