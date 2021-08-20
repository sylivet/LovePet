<?php

    if(!isset($_SESSION)){
        session_start(); 
    }
    $MID = $_SESSION["memberID"];

    $input_petspecies = $_POST["SPEC"];
    $input_petweight = $_POST["WGHT"];
    $input_petage = $_POST["PAGE"];
    $input_petchip = $_POST["CHIP"];
    $input_petname = $_POST["NAME"];
    $input_gender = $_POST["GNDR"];
    $input_cut = $_POST["PCUT"];
    

    // $input_petweight = '5.5';
    // $input_petage = '5';
    // $input_petchip = '9999';
    // $input_petname = 'test';
    // $input_gender = '1';
    // $input_cut = '0';
    // $PID = '5';


    //============================= 引入資料 =====================================//

    include("../M_conn.php");

    


    //建立SQL
    
            
    $sql = "INSERT INTO `PET_INFO` (`PET_NAME`, `PET_GENDER`, `PET_AGE`, `PET_SPECIES`, `PET_CHIP_NUMBER`, `PET_WEIGHT`, `PET_STERILIZATION`, `FK_MEMBER_ID`, `PET_IMG`) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?,'./img/member/Group 2151.png');";

    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $input_petname); 
    $statement->bindValue(2 , $input_gender);
    $statement->bindValue(3 , $input_petage);
    $statement->bindValue(4 , $input_petspecies);
    $statement->bindValue(5 , $input_petchip);
    $statement->bindValue(6 , $input_petweight);
    $statement->bindValue(7 , $input_cut);
    $statement->bindValue(8 , $MID);
    $x = $statement->execute();
    //echo $x;
    echo $input_petweight.$input_petage.$input_petchip.$input_petname.$input_gender.$input_cut.$PID;
    //echo $input_petage;
?>