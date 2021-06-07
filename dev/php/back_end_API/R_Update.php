<?php    
    include("../../php/R_conn.php");

    //取得POST過來的值
    $MEAL_DATA_ID = $_POST['MEAL_DATA_ID'];
    $MEAL_TYPE = $_POST['MEAL_TYPE'];
    $MEAL_NAME = $_POST['MEAL_NAME'];
    $MEAL_PRICE = $_POST['MEAL_PRICE'];
    $MEAL_IMG = $_POST['MEAL_IMG'];
    $MEAL_STATUS = $_POST['MEAL_STATUS'];
    $MEAL_CATA = $_POST['MEAL_CATA'];
    $MEAL_CAL = $_POST['MEAL_CAL'];
    $MEAL_MSG = $_POST['MEAL_MSG'];



    //建立SQL
    $sql = "UPDATE MEAL_DATA set MEAL_TYPE = ?, MEAL_NAME = ?, MEAL_PRICE = ?,MEAL_IMG = ?, MEAL_STATUS = ?, MEAL_CATA = ?, MEAL_CAL = ?, MEAL_MSG = ?, MEAL_COUNT = '1' WHERE MEAL_DATA_ID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $MEAL_TYPE); 
    $statement->bindValue(2 , $MEAL_NAME);
    $statement->bindValue(3 , $MEAL_PRICE);
    $statement->bindValue(4 , $MEAL_IMG);
    $statement->bindValue(5 , $MEAL_STATUS);
    $statement->bindValue(6 , $MEAL_CATA);
    $statement->bindValue(7 , $MEAL_CAL);
    $statement->bindValue(8 , $MEAL_MSG);
    $statement->bindValue(9 , $MEAL_DATA_ID);
    $statement->execute();


    
?>