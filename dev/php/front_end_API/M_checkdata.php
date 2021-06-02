<?php

$input_account = $_POST["n"];

//============================= 引入資料 =====================================//

include("../../php/back_end_API/M_appearData.php");
        
$data = go($pdo);
//print_r ($data[1]);

$account = [];
for($i = 0; $i < count($data); $i++){
	//print_r ( $data[$i]);
  //echo $data[$i]['ACCOUNT'];
  //echo '<br><hr><br>';

  array_push($account, $data[$i]['ACCOUNT']);
}

//============================= 開始判斷 =====================================//

if(in_array( $input_account , $account)){
  echo 'yes'; //有重複
}else{
  echo 'no';  //無重複
}
;
?>