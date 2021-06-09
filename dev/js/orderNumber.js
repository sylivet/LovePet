// 餐廳
axios.post("php/back_end_API/R_select_order.php").then((res) => {
  let unFinished = res.data.filter((item)=>{ return item.ORDER_STATUS === '0'})
  let a = unFinished.length
  $('.R_Number').text(a)
  addNum(a)
});


// 旅館
axios.post("php/back_end_API/H_select_order.php").then((res) => {
  let unFinished = res.data.filter((item)=>{ return item.ORDER_STATUS === '0'})
  let a=unFinished.length
  $('.H_orderNumber').text(a)
  addNum(a)
});

// 健檢
axios.post("php/back_end_API/C_select_order.php").then((res) => {

  let unFinished = res.data.filter((item)=>{ return item.ORDER_STATUS === '0'})
  let a=unFinished.length
  $('.C_orderNumber').text(a)
  addNum(a)
});

// 商城
axios.post("php/back_end_API/S_select_order.php").then((res) => {
  let unFinished = res.data.filter((item)=>{ return item.ORDER_STATUS === '0'})
  let a=unFinished.length
  $('.M_orderNumber').text(a)
  addNum(a)
});

// 商城留言
axios.post("php/back_end_API/SM_select.php").then((res) => {
  let unFinished = res.data.filter((item)=>{ return item.OFFICAL_FEEDBACK === ''})
  let a=unFinished.length
  $('.SM_orderNumber').text(a)
});

// 所有的訂單數量
let all = 0;
function addNum(a){
  all = all + a;
  $('.ALL_Number').text(all)
};

