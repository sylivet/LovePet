document.addEventListener('DOMContentLoaded', function () {
  //======================== 是否登入的 ""呈現"" ===============================//
  $.ajax({
    method: 'POST',
    url: './php/front_end_API/M_getsession_MID.php',
    data: {},
    dataType: 'text',
    success: function success(response) {
      let res = JSON.parse(response);
      //alert(res);
      if (res == 'N') {
        //alert('no member');
        $('#m_header_control').attr('style', 'color:orange;');
      } else {
        //alert('yes member');
        $('#m_header_control').removeAttr('style');
      }
    },
    error: function error(exception) {
      alert('數據載入失敗: ' + exception.status);
    },
  });

  //====================== m_sign_in / up ==========================//

  let m_sign_btn = document.getElementById('m_sign_btn');
  let m_sign_in_bk = document.getElementById('m_sign_in_bk');
  let m_sign_up_bk = document.getElementById('m_sign_up_bk');
  let m_switch_sign_up = document.getElementById('m_switch_sign_up');
  let m_switch_sign_in = document.getElementById('m_switch_sign_in');

  //======================== 登出function ===============================//

  m_sign_btn.addEventListener('click', function () {
    //   if(m_sign_in_bk.style.display === "none"){
    //     m_sign_in_bk.style.display = "block";
    // }
    let m_leave = '確認登出嗎?';
    if (confirm(m_leave) == true) {
      localStorage.clear(); //清除local

      $.ajax({
        //清除session ID
        method: 'POST',
        url: './php/front_end_API/M_removesession_MID.php',
        data: {},
        dataType: 'text',
        success: function success(response) {
          //alert(response);
          let m_header = document.querySelector('.m_header');
          m_header.classList.toggle('m_toggle');
          window.location.href="front_index.html";
         $('#m_header_control').attr('style','color:orange;');
        },
        error: function error(exception) {
          alert('數據載入失敗: ' + exception.status);
        },
      });
    } else {
      // let m_header = document.querySelector('.m_header');
      // m_header.classList.toggle('m_toggle');
    }
  });

  //======================== 彈窗切換 ===============================//

  m_switch_sign_up.addEventListener('click', function () {
    m_sign_in_bk.style.display = 'none';
    m_sign_up_bk.style.display = 'block';
  });

  m_switch_sign_in.addEventListener('click', function () {
    m_sign_up_bk.style.display = 'none';
    m_sign_in_bk.style.display = 'block';
  });

  var close = document.getElementsByClassName('i_closeButton');
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      if (this.closest('.i_background').style.display === 'block') {
        this.closest('.i_background').style.display = 'none';
      }
    });
  }

  //====================== m_header_control ==========================//控制人像按鈕

  let m_control = document.querySelector('#m_header_control');
  m_control.addEventListener('click', function () {
    //alert('測試按鈕!!!');
    //----------------- 用 JQuery $.ajax 嘗試去做判斷 (成功 ----------------//
    $.ajax({
      method: 'POST',
      url: './php/front_end_API/M_getsession_MID.php',
      data: {},
      dataType: 'text',
      success: function success(response) {
        let res = JSON.parse(response);

        if (res == 'N') {
          //alert(response); //查看 member ID
          //alert('歡迎登入會員');
          m_sign_in_bk.style.display = 'block';
        } else {
          //------------------------- m_member_information -------------------------//會員資訊

            $.ajax({
              type : "POST",	
              url : "./php/front_end_API/M_apr_memberpeople.php",  
              data : {  
                  MID : res,            //---透過 MID 去抓該筆會員資料
              }, 
              dataType : 'html' 
              }).done(function(data){    //---載入成功
                  //console.log(data);
              let mymember =  JSON.parse(data);
              //console.log(mymember);

                document.getElementById('m_nickname').innerText = mymember[0]['NICKNAME'];
                document.getElementById('m_pic').src = mymember[0]['MEMBER_IMG']?  mymember[0]['MEMBER_IMG'] : './img/member/Profile-Male-PNG.jpg';
              
              }).fail(function(jqXHR){   //---載入失敗
              alert("res為ID數據載入失敗: " + jqXHR.status);
              });

              let m_header = document.querySelector('.m_header');
              m_header.classList.toggle('m_toggle');

        }
      },
      error: function error(exception) {
        alert('數據載入失敗: ' + exception.status);
      },
    });
  });

  //============================ 註冊function ================================//

  let input_js = document.getElementsByTagName('input');
  let m_sign_up = document.getElementById('m_sign_up');

  m_sign_up.addEventListener('click', function () {
    //--------------------- 沒輸入值時的提醒 ---------------------------//
    for (let i = 0; i < input_js.length; i++) {
      if (input_js[i].value == '') {
        input_js[i].placeholder = '此處不能空白';
        input_js[i].style['background-color'] = 'lightgray';
        input_js[i].style.color = 'white';
        //$('#m_sign_up').attr('disabled', true);
      } else {
        $('#m_sign_up').attr('disabled', false);
      }
    }
    //$('#agree_items').prop('checked',true);

    if (
      $('#username').val() == '' ||
      $('#mail').val() == '' ||
      $('#phone').val() == '' ||
      $('#address').val() == '' ||
      $('#nickname2').val() == '' ||
      $('#new_pwd').val() == '' ||
      $('#chk_pwd').val() == '' ||
      $('#agree_items').prop('checked') == false
    ) {
      alert('空白處 及 會員條款 請確認');
    } else {
      //alert('bbb');
      //------------------- password 判別是否一致 ------------------------//
      if ($('#new_pwd').val() != $('#chk_pwd').val()) {
        alert('密碼不一致，請再次確認!');
        // $('#new_pwd').val() = '';
        // $('#chk_pwd').val() = '';
      } else {
        //alert('密碼一致，進行下一步!');
        $('#m_sign_up').attr('disabled', false);

        //--------------------- 連結後端程式 ---------------------------//
        $.ajax({
          type: 'POST',
          url: './php/front_end_API/M_sign_up.php',
          data: {
            un: $('#username').val(),
            ml: $('#mail').val(),
            pwd: $('#new_pwd').val(),
            nm: $('#nickname2').val(),
            phe: $('#phone').val(),
            ads: $('#address').val(),
          },
          dataType: 'html', //設定該網頁回應的會是 html 格式
        })
          .done(function (data) {
            //成功的時候
            console.log(data);
            if (data == 'yes') {
              alert('註冊成功，請重新登入!');
              $('#m_account').css({'backgroundColor':'white',}).prop('placeholder',"請輸入您的電子信箱");
              $('#m_pwd').css({'backgroundColor':'white',}).prop('placeholder',"請輸入您的正確密碼");
              //window.location.href="admin/login.php";
              m_sign_up_bk.style.display = 'none';
              m_sign_in_bk.style.display = 'block';
            } else {
              alert('註冊失敗，請確認資料是否輸入正確。');
            }
          })
          .fail(function (jqXHR, textStatus, errorThrown) {
            //失敗的時候
            alert('有錯誤產生，請看 console log');
            console.log(jqXHR.responseText);
          });
      }
    }
  });

  //--------------------- 輸入值時清除預設 ---------------------------//
  for (let i = 0; i < input_js.length; i++) {
    input_js[i].addEventListener('input', function () {
      this.placeholder = '';
      this.style['background-color'] = 'white';
      this.style.color = 'black';
    });
  }

  //--------------------- Email 判別是否重複 ---------------------------//
  $('#mail').on('blur', function () {
    var keyin_value = $(this).val();
    console.log(keyin_value);

    if (keyin_value != '') {
      //------------- 如果 mail 不為空值 ---------------//

      $.ajax({
        type: 'POST',
        url: './php/front_end_API/M_checkdata.php',
        data: {
          n: $(this).val(),
        },
        dataType: 'html',
      })
        .done(function (data) {
          //--------載入成功的時候
          console.log(data);
          if (data == 'no') {
            //無重複
            $('#m_sign_up').attr('disabled', false);
            $('#mail').css('color', 'black');
          } else {
             alert('已有此帳號，不可重複註冊');
            $('#m_sign_up').attr('disabled', true);
            $('#mail').css('color', 'red');
          }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          //--------載入失敗的時候

          alert('有錯誤產生，請看 console log');
          console.log(jqXHR.responseText);
        });
    } else {
      //------------- 如果 mail 為為空值 ---------------//
    }
  });
}); //loaded 的 end

