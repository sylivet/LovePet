<?php

       include("../../php/I_conn.php");

       ini_set('date.timezone','Asia/Taipei');
       function udate($format = 'u', $utimestamp = null)
       {
       if (is_null($utimestamp)){
        $utimestamp = microtime(true);
       }
       $timestamp = floor($utimestamp);
       $milliseconds = round(($utimestamp - $timestamp) * 1000000);//改這裡的數據控制毫秒位數
        return date(preg_replace('`(?<!\\\\)u`', $milliseconds, $format), $timestamp);
       }

       $CREATE_DATE = date_create()->format('Y-m-d H:i:s u');

       //取得POST過來的值
       //https://stackoverflow.com/questions/1995562/now-function-in-php
       $BOOKING_CHECKIN_DATE = $_POST['BOOKING_CHECKIN_DATE'];
       $BOOKING_CHECKOUT_DATE = $_POST['BOOKING_CHECKOUT_DATE'];
       $FK_ROOM_TYPE_ID = $_POST['FK_ROOM_TYPE_ID'];
       $numberOfAdults = $_POST['numberOfAdults'];
       $numberOfKids = $_POST['numberOfKids'];
       $numberOfDogs = $_POST['numberOfDogs'];
       $numberOfCats = $_POST['numberOfCats'];

       $NUM_OF_PEOPLE = $numberOfAdults + $numberOfKids;
       $NUM_OF_PETS = $numberOfDogs + $numberOfCats;

       //建立SQL
       $sql = 'INSERT INTO HOTEL_ORDER (FK_MEMBER_ID, CREATE_DATE, BOOKING_CHECKIN_DATE, BOOKING_CHECKOUT_DATE, FK_ROOM_TYPE_ID, NUM_OF_PEOPLE, NUM_OF_PETS, ORDER_STATUS) VALUES (?, ?, ?, ?, ?, ?, ?, 0)';
       //執行
       $statement = $pdo->prepare($sql);     
       $statement->bindValue(1 , $FK_MEMBER_ID); //神神秘秘的不知道
       $statement->bindValue(2 , $CREATE_DATE); 
       $statement->bindValue(3 , $BOOKING_CHECKIN_DATE); 
       $statement->bindValue(4 , $BOOKING_CHECKOUT_DATE); 
       $statement->bindValue(5 , $FK_ROOM_TYPE_ID); 
       $statement->bindValue(6 , $NUM_OF_PEOPLE); 
       $statement->bindValue(7 , $NUM_OF_PETS); 
       $statement->bindValue(8 , $ORDER_STATUS); 
       $statement->execute();
?>