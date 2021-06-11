<?php
    include("../../php/I_conn.php");

    $SHOPPING_ORDER_ID = $_POST['SHOPPING_ORDER_ID'];
    
    //建立SQL語法
    $sql = "
            SELECT scd.FK_SHOPPING_CUSTORMRIZE_ID,scd.ITEM,scd.COLOR,sc.SHOPPING_CUSTORMRIZE_AMOUNT
FROM SHOPPING_ORDER so
left join MEMBER m on m.MEMBER_ID=so.FK_MEMBER_ID
left join SHOPPING_CUSTORMRIZE sc on sc.FK_SHOPPING_ORDER_ID= so.SHOPPING_ORDER_ID
left join SHOPPING_CUSTORMRIZE_DETAILS scd on scd.FK_SHOPPING_CUSTORMRIZE_ID = sc.SHOPPING_CUSTORMRIZE_ID
where SHOPPING_ORDER_ID= $SHOPPING_ORDER_ID";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);     
    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 
    echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>