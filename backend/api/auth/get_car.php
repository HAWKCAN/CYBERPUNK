<?php
require "database.php";

$user_id = $_SESSION['user_id'];
$car_id  = $_GET['car_id'];

$bonus = [
  'stock'=>0,'sport'=>5,'pro'=>10,'elite'=>18,'ultimate'=>30
];

$q = "
SELECT 
  c.*, 
  uc.engine_upgrade, 
  uc.tires_upgrade
FROM cars c
JOIN user_cars uc 
  ON uc.car_id=c.id AND uc.user_id='$user_id'
WHERE c.id='$car_id'
";

$r = mysqli_fetch_assoc(mysqli_query($conn,$q));

$engine = $r['engine_upgrade'];
$tires  = $r['tires_upgrade'];

$r['power'] += $bonus[$engine];
$r['speed'] += $bonus[$engine]*0.3;
$r['accel'] += $bonus[$tires]*0.4;
$r['handling'] += $bonus[$tires];

echo json_encode($r);
