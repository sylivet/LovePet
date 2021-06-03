/* ----- 旅館banner動畫 -----*/


$(function () {
  /* ----- 房型選擇跟介紹 -----*/
  $('.h_navbar').click(function () {
    $(this).parent().toggleClass('h_openmenu');
    if ($('.h_title').text() !== "請選擇房型") {
      $('.h_title').text("請選擇房型")
    }
  });

  $('.h_content').click(function () {
    $(this).parent().parent().toggleClass('h_openmenu').find('.h_title').text($(this).text());
  });

  //blur事件未寫
  // $('body').click(function () {
  //   $(".h_content").parent().parent().removeClass("h_openmenu");
  // });
  
  /*----- 旅館Q&A -----*/
    $('.h_show').click(function () {
      $(this).next().slideToggle('slow');
      $(this).parent().toggleClass('h_faqopen');
    });
    $('.h_flip').click(function () {
      $(this).next().slideToggle('slow');
      $(this).parent().toggleClass('h_faqopen0');
    });

});




