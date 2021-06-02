<?php

include("../../php/C_conn.php");

$data = json_decode(file_get_contents("php://input"), TRUE);
$memberId = $data['MEMBER_ID'];

$sql = "select PET_NAME from PET_INFO where FK_MEMBER_ID = :memberId";
$statement = $pdo->prepare($sql);
$statement->bindValue(":memberId", $memberId);
$statement->execute();
$result = $statement->fetchAll();

echo json_encode($result);

?>