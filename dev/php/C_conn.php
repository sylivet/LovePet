<?php

  //MySQL相關資訊
  $db_host = "127.0.0.1";
  $db_user = "root";
  $db_select = "LOVE_PET";
<<<<<<< HEAD
  $db_pass = "password";
=======
  $db_pass = "ac1234zxc";
>>>>>>> 4d5ad7b2dc1486b19a3da6f7f5ed644a1aa592a5

  //建立資料庫連線物件
  $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

  //建立PDO物件，並放入指定的相關資料
  $pdo = new PDO($dsn, $db_user, $db_pass);
