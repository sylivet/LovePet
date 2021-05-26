<?php

       include("../../php/I_conn.php");

       $NEWS_ID = $_POST['NEWS_ID'];

       //---------------------------------------------------

       //建立SQL
       $sql = "DELETE FROM `NEWS` WHERE `NEWS_ID` = $NEWS_ID";

       //執行
       $pdo->exec($sql);

       echo "<script>alert('刪除成功'); location.href = '../.././back_news.html';</script>";


?>