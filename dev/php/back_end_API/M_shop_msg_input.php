<?php

    $input_mid = $_POST["MID"];
    $input_msg = $_POST["MSG"];

    // $input_getinfo = 1;
    // $input_chsdel = 1;
  

    if(!isset($_SESSION)){
        session_start(); 
    }
    //$_SESSION["memberID"] = $account; 

    //$MID = $_SESSION["memberID"];
    //$MID = 2;


    //$input_account = 1;

    //============================= 引入資料 =====================================//

    include("../M_conn.php");

    


    //建立SQL
    
    
    $sql = "INSERT INTO `MESSAGE_LIST` (`FK_SHOPPING_ORDER_ID`, `MESSAGE_CONTENT`,  `CREATE_DATE`) VALUES ( ? , ?, now()); 
    ";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $input_mid); 
    $statement->bindValue(2 , $input_msg);
    //$statement->bindValue(3 , $MID);

    $x = $statement->execute();
    echo $x;

?>