<?php
    include("../../php/C_conn.php");
    
    $FK_PET_ID = $_POST['FK_PET_ID'];

    //建立SQL語法
    $sql ="SELECT distinct 
    hc.LISTNAME, 
    hr.HEALTH_CHECK_VALUE 
    FROM 
    HEALTH_CHECK hc 
    left join HEALTH_REPORT hr 
      on hc.HEALTH_CHECK_ID = hr.FK_HEALTH_CHECK_ID
    left join HOSPITAL_ORDER ho 
      on ho.HOSPITAL_ORDER_ID = hr.FK_HOSPITAL_ORDER_ID
    left join PET_INFO pi
		  on ho.FK_PET_ID = pi.PET_ID
    where 
    pi.PET_ID = $FK_PET_ID
    ";
    
    // ho.FK_MEMBER_ID = $FK_MEMBER_ID and 
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 

    // PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵
    // PDO::FETCH_NUM 返回以數字作為索引鍵(KEY)的陣列(ARRAY)，由0開始編號
    

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
?>