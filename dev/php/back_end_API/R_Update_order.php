<?php    
    include("../../php/R_conn.php");

    //取得POST過來的值
    $BOOKING_DATE = $_POST['BOOKING_DATE'];
    $NUM_OF_PEOPLE = $_POST['NUM_OF_PEOPLE'];
    $NUM_OF_PETS = $_POST['NUM_OF_PETS'];
    $ORDER_STATUS = $_POST['ORDER_STATUS'];
    $RESTAURANT_ORDER_ID = $_POST['RESTAURANT_ORDER_ID'];



    //建立SQL
    $sql = "UPDATE RESTAURANT_ORDER set BOOKING_DATE = ?, NUM_OF_PEOPLE = ?, NUM_OF_PETS = ?,ORDER_STATUS = ? WHERE RESTAURANT_ORDER_ID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $BOOKING_DATE); 
    $statement->bindValue(2 , $NUM_OF_PEOPLE);
    $statement->bindValue(3 , $NUM_OF_PETS);
    $statement->bindValue(4 , $ORDER_STATUS);
    $statement->bindValue(5 , $RESTAURANT_ORDER_ID);
    $statement->execute();


?>