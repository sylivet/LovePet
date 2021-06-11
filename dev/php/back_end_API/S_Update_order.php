<?php    
    include("../../php/I_conn.php");

    //取得POST過來的值
    $SHOPPING_ORDER_ID = $_POST['SHOPPING_ORDER_ID'];
    $ORDER_STATUS = $_POST['ORDER_STATUS'];



    //建立SQL
    $sql = "UPDATE SHOPPING_ORDER set ORDER_STATUS = ? WHERE SHOPPING_ORDER_ID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $ORDER_STATUS); 
    $statement->bindValue(2 , $SHOPPING_ORDER_ID);
    $statement->execute();


?>