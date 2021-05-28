<?php    
    include("../../php/I_conn.php");

    //取得POST過來的值
    $HOTEL_ORDER_ID = $_POST['HOTEL_ORDER_ID'];
    $BOOKING_CHECKIN_DATE = $_POST['BOOKING_CHECKIN_DATE'];
    $BOOKING_CHECKOUT_DATE = $_POST['BOOKING_CHECKOUT_DATE'];
    $NUM_OF_PEOPLE = $_POST['NUM_OF_PEOPLE'];
    $NUM_OF_PETS = $_POST['NUM_OF_PETS'];
    $ORDER_STATUS = $_POST['ORDER_STATUS'];

    //建立SQL
    $sql = "UPDATE `HOTEL_ORDER` set `BOOKING_CHECKIN_DATE` = ?,`BOOKING_CHECKOUT_DATE`=?, NUM_OF_PEOPLE = ?, NUM_OF_PETS = ?,ORDER_STATUS = ? WHERE HOTEL_ORDER_ID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $BOOKING_CHECKIN_DATE); 
    $statement->bindValue(1 , $BOOKING_CHECKOUT_DATE); 
    $statement->bindValue(2 , $NUM_OF_PEOPLE);
    $statement->bindValue(3 , $NUM_OF_PETS);
    $statement->bindValue(4 , $ORDER_STATUS);
    $statement->bindValue(5 , $HOTEL_ORDER_ID);
    $statement->execute();


?>