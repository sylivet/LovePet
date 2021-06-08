  
<?php

       include("../../php/M_conn.php");

       $MEMBER_ID = $_POST['MEMBER_ID'];

       //---------------------------------------------------

       //建立SQL
       $sql = "DELETE FROM MEMBER WHERE MEMBER_ID = $MEMBER_ID";

       //執行
       $pdo->exec($sql);

       echo "<script>alert('刪除成功')";


?>