
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
          url : "./php/front_end_API/M_apr_memberpeople.php",  
          data : {  MID : res,  }, //---透過 MID 去抓該筆會員資料
          dataType : 'html' 
        }).done(function(data){    //---載入成功
          let m_data =  JSON.parse(data);
          let m_datas = m_data[0]
          console.log(m_datas);
          //console.log(typeof(m_data));
          console.log(m_datas['MEMBER_IMG']);
          $('#m_pic2').attr('src',`${m_datas['MEMBER_IMG']}`);


         


          // Vue.component('my-component',{
          //     template: `<h1 style="color:red;">My component</h1>`,
          //  });
  
          //  Vue.component('my-aside',{
          //     template: 
          //         ` <aside>
          //             <div>
          //                 <h5><a href="./member_index.html"><img src="./img/member/catlogo-8.png" alt=""><span>會員專區</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></h5>
          //                 <div class="m_underline_1"></div>
          //                 <ul>
          //                     <li><a href="./member_people.html"><img src="./img/member/catlogo-8.png" alt=""><span>我的帳號</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
          //                     <li><a href="./member_pets.html"><img src="./img/member/catlogo-8.png" alt=""><span>我的寵物</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
          //                     <li><a href="./member_order_management.html"><img src="./img/member/catlogo-8.png" alt=""><span>訂單管理</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
          //                     <li class="m_little_li"><a href="./member_order_management.html"><img src="./img/member/catlogo-8.png" alt=""><span>已完成</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
          //                     <li class="m_little_li"><a href="./member_order_management.html"><img src="./img/member/catlogo-8.png" alt=""><span>未完成</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
          //                 </ul>
          //                 <input type="button" value="登 出">
          //             </div>
          //            </aside>`,
          //  });
  
          //   new Vue({
          //     el: '#app',
          //     data: {},
          //     methods: {},
  
          //     components: {
  
          //     },
          // });
      
































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



