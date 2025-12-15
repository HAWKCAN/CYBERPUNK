<?php
require "db.php";

$user_id = $_SESSION['user_id'];
$car_id  = $_GET['car_id'];

$bonus = [
  'stock'=>0,
  'sport'=>5,
  'pro'=>10,
  'elite'=>18,
  'ultimate'=>30
];

$q = "
SELECT 
  c.brand, c.model,
  c.power, c.speed, c.accel, c.handling,
  uc.engine
FROM cars c
LEFT JOIN user_cars uc
  ON uc.car_id = c.id AND uc.user_id = '$user_id'
WHERE c.id = '$car_id'
";

$r = mysqli_fetch_assoc(mysqli_query($conn,$q));

$engine = $r['engine'] ?? 'stock';
$boost = $bonus[$engine];

$r['power'] += $boost;
$r['speed'] += $boost;

echo json_encode($r);
