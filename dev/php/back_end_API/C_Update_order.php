<?php    
    include("../../php/R_conn.php");

    //取得POST過來的值
    $HOSPITAL_ORDER_ID = $_POST['HOSPITAL_ORDER_ID'];
    $BOOKING_DATE = $_POST['BOOKING_DATE'];
    $FK_SET_MENU_ID = $_POST['FK_SET_MENU_ID'];
    $FK_HELTH_CHECK_ID = $_POST['FK_HELTH_CHECK_ID'];
    $FK_HELTH_CHECK_ID2 = $_POST['FK_HELTH_CHECK_ID2'];
    $ORDER_STATUS = $_POST['ORDER_STATUS'];



    //建立SQL
    $sql = "UPDATE HOSPITAL_ORDER set BOOKING_DATE = ?, FK_SET_MENU_ID = ?, FK_HELTH_CHECK_ID = ?, FK_HELTH_CHECK_ID2 = ?,ORDER_STATUS = ? WHERE HOSPITAL_ORDER_ID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $BOOKING_DATE); 
    $statement->bindValue(2 , $FK_SET_MENU_ID);
    $statement->bindValue(3 , $FK_HELTH_CHECK_ID);
    $statement->bindValue(4 , $FK_HELTH_CHECK_ID2);
    $statement->bindValue(5 , $ORDER_STATUS);
    $statement->bindValue(6 , $HOSPITAL_ORDER_ID);
    $statement->execute();


?>