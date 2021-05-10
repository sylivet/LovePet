$(function(){
  $(".c_flip").click(function(){
      $(this).next().slideToggle("slow");
  });
});
// 改成點擊三角形才打開  