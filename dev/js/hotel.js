/* ----- 旅館banner動畫 -----*/




/* ----- 房型選擇跟介紹 -----*/
$(function(){
  $('.h_navbar').click(function(){
      $(this).parent().toggleClass('h_openmenu');
  });  
});

$(function(){
  $('.h_content').click(function(){
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




/*----- 720度環景 -----*/
pannellum.viewer = pannellum.viewer("h_panorama", {
  type: "equirectangular",
  panorama: "img/hotel/h_panorama.jpg",
  // 調整初始畫面位置
  "pitch": -10,
  "hfov": 180,
  
  // 自動旋轉
  "autoRotate": -2,
  // 要加這個自動旋轉屬性嗎XD

  // 指南針
  compass: true,
  // 自動加載
  autoLoad: true,
  // 按鈕調整畫面
  showControls: false, 
  // 寵物用品位置熱點
  "hotSpots": [
      {
          "pitch": -8.5,
          "yaw": 8.7,
          "type": "info",
          "text": "貓抓柱",
      },
      {
          "pitch": -20,
          "yaw": 46,
          "type": "info",
          "text": "寵物窩墊"
      }
  ]
});

// Make buttons work (按鈕調整移動畫面)
document.getElementById("h_arrow_up").addEventListener("click", function (e) {
  pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
});
document.getElementById("h_arrow_down").addEventListener("click", function (e) {
  pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
});
document.getElementById("h_arrow_left").addEventListener("click", function (e) {
  pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
});
document.getElementById("h_arrow_right").addEventListener("click", function (e) {
  pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
});
document.getElementById("h_enlarge").addEventListener("click", function (e) {
  pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
});
document.getElementById("h_narrow").addEventListener("click", function (e) {
  pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
});
