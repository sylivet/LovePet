<?php
    include("../../php/I_conn.php");

    $SHOPPING_ORDER_ID = $_POST['SHOPPING_ORDER_ID'];
    
    //建立SQL語法
    $sql = "
    SELECT sp.PRODUCT_NAME,sod.NUM_OF_PRODUCT FROM SHOPPING_ORDER_DETAIL sod
    left join SHOPPING_ORDER so on sod.FK_SHOPPING_ORDER_ID=so.SHOPPING_ORDER_ID
    left join SHOPPING_PRODUCT sp on sod.FK_PRODUCT_ID=sp.PRODUCT_ID
    left join MEMBER m on m.MEMBER_ID=so.FK_MEMBER_ID
    where SHOPPING_ORDER_ID = $SHOPPING_ORDER_ID;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);     
    // $statement->bindValue(1 , $RESTAURANT_ORDER_ID); 
    $statement->execute();
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll(PDO::FETCH_ASSOC); 
    echo json_encode($data, JSON_UNESCAPED_UNICODE);

    
?>