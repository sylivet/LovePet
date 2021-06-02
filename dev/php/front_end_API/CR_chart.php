<?php
    include("../../php/C_conn.php");
    
    //建立SQL語法
    $sql = "select pi.PET_NAME, hr.HEALTH_REPORT_ID, ds.SUGGESTION, hc.LISTNAME, ho.BOOKING_DATE, hr.HEALTH_CHECK_VALUE, ho.FK_MEMBER_ID  FROM HEALTH_REPORT  as hr
    left join HOSPITAL_ORDER  as ho on ho.HOSPITAL_ORDER_ID = hr.FK_HOSPITAL_ORDER_ID
    left join HEALTH_CHECK as hc on hc.HEALTH_CHECK_ID = hr.FK_HEALTH_CHECK_ID
    left join PET_INFO as pi on pi.PET_ID = ho.FK_PET_ID
    left join DOCTOR_SUGGESTION as ds on ds.FK_HOSPITAL_ORDER_ID = ho.HOSPITAL_ORDER_ID  ";
    
    
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 

    // PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵
    // PDO::FETCH_NUM 返回以數字作為索引鍵(KEY)的陣列(ARRAY)，由0開始編號
    

    echo json_encode($data);
?>