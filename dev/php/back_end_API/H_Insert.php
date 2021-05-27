<?php

       include("../../php/I_conn.php");

       //判斷是否上傳成功
       if($_FILES["file"]["error"] > 0){
              echo "上傳失敗: 錯誤代碼".$_FILES["file"]["error"];
       }else{
              //取得上傳的檔案資訊=======================================
              $fileName = $_FILES["file"]["name"];    //檔案名稱含副檔名        
              $filePath_Temp = $_FILES["file"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
              $fileType = $_FILES["file"]["type"];    //檔案種類        
              $fileSize = $_FILES["file"]["size"];    //檔案尺寸
              //=======================================================

              //Web根目錄真實路徑
              $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
              
              //檔案最終存放位置
              $filePath = $ServerRoot."/dist/img/hotel/".$fileName;
       
              //將暫存檔搬移到正確位置
              move_uploaded_file($filePath_Temp, $filePath);

              //顯示檔案資訊
              echo "檔案存放位置：".$filePath;
              echo "<br/>";
              echo "類型：".$fileType;
              echo "<br/>";
              echo "大小：".$fileSize;
              echo "<br/>";
              echo "副檔名：".getExtensionName($filePath);
       }

       //取得檔案副檔名
       function getExtensionName($filePath){
              $path_parts = pathinfo($filePath);
              return $path_parts["extension"];
       }
       //---------------------------------------------------

       //取得POST過來的值
       $NEWS_TITLE = $_POST['NEWS_TITLE'];
       $NEWS_IMG = "img/index/".$fileName;
       $NEWS_CONTENT = $_POST['NEWS_CONTENT'];
       $NEWS_STATUS = $_POST['NEWS_STATUS'];

       //建立SQL
       $sql = 'INSERT INTO `ROOM_TYPE`(`ROOM_NAME`, `PRICE`, `AMOUNT`, `MAX_CAPACITY`, `ROOM_IMG`, `ROOM_IMG2`, `ROOM_IMG3`, `PANNELLUM`, `ROOM_STATUS`) VALUES (?,?,?,?,?,?,?,?,?)';
       

       //執行
       $statement = $pdo->prepare($sql);     
       $statement->bindValue(1 , $ROOM_NAME); 
       $statement->bindValue(2 , $PRICE);
       $statement->bindValue(3 , $AMOUNT);
       $statement->bindValue(4 , $MAX_CAPACITY);
       $statement->bindValue(5 , $ROOM_IMG);
       $statement->bindValue(6 , $ROOM_IMG2);
       $statement->bindValue(7 , $ROOM_IMG3);
       $statement->bindValue(8 , $PANNELLUM);
       $statement->bindValue(9 , $ROOM_STATUS);
       $statement->execute();

       echo "<script>alert('新增房型成功'); location.href = '../.././back_room_type_create.html';</script>";



?>