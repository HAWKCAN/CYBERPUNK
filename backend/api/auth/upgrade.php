<?php
require "../config/database.php";

$user_id = $_SESSION['user_id'];
$car_id  = $_POST['car_id'];
$engine  = $_POST['engine'];
$tires   = $_POST['tires'];

$q = $conn->prepare("
  UPDATE user_cars
  SET engine_upgrade=?, tires_upgrade=?
  WHERE user_id=? AND car_id=?
");
$q->bind_param("ssii",$engine,$tires,$user_id,$car_id);
$q->execute();

echo "OK";
