/*----- 健檢中心Q&A-----*/
$(function(){
  $('.c_show').click(function(){
      $(this).next().slideToggle('slow'); 
      $(this).find('.c_click1').toggleClass('c_rotate1');
  });  
});

$(function(){
  $('.c_flip').click(function(){
      $(this).next().slideToggle('slow');
      $(this).find('.c_click').toggleClass('c_rotate');
  });  
});
