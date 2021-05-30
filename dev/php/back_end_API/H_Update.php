<?php    
    include("../../php/I_conn.php");

    //取得POST過來的值
    $ROOM_TYPE_ID = $_POST['ROOM_TYPE_ID'];
    $ROOM_NAME = $_POST['ROOM_NAME'];
    $PRICE = $_POST['PRICE'];
    $AMOUNT = $_POST['AMOUNT'];
    $MAX_CAPACITY = $_POST['MAX_CAPACITY'];
    $ROOM_IMG = $_POST['ROOM_IMG'];
    $ROOM_IMG2 = $_POST['ROOM_IMG2'];
    $ROOM_IMG3 = $_POST['ROOM_IMG3'];
    $PANNELLUM = $_POST['PANNELLUM'];
    $ROOM_STATUS = $_POST['ROOM_STATUS'];
    //建立SQL
    $sql ="UPDATE `ROOM_TYPE` SET `ROOM_NAME`=?,`PRICE`=?,`AMOUNT`=?,`MAX_CAPACITY`=?,`ROOM_IMG`=?,`ROOM_IMG2`=?,`ROOM_IMG3`=?,`PANNELLUM`=?,`ROOM_STATUS`=? WHERE `ROOM_TYPE_ID`= 1";
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $ROOM_NAME; 
    $statement->bindValue(2 , $PRICE);
    $statement->bindValue(3 , $AMOUNT);
    $statement->bindValue(4 , $MAX_CAPACITY);
    $statement->bindValue(5 , $ROOM_IMG);
    $statement->bindValue(6 , $ROOM_IMG2);
    $statement->bindValue(7 , $ROOM_IMG3);
    $statement->bindValue(8 , $PANNELLUM);
    $statement->bindValue(9 , $ROOM_STATUS);
    $statement->execute();


    
?>