<?php

       include("../../php/R_conn.php");

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
              // $filePath = $ServerRoot."/5.lovepet/dist/img/restaurant/".$fileName;
              $filePath = $ServerRoot."/LovePet/dist/img/restaurant/".$fileName;
       
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
       $MEAL_TYPE = $_POST['MEAL_TYPE'];
       $MEAL_NAME = $_POST['MEAL_NAME'];
       $MEAL_PRICE = $_POST['MEAL_PRICE'];
       $MEAL_IMG = "./img/restaurant/".$fileName;
       $MEAL_STATUS = $_POST['MEAL_STATUS'];
       $MEAL_CATA = $_POST['MEAL_CATA'];
       $MEAL_CAL = $_POST['MEAL_CAL'];
       $MEAL_MSG = $_POST['MEAL_MSG'];
       $eng = $_POST['eng'];


       //建立SQL
       $sql = 'INSERT INTO MEAL_DATA (MEAL_TYPE, MEAL_NAME, MEAL_PRICE, MEAL_IMG, MEAL_STATUS, MEAL_CATA, MEAL_CAL, MEAL_MSG, MEAL_COUNT, eng) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)';
       

       //執行
       $statement = $pdo->prepare($sql);     
       $statement->bindValue(1 , $MEAL_TYPE); 
       $statement->bindValue(2 , $MEAL_NAME);
       $statement->bindValue(3 , $MEAL_PRICE);
       $statement->bindValue(4 , $MEAL_IMG);
       $statement->bindValue(5 , $MEAL_STATUS);
       $statement->bindValue(6 , $MEAL_CATA);
       $statement->bindValue(7 , $MEAL_CAL);
       $statement->bindValue(8 , $MEAL_MSG);
       $statement->bindValue(9 , $eng);
       $statement->execute();

       echo "<script>alert('新增商品成功'); location.href = '../.././back_restaurant_meal_create.html';</script>";



?>