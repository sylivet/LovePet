<?php
    include("../../php/R_conn.php");

    $RESTAURANT_ORDER_ID = $_POST['RESTAURANT_ORDER_ID'];
    
    //建立SQL語法
    $sql = "
    select
    md.MEAL_NAME,
    rod.MEAL_AMOUNT
    from
    RESTAURTAT_ORDER_DETAIL rod
    left join RESTAURANT_ORDER ro on rod.FK_RESTAURANT_ORDER_ID=ro.RESTAURANT_ORDER_ID
    left join MEAL_DATA md on rod.FK_MEAL_DATA_ID= md.MEAL_DATA_ID
    left join MEMBER m on m.MEMBER_ID=ro.FK_MEMBER_ID
    where RESTAURANT_ORDER_ID = $RESTAURANT_ORDER_ID";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);     
    // $statement->bindValue(1 , $RESTAURANT_ORDER_ID); 
    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 
    echo json_encode($data, JSON_UNESCAPED_UNICODE);

    
?>