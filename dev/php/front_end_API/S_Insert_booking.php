<?php

include("../../php/I_conn.php");
ini_set('date.timezone', 'Asia/Taipei');
$CREATE_DATE = date_create()->format('Y-m-d H:i:s');

//取得POST過來的值
$FK_MEMBER_ID = $_POST['FK_MEMBER_ID'];
$ADDRESSEE = $_POST['ADDRESSEE'];
$PHONE = $_POST['PHONE'];
$ADDRESS = $_POST['ADDRESS'];



// 所有被選的商品 給$sql3用的
$chooseItem = $_POST['chooseItem'];
// $客製化商品 = $_POST['客製化商品'];



//插入SHOPPING_ORDER
$sql1 = 'INSERT INTO `SHOPPING_ORDER`( `FK_MEMBER_ID`, `CREATE_DATE`, `ADDRESSEE`, `PHONE`, `ADDRESS`, `ORDER_STATUS`) VALUES (?,?,?,?,?,0)';

//執行
$statement = $pdo->prepare($sql1);
$statement->bindValue(1, $FK_MEMBER_ID);
$statement->bindValue(2, $CREATE_DATE);
$statement->bindValue(3, $ADDRESSEE);
$statement->bindValue(4, $PHONE);
$statement->bindValue(5, $ADDRESS);
$statement->execute();


//取得SHOPPING_ORDER_ID
$sql2 = 'SELECT MAX(`SHOPPING_ORDER_ID`) FROM SHOPPING_ORDER';

$statement = $pdo->prepare($sql2);
$statement->execute();
$SHOPPING_ORDER_ID = $statement->fetch();




//插入SHOPPING_ORDER DETAIL
echo json_encode($chooseItem);
if ($chooseItem != "") {
       for ($i = 0; $i < count($chooseItem); $i++) {
              $FK_PRODUCT_ID = $chooseItem[$i]["item_id"];
              $NUM_OF_PRODUCT = $chooseItem[$i]["item_count"];

              $sql3 = 'INSERT INTO SHOPPING_ORDER_DETAIL (FK_SHOPPING_ORDER_ID, FK_PRODUCT_ID, NUM_OF_PRODUCT) VALUES(?, ?, ?)';

              $statement = $pdo->prepare($sql3);
              $statement->bindValue(1, $SHOPPING_ORDER_ID[0]);
              $statement->bindValue(2, $FK_PRODUCT_ID);
              $statement->bindValue(3, $NUM_OF_PRODUCT);
              $statement->execute();
       };
}

// 客製化商品===================================
//插入SHOPPING_CUSTORMRIZE
// if ($客製化商品 !== "") {
//        for ($k = 0; $k < count($客製化商品); $k++) {

//               $SHOPPING_CUSTORMRIZE_AMOUNT = $客製化商品[$k]["SHOPPING_CUSTORMRIZE_AMOUNT"];

//               $sql4 = 'INSERT INTO SHOPPING_CUSTORMRIZE  (FK_SHOPPING_ORDER_ID, SHOPPING_CUSTORMRIZE_AMOUNT) VALUES(?, ?)';

//               $statement = $pdo->prepare($sql4);
//               $statement->bindValue(1, $SHOPPING_ORDER_ID[0]);
//               $statement->bindValue(2, $SHOPPING_CUSTORMRIZE_AMOUNT);
//               $statement->execute();
//        }
// }



//取得SHOPPING_CUSTORMRIZE_ID
// $sql5 = 'SELECT SHOPPING_CUSTORMRIZE_ID FROM SHOPPING_CUSTORMRIZE WHERE FK_SHOPPING_ORDER_ID = ?';

// $statement = $pdo->prepare($sql5);
// $statement->bindValue(1, $SHOPPING_ORDER_ID[0]);
// $statement->execute();
// $SHOPPING_CUSTORMRIZE_ID = $statement->fetchAll(PDO::FETCH_NUM);



// $客製化商品
//插入SHOPPING_CUSTORMRIZE DETAIL
// for ($j = 0; $j < count($SHOPPING_CUSTORMRIZE_ID); $j++) {
//        for ($q = 0; $q < count($客製化商品[0]["ITEM"]); $q++) {

//               $FK_SHOPPING_CUSTORMRIZE_ID = $SHOPPING_CUSTORMRIZE_ID[$j][0];
//               $ITEM = $客製化商品[$j]["ITEM"][$q];
//               $UPLOAD_IMG =
//                      $COLOR =
//                      $PRICE =

//                      $sql6 = 'INSERT INTO SHOPPING_CUSTORMRIZE_DETAILS (FK_SHOPPING_CUSTORMRIZE_ID, ITEM, UPLOAD_IMG, COLOR, PRICE) VALUES(?, ?, ?, ? ,? ,?)';

//               $statement = $pdo->prepare($sql6);
//               $statement->bindValue(1, $FK_SHOPPING_CUSTORMRIZE_ID);
//               $statement->bindValue(2, $ITEM);
//               $statement->execute();
//        }
// };

echo "ok";
