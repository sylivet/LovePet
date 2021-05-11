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
