<?php
    include("../../php/R_conn.php");
    
    //建立SQL語法
    $sql = "
    select 
    ro.RESTAURANT_ORDER_ID,
    m.MEMBER_ID,
    m.NAME,
    md.MEAL_CATA,
    md.MEAL_NAME,
    rod.MEAL_AMOUNT,
    ro.CREATE_DATE,
    ro.BOOKING_DATE,
    ro.NUM_OF_PEOPLE,
    ro.NUM_OF_PETS,
    ro.ORDER_STATUS,
    mc.MEAL_CUSTORMRIZE_ID,
    mcd.INGREDIENTS,
    mc.MEAL_COSTURMRIZE_AMOUNT
    from
    RESTAURTAT_ORDER_DETAIL rod
    left join RESTAURANT_ORDER ro on rod.FK_RESTAURANT_ORDER_ID=ro.RESTAURANT_ORDER_ID
    left join MEAL_DATA md on rod.FK_MEAL_DATA_ID= md.MEAL_DATA_ID
    left join MEMBER m on m.MEMBER_ID=ro.FK_MEMBER_ID
    left join MEAL_CUSTORMRIZE mc on mc.FK_RESTAURANT_ORDER_ID=ro.RESTAURANT_ORDER_ID
    left join MEAL_COSTURMRIZE_DETAILS mcd on mc.MEAL_CUSTORMRIZE_ID=mcd.FK_MEAL_COSTURMRIZE_ID";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 
    // PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵
    // PDO::FETCH_NUM 返回以數字作為索引鍵(KEY)的陣列(ARRAY)，由0開始編號

    echo json_encode($data);
?>