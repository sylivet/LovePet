/* ----- 旅館banner動畫 -----*/




/* ----- 房型選擇跟介紹 -----*/
$(function(){
  $('.h_navbar').click(function(){
      $(this).parent().toggleClass('h_openmenu');
      if($('.h_title').text()!=="請選擇房型"){
        $('.h_title').text("請選擇房型")
    }
  });  
});

$(function(){
  $('.h_content').click(function(){
      $(this).parent().parent().toggleClass('h_openmenu').find('.h_title').text($(this).text());
  });
});

$(function(){
  $('.h_last_content').click(function(){
      $(this).parent().parent().toggleClass('h_openmenu').find('.h_title').text($(this).text());
  });
});

/*----- 旅館Q&A -----*/
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