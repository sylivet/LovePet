<?php
    include("../../php/R_conn.php");

    $RESTAURANT_ORDER_ID = $_POST['RESTAURANT_ORDER_ID'];
    
    //建立SQL語法
    $sql = "
            select
            mcd.FK_MEAL_COSTURMRIZE_ID,
            mcd.ingredients,
            mc.MEAL_COSTURMRIZE_AMOUNT
            from
            RESTAURANT_ORDER ro
            left join MEMBER m on m.MEMBER_ID=ro.FK_MEMBER_ID
            left join MEAL_CUSTORMRIZE mc on mc.FK_RESTAURANT_ORDER_ID=ro.RESTAURANT_ORDER_ID
            left join MEAL_COSTURMRIZE_DETAILS mcd on mc.MEAL_CUSTORMRIZE_ID=mcd.FK_MEAL_COSTURMRIZE_ID
            where RESTAURANT_ORDER_ID = $RESTAURANT_ORDER_ID";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);     
    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 
    echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>