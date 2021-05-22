
document.addEventListener("DOMContentLoaded", function(){

  //====================== m_sign_in / up ==========================//
  
  let m_sign_btn = document.getElementById('m_sign_btn');
  let m_sign_in_bk = document.getElementById('m_sign_in_bk');
  let m_sign_up_bk = document.getElementById('m_sign_up_bk');
  let m_switch_sign_up = document.getElementById('m_switch_sign_up');
  let m_switch_sign_in = document.getElementById('m_switch_sign_in');

  m_sign_btn.addEventListener('click',function(){
    if(m_sign_in_bk.style.display === "none"){
      m_sign_in_bk.style.display = "block";
  }
  });

  m_switch_sign_up.addEventListener('click',function(){
    m_sign_in_bk.style.display = "none";
    m_sign_up_bk.style.display = "block";
  });

  m_switch_sign_in.addEventListener('click',function(){
    m_sign_up_bk.style.display = "none";
    m_sign_in_bk.style.display = "block";
  });

  var close=document.getElementsByClassName("i_closeButton");
  for(let i=0;i<close.length;i++){
    close[i].addEventListener("click",function(){
        if(this.closest('.i_background').style.display === "block"){
            this.closest('.i_background').style.display = "none";
        }
    });
  }

  //====================== m_header_control ==========================//

  let m_control = document.querySelector('#m_header_control'); 

  m_control.addEventListener('click',function(){
    let m_header = document.querySelector('.m_header');
    m_header.classList.toggle('m_toggle');
  });

 });