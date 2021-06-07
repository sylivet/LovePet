<?php

    $input_nicname = $_POST["NIC"];
    $input_name = $_POST["NME"];
    $input_phone = $_POST["PHE"];
    $input_address = $_POST["ADS"];
    $input_account = $_POST["MID"];
    //$input_account = 1;

    //============================= 引入資料 =====================================//

    include("../M_conn.php");

    


    //建立SQL
    
    
    $sql = "UPDATE `LOVE_PET`.`MEMBER` SET `NICKNAME` = ?, `NAME` = ?, `ADDRES` = ?, `PHONE` = ? WHERE (`MEMBER_ID` = ?);";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $input_nicname); 
    $statement->bindValue(2 , $input_name);
    $statement->bindValue(3 , $input_address);
    $statement->bindValue(4 , $input_phone);
    $statement->bindValue(5 , $input_account);
    $x = $statement->execute();
    echo $x;

?>