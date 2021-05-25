<?php

       include("../../php/R_conn.php");

       $MEAL_DATA_ID = $_POST['MEAL_DATA_ID'];

       //---------------------------------------------------

       //建立SQL
       $sql = "DELETE FROM MEAL_DATA WHERE MEAL_DATA_ID = $MEAL_DATA_ID";

       //執行
       $statement->execute();

       echo "<script>alert('刪除成功'); location.href = '../.././back_restaurant_meal.html';</script>";


?>