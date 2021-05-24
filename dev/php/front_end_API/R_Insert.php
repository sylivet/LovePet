<?php

       include("R_conn.php");

       //---------------------------------------------------


       //建立SQL
       $sql = 'INSERT INTO MEAL_DATA (MEAL_TYPE, MEAL_NAME, MEAL_PRICE, MEAL_IMG, MEAL_STATUS, MEAL_CATA, MEAL_CAL, MEAL_MSG, MEAL_COUNT) VALUES ("義式", "奶油麵", 350, "/img/test.jpg", 1, "humanFood", 200, "選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。", 1)';
       

       //執行
       $pdo->exec($sql);


?>