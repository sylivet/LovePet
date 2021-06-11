<?php
    include("../../php/I_conn.php");
    
    //建立SQL語法
    $sql = "SELECT so.SHOPPING_ORDER_ID,m.NAME,so.CREATE_DATE,so.ORDER_STATUS,so.ADDRESSEE,so.PHONE,so.ADDRESS FROM SHOPPING_ORDER so
left join MEMBER m on so.FK_MEMBER_ID=m.MEMBER_ID";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 
    // PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵
    // PDO::FETCH_NUM 返回以數字作為索引鍵(KEY)的陣列(ARRAY)，由0開始編號

    echo json_encode($data);
?>