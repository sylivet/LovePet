<?php
    // ========= 取得與前台變數連線 ========== //
    $username = $_POST["un"];
    $mail = $_POST["ml"];
    $phone = $_POST["phe"];
    $address = $_POST["ads"];
    $nickname = $_POST["nm"];
    $new_pwd = $_POST["pwd"];
    //$agree_items = $_POST["agree_items"];
    


    // ========= 取得與資料庫連線 ========== //
    include("../M_conn.php");

    
     // ========== 建立SQL語法 ============ //

     $sql = "INSERT INTO `MEMBER` (`ACCOUNT`, `NICKNAME`, `PASSWORD`, `NAME`, `ADDRES`, `PHONE`, `AUTHORITY`, `SUBSCRIPTION`, `DELIEVERY_NOTICE`) 
     VALUES (?, ?, ?, ?, ?, ?, '2', '1', '1');";
     
     //執行
     $statement = $pdo->prepare($sql);    
     $statement->bindValue(1, $mail);
     $statement->bindValue(2, $nickname);
     $statement->bindValue(3, $new_pwd);
     $statement->bindValue(4, $username);
     $statement->bindValue(5, $address);
     $statement->bindValue(6, $phone);
     $statement->execute();



     //$data = $statement->fetch();
    $data = 'yes';
    echo $data;
 
    // ========== 確認有沒有建進去 ============ //

?>