<?php
    include("../../php/R_conn.php");

    //取得POST過來的值
    $MESSAGE_LIST_ID = $_POST['MESSAGE_LIST_ID'];
    $OFFICAL_FEEDBACK = $_POST['OFFICAL_FEEDBACK'];


    //建立SQL
    $sql = "UPDATE MESSAGE_LIST set OFFICAL_FEEDBACK = '$OFFICAL_FEEDBACK' WHERE MESSAGE_LIST_ID = $MESSAGE_LIST_ID";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->execute();
?>