<?php    
    include("../../php/I_conn.php");

    //取得POST過來的值
    $ROOM_TYPE_ID = $_POST['ROOM_TYPE_ID'];
    $ROOM_NAME = $_POST['ROOM_NAME'];
    $PRICE = $_POST['PRICE'];
    $ROOM_STATUS = $_POST['ROOM_STATUS'];
    //建立SQL
    $sql ="UPDATE ROOM_TYPE SET ROOM_NAME=?, PRICE=?, ROOM_STATUS=? WHERE ROOM_TYPE_ID= ?";
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $ROOM_NAME); 
    $statement->bindValue(2 , $PRICE);
    $statement->bindValue(3 , $ROOM_STATUS);
    $statement->bindValue(4 , $ROOM_TYPE_ID);
    $statement->execute();


    
?>