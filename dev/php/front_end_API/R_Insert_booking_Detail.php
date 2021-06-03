<?php

       include("../../php/R_conn.php");


       //取得POST過來的值
       $FK_RESTAURANT_ORDER_ID = $_POST['FK_RESTAURANT_ORDER_ID'];
       $MEAL_AMOUNT = $_POST['MEAL_AMOUNT'];
       $food = $_POST['food'];


       //建立SQL
       $sql = 'INSERT INTO RESTAURTAT_ORDER_DETAIL (FK_RESTAURANT_ORDER_ID, FK_MEAL_DATA_ID, MEAL_AMOUNT) 
       VALUES (?, ?, ?)';
       
       //執行
       $statement = $pdo->prepare($sql);     
       $statement->bindValue(1 , $FK_RESTAURANT_ORDER_ID); 
       $statement->bindValue(2 , $food); 
       $statement->bindValue(3 , $MEAL_AMOUNT); 
       $statement->execute();



?>