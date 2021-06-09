<?php    
    include("../../php/M_conn.php");

    //取得POST過來的值
    $MEMBER_ID = $_POST['MEMBER_ID'];
    $PHONE = $_POST['PHONE'];
    $DELIEVERY_NOTICE = $_POST['DELIEVERY_NOTICE'];
    $AUTHORITY = $_POST['AUTHORITY'];
    $SUBSCRIPTION = $_POST['SUBSCRIPTION'];



    //建立SQL
    $sql = "UPDATE MEMBER set PHONE = ?, DELIEVERY_NOTICE = ?,AUTHORITY = ?, SUBSCRIPTION = ? WHERE MEMBER_ID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $PHONE); 
    $statement->bindValue(2 , $DELIEVERY_NOTICE);
    $statement->bindValue(3 , $AUTHORITY);
    $statement->bindValue(4 , $SUBSCRIPTION);
    $statement->bindValue(5 , $MEMBER_ID);
    $statement->execute();

?>