// //============================ 登入function ================================//
function M_sign_in() {
  let account = document.getElementById('m_account').value;
  let pwd = document.getElementById('m_pwd').value;

  //==========呼叫 XMLHttpRequest
  var xhr = new XMLHttpRequest();

  //==========判斷XMLHttpRequest是否發送成功
  xhr.onload = () => {
    if (xhr.status == 200) {
      let m_data = JSON.parse(xhr.responseText);
      //alert(m_data);

      if (m_data != 'nonedata') {
        localStorage.setItem('m_datainfro', xhr.responseText); //存入storage
        console.log(m_data);
        alert(`歡迎 使用者${m_data.NICKNAME} 回來!`);
        $('#m_header_control').removeAttr('style');
        m_sign_in_bk.style.display = 'none';
      } else {
        alert('帳號或密碼錯誤，請再重新輸入');
      }
    } else {
      alert(`連結未成功，狀態為${xhr.status}`);
      console.log(xhr.status);
    }
  };

  //==========連結後端檔案 GET
  // var url = `./php/front_end_API/M_sign_in.php?account=${account}&pwd=${pwd}`;
  // xhr.open('post',url,true);  //t & f 控制同步非同步
  // xhr.send(null);

  //==========連結後端檔案 POST
  var url = `./php/front_end_API/M_sign_in.php`;
  xhr.open('post', url, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //POST only
  xhr.send('account2=' + account + '&' + 'pwd2=' + pwd);

  //a111111@yahoo.com.tw
  //1111
}