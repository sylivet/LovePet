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
              $filePath = $ServerRoot."/LovePet/dist/img/mall/".$fileName;
       
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
       $PRODUCT_NAME = $_POST['PRODUCT_NAME'];
       $PRODUCT_PRICE = $_POST['PRODUCT_PRICE'];
       $PRODUCT_IMG = "img/mall/".$fileName;
       $PRODUCT_INFO = $_POST['PRODUCT_INFO'];
       $PRODUCT_SOLD = $_POST['PRODUCT_SOLD'];
       $PRODUCT_TYPE = $_POST['PRODUCT_TYPE'];
       $PRODUCT_STATUS = $_POST['PRODUCT_STATUS'];

       //建立SQL
       $sql = 'INSERT INTO `SHOPPING_PRODUCT`( `PRODUCT_NAME`, `PRODUCT_PRICE`, `PRODUCT_IMG`, `PRODUCT_INFO`, `PRODUCT_SOLD`, `PRODUCT_TYPE`, `PRODUCT_STATUS`,	`count`) VALUES (?,?,?,?,?,?,?,1)';
       

       //執行
       $statement = $pdo->prepare($sql);     
       $statement->bindValue(1 , $PRODUCT_NAME); 
       $statement->bindValue(2 , $PRODUCT_PRICE);
       $statement->bindValue(3 , $PRODUCT_IMG);
       $statement->bindValue(4 , $PRODUCT_INFO);
       $statement->bindValue(5 , $PRODUCT_SOLD);
       $statement->bindValue(6 , $PRODUCT_TYPE);
       $statement->bindValue(7 , $PRODUCT_STATUS);
       $statement->execute();

       echo "<script>alert('新增商品成功'); location.href = '../.././back_shopping_product.html';</script>";



?>