/* ----- 旅館banner動畫 -----*/




/* ----- 房型選擇跟介紹-----*/
$(function(){
  $('.h_dropdown').click(function(){
      $(this).parent().toggleClass('-open');
  });  
});

/*----- 旅館Q&A-----*/
$(function(){
  $('.h_show').click(function(){
      $(this).next().slideToggle('slow'); 
      $(this).find('.h_click1').toggleClass('h_rotate1');
  });  
});

$(function(){
  $('.h_flip').click(function(){
      $(this).next().slideToggle('slow');
      $(this).find('.h_click').toggleClass('h_rotate');
  });  
});
