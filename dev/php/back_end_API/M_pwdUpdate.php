<?php

    $input_account = $_POST["MID"];
    $input_pwd = $_POST["PWD"];
    //$input_account = 1;

    //============================= 引入資料 =====================================//

    include("../M_conn.php");

    //取得POST過來的值
    //$MEMBER_ID = $_POST['MEMBER_ID'];
    // $PHONE = $_POST['PHONE'];
    // $DELIEVERY_NOTICE = $_POST['DELIEVERY_NOTICE'];
    // $AUTHORITY = $_POST['AUTHORITY'];
    // $SUBSCRIPTION = $_POST['SUBSCRIPTION'];



    //建立SQL
    
    // $sql = "UPDATE `LOVE_PET`.`MEMBER` SET `NICKNAME` = 'aa', `PASSWORD` = 'bb', `NAME` = 'cc', `ADDRES` = 'dd', `PHONE` = '0999999999', `SUBSCRIPTION` = '1', `DELIEVERY_NOTICE` = '2' WHERE (`MEMBER_ID` = '23');";
    $sql = "UPDATE `MEMBER` SET `PASSWORD` = ? WHERE (`MEMBER_ID` = ?);";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $input_pwd); 
    $statement->bindValue(2 , $input_account);
    // $statement->bindValue(3 , $AUTHORITY);
    // $statement->bindValue(4 , $SUBSCRIPTION);
    // $statement->bindValue(5 , $input_account);
    $x = $statement->execute();
    echo $x;

?>