<?php

$input_account = $_POST["MID"];
//$input_account = 1;

// ========= 取得與資料庫連線 ========== //
include("../M_conn.php");


//============================= 引入資料 =====================================//

$sql = "SELECT sc.*, scd.* FROM SHOPPING_CUSTORMRIZE sc
        left join SHOPPING_CUSTORMRIZE_DETAILS scd
        on sc.SHOPPING_CUSTORMRIZE_ID = scd.FK_SHOPPING_CUSTORMRIZE_ID
        where FK_SHOPPING_ORDER_ID = ?;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $input_account);

    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 

    //print_r($data);
    echo  json_encode($data);  
?>