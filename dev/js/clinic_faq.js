/*----- 健檢中心Q&A-----*/
$(function(){
  $('.c_show').click(function(){
      $(this).next().slideToggle('slow'); 
      $(this).parent().toggleClass('c_faqopen');
  });  
});

$(function(){
  $('.c_flip').click(function(){
      $(this).next().slideToggle('slow');
      $(this).parent().toggleClass('c_faqopen0');
  });  
});
