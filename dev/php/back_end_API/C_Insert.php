<?php

       include("../../php/C_conn.php");

       

       //取得POST過來的值
       $LISTNAME = $_POST['LISTNAME'];
       $PRICE = $_POST['PRICE'];
       $TESTING_SUBJECT = $_POST['TESTING_SUBJECT'];
      


       //建立SQL
       $sql = 'INSERT INTO HEALTH_CHECK(LISTNAME, PRICE, TESTING_SUBJECT) VALUES (?,?,?)';
       

       //執行
       $statement = $pdo->prepare($sql);     
       $statement->bindValue(1 , $LISTNAME); 
       $statement->bindValue(2 , $PRICE);
       $statement->bindValue(3 , $TESTING_SUBJECT);
       $statement->execute();

       echo "<script>alert('新增健檢項目成功'); location.href = '../.././back_health_check_create.html';</script>";



?>