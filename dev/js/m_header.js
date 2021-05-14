
document.addEventListener("DOMContentLoaded", function(){

  var m_control = document.querySelector('#m_header_control'); 

  m_control.addEventListener('click',function(){
    let m_header = document.querySelector('.m_header');
    m_header.classList.toggle('m_toggle');
  });

 });