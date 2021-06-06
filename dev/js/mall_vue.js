Vue.component('the-cart', {
  template: '#cart',
  props: ['counts'], //counts接chooseItem陣列
  data() {
    return {
      cartData: [],
    };
  },
  mounted() {
    // check localStorage;
  },
  methods: {
    plus() {
      this.$emit('to-plus'); //子元件傳值給父元件用$emit(自訂事件)
      console.log('有偵測到功能');
    },
    sub() {
      this.$emit('to-sub');
      console.log('有偵測到功能');
    },
    remove() {
      this.$emit('to-remove');
      console.log('有偵測到刪除功能');
    },
  },
  // computed: {
  //   chooseProduct() {
  //     return this.counts;
  //   },
  // },
});
// localStorage;
// vuex;

let data = {
  options: [
    { val: 0, item: '用品' },
    { val: 1, item: '食品' },
    { val: 2, item: '虛擬試衣間' },
    { val: 3, item: '客製化商品' },
  ],

  info: [],

  food: [
    {
      name: '野菜玉子燒(犬)',
      price: '85',
      src: 'img/mall/野菜玉子燒(犬)85元@2x.png',
    },
    {
      name: '無穀如意棒',
      price: '108',
      src: 'img/mall/無穀如意棒108元@2x.png',
    },
    {
      name: '花之戀SUSHI',
      price: '88',
      src: 'img/mall/花之戀SUSHI88元@2x.png',
    },
    {
      name: '翻滾吧蛋炒飯',
      price: '49',
      src: 'img/mall/翻滾吧蛋炒飯49元@2x.png',
    },
    {
      name: '香甜地瓜雞肉餐',
      price: '85',
      src: 'img/mall/香甜地瓜雞肉餐85元@2x.png',
    },
    {
      name: '雞肉佐南瓜秋葵',
      price: '130',
      src: 'img/mall/雞肉佐南瓜秋葵130元@2x.png',
    },
    {
      name: '清蒸泰鱸魚',
      price: '128',
      src: 'img/mall/清蒸泰鱸魚128元@2x.png',
    },
    {
      name: '古典約克燴肉漢堡',
      price: '95',
      src: 'img/mall/古典約克燴肉漢堡95元@2x.png',
    },
    {
      name: '鮭魚佐低脂雞漢堡',
      price: '95',
      src: 'img/mall/鮭魚佐低脂雞漢堡95元@2x.png',
    },
    { name: '寵物鮮食粽', price: '85', src: 'img/mall/寵物鮮食粽85元@2x.png' },
    {
      name: '芝麻洋芋豬後腿',
      price: '80',
      src: 'img/mall/芝麻洋芋豬後腿80元@2x.png',
    },
    {
      name: '番茄花菜牛肋脊',
      price: '80',
      src: 'img/mall/番茄花菜牛肋脊80元@2x.png',
    },
  ],

  input: {
    text: '',
  },

  selected: 0,
  //selected設初值為0，與用品的val相符
  //預設的值要能跟上面其中一個的value值吻合，否則畫面的下拉選單初始值會是空白的
  //如果預設要是第一個請選擇的話，可以把value值設為空值
  clicked: false,
  chooseItem: [], //被選擇加入的商品
};

new Vue({
  el: '#forCart',
  data: data,
  created() {
    var self = this;
    //對前端頁面資料進行初始化
    axios.post('php/front_end_API/y_select.php').then(function (res) {
      self.info = res.data;
    });
  },
  methods: {
    showInput() {
      if (this.clicked == false) {
        this.clicked = true;
      } else {
        this.clicked = false;
      }
    },
    hideInput() {
      if (this.selected < 2) {
        //如果切頁到非用品頁，input輸入框隱藏，點回用品頁時就會重置
        this.clicked = false;
        this.input.text = ''; //切頁後清空輸入內容，切回時就會讓頁面重置，防止切回輸入結果還在的情況
      }
    },
    increase() {
      console.log(this.info[0].count);
      this.info[0].count++;
    },
    decrease() {
      console.log(this.info[0].count);
      if (this.info[0].count > 0) {
        this.info[0].count--;
      } else {
        return 0;
      }
    },
    addToCart(product1, product2, product3) {
      if (this.chooseItem.indexOf(product1 && product2 && product3) == -1) {
        this.chooseItem.push(product1, product2, product3); //chooseItem['陣列']
        console.log(this.chooseItem);
      }
    },
    removeToCart() {
      let result = $.map(this.chooseItem, function (item) {
        return item.name;
      });
      console.log(result[0]);
      for (let i = 0; i < result.length; i++) {
        if (result[i] === result[i]) {
          console.log('aa');
        }
      }
      // 箭頭函式，尋找陣列chooseItem中符合的元素，並返回其 index值，每個元素都會執行cllback function，如果參數item(陣列元素)也存在於陣列裡，返回它的index值
      // this.chooseItem.splice(index, 1); //刪除該index
    },
    rerender() {
      window._jf.flush(); //手動更新justfont
    },
    open() {
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
    },
  },
  computed: {
    forsup() {
      if (this.input.text) {
        return this.info.filter(
          itemName => itemName.PRODUCT_NAME.indexOf(this.input.text) !== -1,
        );
      } else {
        return this.info;
      }
    },
    forfood() {
      if (this.input.text) {
        return this.food.filter(
          itemName => itemName.PRODUCT_NAME.indexOf(this.input.text) !== -1,
        );
      } else {
        return this.food;
      }
    },
  },
});
