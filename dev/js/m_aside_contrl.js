
    // Vue.component('my-component',{
        //     template: `<h1 style="color:red;">My component</h1>`,
        //  });

        Vue.component('my-aside',{
          template: 
              ` <aside>
                  <div>
                      <h5><a href="./member_index.html"><img src="./img/member/catlogo-8.png" alt=""><span>會員專區</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></h5>
                      <div class="m_underline_1"></div>
                      <ul>
                          <li><a href="./member_people.html"><img src="./img/member/catlogo-8.png" alt=""><span>我的帳號</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
                          <li><a href="./member_pets.html"><img src="./img/member/catlogo-8.png" alt=""><span>我的寵物</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
                          <li><a href="./member_order_management.html"><img src="./img/member/catlogo-8.png" alt=""><span>訂單管理</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
                          <li class="m_little_li"><a href="./member_order_management.html"><img src="./img/member/catlogo-8.png" alt=""><span>已完成</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
                          <li class="m_little_li"><a href="./member_order_management.html"><img src="./img/member/catlogo-8.png" alt=""><span>未完成</span><img src="./img/member/catlogo-8.png" alt="" class="m_imgblock"></a></li>
                      </ul>
                      <input type="button" value="登 出" @click="mleave" >
                  </div>
                 </aside>`,
          data(){
              return {
                  mconfirm: '確認登出嗎?',
              };
          },
          methods:{
              mleave(){   //--- 登出function
                  if(confirm(this.mconfirm) == true){
                  localStorage.clear();                            //清除local

                  $.ajax({                                         //清除session ID
                      method: "POST",
                      url: "./php/front_end_API/M_removesession_MID.php",
                      data: {},
                      dataType: "text",
                      success: function success(response) {
                      window.location.href="front_index.html";
                      },
                      error: function error(exception) {
                      alert("數據載入失敗: " + exception.status);
                      }
                  });

                  }else{

                  };
                  },
          },
       });

        new Vue({
          el: '#app',
          data: {},
          methods: {},

          components: {

          },
      });

























 



