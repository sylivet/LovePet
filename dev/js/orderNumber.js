// 餐廳
axios.post("php/back_end_API/R_select_order.php").then((res) => {
  $('.R_Number').text(res.data.length)
  let a = res.data.length
  addNum(a)
});


// 旅館
axios.post("php/back_end_API/H_select_order.php").then((res) => {
  $('.H_orderNumber').text(res.data.length)
  let a=res.data.length
  addNum(a)
});

// 健檢
axios.post("php/back_end_API/C_select_order.php").then((res) => {

  $('.C_orderNumber').text(res.data.length)
  let a=res.data.length
  addNum(a)
});

// 商城
axios.post("php/back_end_API/S_select_order.php").then((res) => {
  $('.M_orderNumber').text(res.data.length)
  let a=res.data.length
  addNum(a)
});

// 所有的訂單數量
let all = 0;
function addNum(a){
  all = all + a;
  $('.ALL_Number').text(all)
};

