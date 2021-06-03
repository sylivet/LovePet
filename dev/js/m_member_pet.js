
document.addEventListener("DOMContentLoaded", function(){

  //======================== 是否登入的 ""呈現"" ===============================//
  $.ajax({
    method: "POST",
    url: "./php/front_end_API/M_getsession_MID.php",
    data: {},
    dataType: "text",
    //-------------------------- 載入ajax成功 ---------------------------------//
    success: function success(response) {
      let res = JSON.parse(response);
      //alert(res);

      //------------------------ 沒登入 ------------------------------//
      if (res == "N"){                                          
      alert('no member');

      }
      //------------------------ 已登入 ------------------------------//
      //----------------------- res為ID ------------------------------//
      else {
        
        //---透過 ajax 及變數 res ，取得資料
        $.ajax({
          type : "POST",	
          url : "./php/front_end_API/M_apr_memberpet.php",  
          data : {	
            MID : res,	
            },
          dataType : 'html' 
        }).done(function(data){  //---載入成功
          let m_data =  JSON.parse(data);
          console.log(m_data);
          // let m_datas = m_data[0]
          // console.log(m_datas);
          //console.log(typeof(m_data));
          // console.log(m_datas['MEMBER_IMG']);
          // $('#m_pic2').attr('src',`${m_datas['MEMBER_IMG']}`);

          //console.log(m_data.length);
          for( let i=0; i<m_data.length; i++ ){
            $(`#m_pet${i}`).attr('src',`${m_data[i]['PET_IMG']}`);
            //$(`#pet_name${i}`).prop('val',`${m_data[i]['PET_NAME']}`);
            $(`#pet_name${i}`).val(`${m_data[i]['PET_NAME']}`);
          }


        }).fail(function(jqXHR){ //---載入失敗
          alert("res為ID數據載入失敗: " + jqXHR.status);
        });
      
        
      }
    },
    //-------------------------- 載入ajax失敗 ---------------------------------//
    error: function error(exception) {
      alert("有無會員登入數據載入失敗: " + exception.status);
    }
  });

























 

});//loaded 的 end



