<?php
    // ========= 取得與前台變數連線 ========== //
    $account = $_POST["account2"];
    $pwd = $_POST["pwd2"];

    // $account = 'a111111@yahoo.com.tw';
    // $pwd = '1111';


    // ========= 取得與資料庫連線 ========== //
    include("../M_conn.php");

    
     // ========== 建立SQL語法 ============ //

     //$sql = "SELECT * FROM MEMBER WHERE (`ACCOUNT` = ?) and (`PASSWORD` = ?)";
     $sql = "SELECT * FROM MEMBER WHERE (`ACCOUNT` = ?) and (`PASSWORD` = ?) and (`AUTHORITY` = 2)";
     
     //執行
     $statement = $pdo->prepare($sql);    
     $statement->bindValue(1, $account);
     $statement->bindValue(2, $pwd);
     $statement->execute();
     $data = $statement->fetch();
 
     //echo $data['MEMBER_ID'];
        
     //依資料筆數判斷是否為會員
     if( !empty($data) ){


        session_start();
        $_SESSION["memberID"] = $data['MEMBER_ID']; 

        //echo $_SESSION["memberID"];
        
        //echo json_encode($_SESSION["memberID"]); 
        // session_unset();
        // session_destroy();

        echo json_encode($data); 
        // echo $_SESSION["memberID"]; 
        
        
        //  include("../../Lib/Member.php");
 

        //  //將登入資訊寫入session
        //  setSessionB($_POST["account"]);
 
        //  //導回後台首頁        
        //  header("Location: ../Category.html");
 
     }else{
         //跳出提示停留在後台登入頁
         echo  json_encode('nonedata');  
 
     }
?>