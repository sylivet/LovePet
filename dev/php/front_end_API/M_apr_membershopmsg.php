<?php

$input_account = $_POST["MID"];
//$input_account = 1;

// ========= 取得與資料庫連線 ========== //
include("../M_conn.php");


//============================= 引入資料 =====================================//

$sql = "SELECT ml.*, Date(ml.CREATE_DATE) as CREATE_DATE2 ,mb.MEMBER_IMG FROM LOVE_PET.MESSAGE_LIST ml  
        left join SHOPPING_ORDER so
        on ml.FK_SHOPPING_ORDER_ID = so.SHOPPING_ORDER_ID
        left join member mb
        on so.FK_MEMBER_ID = mb.MEMBER_ID
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