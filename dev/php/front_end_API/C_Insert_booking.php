<?php

       include("../../php/C_conn.php");


       //取得POST過來的值
       $FK_MEMBER_ID = $_POST["FK_MEMBER_ID"];
       $FK_PET_ID = $_POST["FK_PET_ID"];
       $CREATE_DATE = $_POST["CREATE_DATE"];
       $BOOKING_DATE = $_POST["BOOKING_DATE"];
       $FK_SET_MENU_ID = $_POST["FK_SET_MENU_ID"];
       $FK_HELTH_CHECK_ID = $_POST["FK_HELTH_CHECK_ID"];
       $FK_HELTH_CHECK_ID2 = $_POST["FK_HELTH_CHECK_ID2"];
       $TOTAL_PRICE = $_POST["TOTAL_PRICE"];
     


      //建立SQL
      $sql = "INSERT INTO HOSPITAL_ORDER(FK_MEMBER_ID,FK_PET_ID, CREATE_DATE, BOOKING_DATE, FK_SET_MENU_ID, FK_HELTH_CHECK_ID, FK_HELTH_CHECK_ID2, TOTAL_PRICE, ORDER_STATUS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)";
              
      //執行
      $statement = $pdo->prepare($sql);  

      $statement->bindValue(1 , $FK_MEMBER_ID); 
      $statement->bindValue(2 , $FK_PET_ID); 
      $statement->bindValue(3 , $CREATE_DATE); 
      $statement->bindValue(4 , $BOOKING_DATE); 
      $statement->bindValue(5 , $FK_SET_MENU_ID); 
      $statement->bindValue(6 , $FK_HELTH_CHECK_ID); 
      $statement->bindValue(7 , $FK_HELTH_CHECK_ID2); 
      $statement->bindValue(8 , $TOTAL_PRICE); 

      $statement->execute();
       



?>