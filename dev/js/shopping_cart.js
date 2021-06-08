var shoppingcart = document.getElementById('i_shoppingCart');
var a1 = function () {
  console.log('from_js');
  var shoppingcartbk = document.getElementById('i_shoppingCart_bk');
  if (shoppingcartbk.style.display === 'none') {
    shoppingcartbk.style.display = 'block';
  }

  var close = document.getElementsByClassName('i_closeButton');
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
      if (this.closest('.i_background').style.display === 'block') {
        this.closest('.i_background').style.display = 'none';
      }
    });
  }
};

shoppingcart.addEventListener('click', a1, false);
