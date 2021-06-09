<?php
    include("../../php/C_conn.php");
    
    //建立SQL語法
    $sql = "SELECT hc.HEALTH_CHECK_ID,hc.LISTNAME,hc.PRICE,hc.TESTING_SUBJECT,sm.SET_MENU_NAME FROM `HEALTH_CHECK& SET` h
    join HEALTH_CHECK hc
    on hc.HEALTH_CHECK_ID=h.FK_HEALTH_CHECK_ID
    left join SET_MENU sm on sm.SET_MENU_ID=h.FK_SET_MENU_ID
    order by sm.SET_MENU_NAME,hc.HEALTH_CHECK_ID";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 
    // PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵
    // PDO::FETCH_NUM 返回以數字作為索引鍵(KEY)的陣列(ARRAY)，由0開始編號

    echo json_encode($data);
?>