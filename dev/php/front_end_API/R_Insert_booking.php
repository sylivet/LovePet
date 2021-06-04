<?php

       include("../../php/R_conn.php");


       //取得POST過來的值
       $FK_MEMBER_ID = $_POST['FK_MEMBER_ID'];
       $CREATE_DATE = $_POST['CREATE_DATE'];
       $BOOKING_DATE = $_POST['BOOKING_DATE'];
       $numberOfAdults = $_POST['numberOfAdults'];
       $numberOfKids = $_POST['numberOfKids'];
       $numberOfDogs = $_POST['numberOfDogs'];
       $numberOfCats = $_POST['numberOfCats'];

       $NUM_OF_PEOPLE = $numberOfAdults + $numberOfKids;
       $NUM_OF_PETS = $numberOfDogs + $numberOfCats;


       // 所有被選的菜單 給$sql3用的
       $food = $_POST['food'];



       //插入RESTAURANT_ORDER
       $sql1 = 'INSERT INTO RESTAURANT_ORDER (FK_MEMBER_ID, CREATE_DATE, BOOKING_DATE, NUM_OF_PEOPLE, NUM_OF_PETS, ORDER_STATUS) VALUES (?, ?, ?, ?, ?, 0)';
       
       //執行
       $statement = $pdo->prepare($sql1);     
       $statement->bindValue(1 , $FK_MEMBER_ID); 
       $statement->bindValue(2 , $CREATE_DATE); 
       $statement->bindValue(3 , $BOOKING_DATE); 
       $statement->bindValue(4 , $NUM_OF_PEOPLE); 
       $statement->bindValue(5 , $NUM_OF_PETS); 
       $statement->execute();


       // 取得RESTAURANT_ORDER_ID
       $sql2 = 'SELECT RESTAURANT_ORDER_ID FROM LOVE_PET.RESTAURANT_ORDER WHERE CREATE_DATE = ?';

       $statement = $pdo->prepare($sql2);
       $statement->bindValue(1 , $CREATE_DATE);  
       $statement->execute();
       $RESTAURANT_ORDER_ID = $statement->fetch();







       //插入RESTAURANT_ORDER DETAIL
       for($i=0 ; $i < count($food); $i++){
              $MEAL_DATA_ID = $food[$i]["MEAL_DATA_ID"];
              $MEAL_AMOUNT = $food[$i]["MEAL_COUNT"];

              $sql3 = 'INSERT INTO RESTAURTAT_ORDER_DETAIL (FK_RESTAURANT_ORDER_ID, FK_MEAL_DATA_ID, MEAL_AMOUNT) VALUES(?, ?, ?)';

              $statement = $pdo->prepare($sql3);     
              $statement->bindValue(1 , $RESTAURANT_ORDER_ID[0]); 
              $statement->bindValue(2 , $MEAL_DATA_ID); 
              $statement->bindValue(3 , $MEAL_AMOUNT); 
              $statement->execute();
       };

       /*
       //插入MEAL_CUSTORMRIZE
       $sql4 = 'INSERT INTO MEAL_CUSTORMRIZE  (FK_RESTAURANT_ORDER_ID, MEAL_COSTURMRIZE_AMOUNT) VALUES(?, ?)';

       $statement = $pdo->prepare($sql4);     
       $statement->bindValue(1 , $RESTAURANT_ORDER_ID[0]); 
       $statement->bindValue(2 , ); 
       $statement->execute();




       //取得MEAL_CUSTORMRIZE_ID
       $sql5 = 'SELECT MEAL_CUSTORMRIZE_ID FROM LOVE_PET.RESTAURANT_ORDER WHERE FK_RESTAURANT_ORDER_ID = ?';

       $statement = $pdo->prepare($sql5);
       $statement->bindValue(1 , $RESTAURANT_ORDER_ID[0]);  
       $statement->execute();
       $MEAL_CUSTORMRIZE_ID = $statement->fetch();



       //插入MEAL_CUSTORMRIZE DETAIL
       for($j=0 ; $j < count($food); $j++){
              // $MEAL_DATA_ID = $food[$j]["MEAL_DATA_ID"];
              // $MEAL_AMOUNT = $food[$i]["MEAL_COUNT"];

              $sql6 = 'INSERT INTO LOVE_PET.MEAL_COSTURMRIZE_DETAILS (FK_MEAL_COSTURMRIZE_ID, INGREDIENTS) VALUES(?, ?)';

              $statement = $pdo->prepare($sql6);     
              $statement->bindValue(1 , $MEAL_CUSTORMRIZE_ID[0]); 
              $statement->bindValue(2 , '客製菜單細項'); 
              $statement->execute();

              
       };
       */
?>