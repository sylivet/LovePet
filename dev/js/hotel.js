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



/*----- 720度環景 -----*/
pannellum.viewer = pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "img/hotel/h_panorama.jpg",
  "pitch": -10,
  "hfov": 180,
  compass: true,
  autoLoad: true,
  showControls: false,
  mouseZoom: false,
  draggable: false,
  // "hotSpotDebug": true,
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
// Make buttons work
document.getElementById("pan-up").addEventListener("click", function (e) {
  pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
});
document.getElementById("pan-down").addEventListener("click", function (e) {
  pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
});
document.getElementById("pan-left").addEventListener("click", function (e) {
  pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
});
document.getElementById("pan-right").addEventListener("click", function (e) {
  pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
});
document.getElementById("zoom-in").addEventListener("click", function (e) {
  pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
});
document.getElementById("zoom-out").addEventListener("click", function (e) {
  pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
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
