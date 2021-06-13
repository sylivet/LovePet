<?php

    $input_getinfo = $_POST["GTF"];
    $input_chsdel = $_POST["DEL"];

    // $input_getinfo = 1;
    // $input_chsdel = 1;
  

    if(!isset($_SESSION)){
        session_start(); 
    }
    //$_SESSION["memberID"] = $account; 

    $MID = $_SESSION["memberID"];
    //$MID = 2;


    //$input_account = 1;

    //============================= 引入資料 =====================================//

    include("../M_conn.php");

    


    //建立SQL
    
    
    $sql = "UPDATE `MEMBER` SET `SUBSCRIPTION` = ?, `DELIEVERY_NOTICE` = ? WHERE (`MEMBER_ID` = ?);
    ";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $input_getinfo); 
    $statement->bindValue(2 , $input_chsdel);
    $statement->bindValue(3 , $MID);

    $x = $statement->execute();
    echo $x;

?>