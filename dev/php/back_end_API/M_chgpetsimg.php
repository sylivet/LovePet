<?php
       
 
       session_start(); 
       $MID = $_SESSION["memberID"];

       $input_pid = $_POST["petid"];
       // $input_pid = 4;


       include("../../php/M_conn.php");

           
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
              //$filePath = $ServerRoot."/tfd101/project/g2/img/back_index/".$fileName;
              $filePath = $ServerRoot."/love_pet/dist/img/back_index/".$fileName;

              $photoPath = "./img/back_index/".$fileName;
              // $photoPath = "./img/back_index/h1_c1.jpg";

              
       
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


       //建立SQL
       //$sql = 'UPDATE `tibamefe_tfd101g2`.`PET_INFO` SET `PET_IMG` = ? WHERE (`PET_ID` = ? );';
       $sql = 'UPDATE `LOVE_PET`.`PET_INFO` SET `PET_IMG` = ? WHERE (`PET_ID` = ? );';
       

       //執行
       $statement = $pdo->prepare($sql);     
       $statement->bindValue(1 , $photoPath); 
       $statement->bindValue(2 , $input_pid);
       $x = $statement->execute();


       if($x== 1){

       //echo   "這是echo的".$photoPath;
       //echo    "這是echo的".$MID;
       echo "<script>alert('更新照片很成功'); location.href = '../.././member_pets.html';</script>";
       


       }else{
              echo "<script>alert('更新照片失敗，請聯繫系統'); location.href = '../.././member_pets.html';</script>";
       }



?>