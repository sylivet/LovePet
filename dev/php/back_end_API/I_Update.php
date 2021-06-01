<?php    
    include("../../php/I_conn.php");

    //取得POST過來的值
    $NEWS_ID = $_POST['NEWS_ID'];
    $NEWS_TITLE = $_POST['NEWS_TITLE'];
    $NEWS_IMG = $_POST['NEWS_IMG'];
    $NEWS_CONTENT = $_POST['NEWS_CONTENT'];
    $NEWS_STATUS = $_POST['NEWS_STATUS'];

    //建立SQL
    $sql ="UPDATE `NEWS` SET `NEWS_TITLE`=?,`NEWS_IMG`=?,`NEWS_CONTENT`=?,`NEWS_STATUS`=? WHERE `NEWS_ID`=?";
    //執行
    $statement = $pdo->prepare($sql);     
    $statement->bindValue(1 , $NEWS_TITLE); 
    $statement->bindValue(2 , $NEWS_IMG);
    $statement->bindValue(3 , $NEWS_CONTENT);
    $statement->bindValue(4 , $NEWS_STATUS);
    $statement->bindValue(5 , $NEWS_ID);
    $statement->execute();
    
?>