<?php

       include("../../php/R_conn.php");


       //取得POST過來的值
       $CREATE_DATE = $_POST['CREATE_DATE'];
       $BOOKING_DATE = $_POST['BOOKING_DATE'];
       $numberOfAdults = $_POST['numberOfAdults'];
       $numberOfKids = $_POST['numberOfKids'];
       $numberOfDogs = $_POST['numberOfDogs'];
       $numberOfCats = $_POST['numberOfCats'];
       // $food = $_POST['food'];

       $NUM_OF_PEOPLE = $numberOfAdults + $numberOfKids;
       $NUM_OF_PETS = $numberOfDogs + $numberOfCats;

       // for($i=0 ; $i < count($food); $i++){

              //food items
              // $foodName = $food[$i]["MEAL_NAME"];

              //建立SQL
              $sql = 'INSERT INTO RESTAURANT_ORDER (FK_MEMBER_ID, CREATE_DATE, BOOKING_DATE, NUM_OF_PEOPLE, NUM_OF_PETS, ORDER_STATUS) VALUES (6, ?, ?, ?, ?, 0)';
              
              //執行
              $statement = $pdo->prepare($sql);     
              $statement->bindValue(1 , $CREATE_DATE); 
              $statement->bindValue(2 , $BOOKING_DATE); 
              $statement->bindValue(3 , $NUM_OF_PEOPLE); 
              $statement->bindValue(4 , $NUM_OF_PETS); 
              $statement->execute();
       // }



?>