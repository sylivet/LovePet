<?php    
    include("../../php/C_conn.php");

    //取得POST過來的值
    $HEALTH_CHECK_ID = $_POST['HEALTH_CHECK_ID'];
    $LISTNAME = $_POST['LISTNAME'];
    $PRICE = $_POST['PRICE'];
    $TESTING_SUBJECT = $_POST['TESTING_SUBJECT'];




    //建立SQL
    $sql = "UPDATE HEALTH_CHECK SET LISTNAME=?,PRICE=?,TESTING_SUBJECT=? WHERE HEALTH_CHECK_ID=?";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $HEALTH_CHECK_ID); 
    $statement->bindValue(2 , $LISTNAME);
    $statement->bindValue(3 , $PRICE);
    $statement->bindValue(4 , $TESTING_SUBJECT);
    $statement->execute();


    
?>