<?php
    // ========= 取得與前台變數連線 ========== //
    $account = $_POST["account2"];
    $pwd = $_POST["pwd2"];


    // ========= 取得與資料庫連線 ========== //
    include("../../php/C_conn.php");


    
     // ========== 建立SQL語法 ============ //
     $sql = "SELECT * FROM MEMBER WHERE (`ACCOUNT` = ?) and (`PASSWORD` = ?) and (`AUTHORITY` = 1)";
     
     //執行
     $statement = $pdo->prepare($sql);    
     $statement->bindValue(1, $account);
     $statement->bindValue(2, $pwd);
     $statement->execute();
     $data = $statement->fetch();
        
     //依資料筆數判斷是否為會員
     if( !empty($data) ){


        session_start();
        $_SESSION["memberID"] = $data['MEMBER_ID']; 

 
        //  //導回後台首頁        
        echo "<script>location.href = '../.././back_member.html';</script>";
 
     }else{
         //跳出提示停留在後台登入頁
         echo "<script>alert('帳號或密碼錯誤!'); location.href = '../.././back_login.html';</script>"; 
     }
?>