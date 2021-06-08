<?php    
    include("../../php/I_conn.php");

    //取得POST過來的值
    $PRODUCT_ID = $_POST['PRODUCT_ID'];
    $PRODUCT_NAME = $_POST['PRODUCT_NAME'];
    $PRODUCT_PRICE = $_POST['PRODUCT_PRICE'];
    $PRODUCT_IMG = $_POST['PRODUCT_IMG'];
    $PRODUCT_INFO = $_POST['PRODUCT_INFO'];
    $PRODUCT_SOLD = $_POST['PRODUCT_SOLD'];
    $PRODUCT_TYPE = $_POST['PRODUCT_TYPE'];
    $PRODUCT_STATUS = $_POST['PRODUCT_STATUS'];




    //建立SQL
    $sql ="UPDATE `SHOPPING_PRODUCT` SET `PRODUCT_NAME`=? ,`PRODUCT_PRICE`=? ,`PRODUCT_IMG`=? ,`PRODUCT_INFO`=? ,`PRODUCT_SOLD`=? ,`PRODUCT_TYPE`=? ,`PRODUCT_STATUS`=? WHERE PRODUCT_ID= ?";
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $PRODUCT_NAME);
    $statement->bindValue(2 , $PRODUCT_PRICE);
    $statement->bindValue(3 , $PRODUCT_IMG);
    $statement->bindValue(4 , $PRODUCT_INFO);
    $statement->bindValue(5 , $PRODUCT_SOLD);
    $statement->bindValue(6 , $PRODUCT_TYPE);
    $statement->bindValue(7 , $PRODUCT_STATUS);
    $statement->bindValue(8 , $PRODUCT_ID); 
    $statement->execute();


    
?>