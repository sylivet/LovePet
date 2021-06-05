var shoppingcart = document.getElementById('i_shoppingCart');
shoppingcart.addEventListener('click', function () {
  alert();
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
});
