/* ----- 旅館banner動畫 -----*/




/* ----- 房型選擇跟介紹-----*/
$(function(){
  $('.h_dropdown').click(function(){
      $(this).parent().toggleClass('h_openmenu');
  });  
});

$(function(){
  $('.h_content').click(function(){
      $(this).parent().parent().toggleClass('h_openmenu').find('.h_dropdown').text($(this).text());
  });  
});
// 換字完 格式跑掉
// 選項內的框框要彈回去
// 怎麼切頁





/*----- 旅館Q&A-----*/
$(function(){
  $('.h_show').click(function(){
      $(this).next().slideToggle('slow'); 
      $(this).parent().toggleClass('h_faqopen');
  });  
});

$(function(){
  $('.h_flip').click(function(){
      $(this).next().slideToggle('slow');
      $(this).parent().toggleClass('h_faqopen0');
  });  
});
