<?php

//MySQL相關資訊
$db_host = "127.0.0.1";
$db_user = "root";
$db_select = "LOVE_PET";
$db_pass = "ac1234zxc";

//建立資料庫連線物件
$dsn = "mysql:host=" . $db_host . ";dbname=" . $db_select;

<<<<<<< HEAD
  //建立PDO物件，並放入指定的相關資料
  $pdo = new PDO($dsn, $db_user, $db_pass);

=======
//建立PDO物件，並放入指定的相關資料
$pdo = new PDO($dsn, $db_user, $db_pass);
>>>>>>> 856365245ea5f35dd5ec08fde5a60d4544d3ae4c
