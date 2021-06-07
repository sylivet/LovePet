<?php
    include("../../php/C_conn.php");


    $FK_MEMBER_ID = $_POST["FK_MEMBER_ID"];
    
    //建立SQL語法
    $sql = "select PET_NAME from PET_INFO where FK_MEMBER_ID = $FK_MEMBER_ID";
    
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 

    // PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵
    // PDO::FETCH_NUM 返回以數字作為索引鍵(KEY)的陣列(ARRAY)，由0開始編號
    
    // 用這行輸出有時中文會出現亂碼，所以改成第二行。
    // echo json_encode($data);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
?>