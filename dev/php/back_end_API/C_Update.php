<?php    
    include("../../php/C_conn.php");

    //取得POST過來的值
    $HEALTH_CHECK_ID = $_POST['HEALTH_CHECK_ID'];
    $PRICE = $_POST['PRICE'];




    //建立SQL
    $sql = "UPDATE HEALTH_CHECK SET PRICE=? WHERE HEALTH_CHECK_ID=?";
    
    //執行
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $PRICE);     
    $statement->bindValue(2 , $HEALTH_CHECK_ID); 
    $statement->execute();


    
?>