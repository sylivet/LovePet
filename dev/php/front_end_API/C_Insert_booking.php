<?php

       include("../../php/C_conn.php");


       //取得POST過來的值
       $HOSPITAL_ORDER_ID = $_POST["HOSPITAL_ORDER_ID"];
       $FK_MEMBER_ID = $_POST["FK_MEMBER_ID"];
       $FK_PET_ID = $_POST["FK_PET_ID"];
       $FK_PET_ID = $_POST["FK_PET_ID"];
       $CREATE_DATE = $_POST["CREATE_DATE"];
       $BOOKING_DATE = $_POST["BOOKING_DATE"];
       $FK_SET_MENU_ID = $_POST["FK_SET_MENU_ID"];
       $FK_HEALTH_CHECK_ID = $_POST["FK_HEALTH_CHECK_ID"];
       $TOTAL_PRICE = $_POST["TOTAL_PRICE"];
       $ORDER_STATUS = $_POST["ORDER_STATUSE"];
     


      //建立SQL
      $sql = "INSERT INTO HOSPITAL_ORDER(HOSPITAL_ORDER_ID, FK_MEMBER_ID,FK_PET_ID, CREATE_DATE, BOOKING_DATE, FK_SET_MENU_ID, FK_HEALTH_CHECK_ID, TOTAL_PRICE, ORDER_STATUS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
              
      //執行
      $statement = $pdo->prepare($sql);  

      $statement->bindValue(1 , $HOSPITAL_ORDER_ID); 
      $statement->bindValue(2 , $FK_MEMBER_ID); 
      $statement->bindValue(3 , $FK_PET_ID); 
      $statement->bindValue(4 , $CREATE_DATE); 
      $statement->bindValue(5 , $BOOKING_DATE); 
      $statement->bindValue(6 , $FK_SET_MENU_ID); 
      $statement->bindValue(7 , $FK_HEALTH_CHECK_ID); 
      $statement->bindValue(8 , $TOTAL_PRICE); 
      $statement->bindValue(9 , $ORDER_STATUS); 

      $statement->execute();
       



?>