// 設定LaclStorage，放在變數中以後若要改SessionStorage
const storage = localStorage;

Vue.component('the-cart', {
  template: '#cart',
  props: ['counts'], //counts接chooseItem陣列
  data() {
    return {};
  },
  // mounted() {
  //   let items = JSON.parse(localStorage.getItem('items'));
  // },
  methods: {
    plus(index) {
      this.$emit('to-plus', index); //子元件傳值給父元件用$emit(自訂事件)
      // this.counts[index].count++;
      console.log('有偵測到功能');
    },
    sub(index) {
      this.$emit('to-sub', index);
      console.log('有偵測到功能');
    },
    remove() {
      this.$emit('to-remove');
      console.log('有偵測到刪除功能');
    },
  },
  computed: {
    currentPrice() {
      // for (let i = 0; i < this.counts.length; i++) {
      //   return this.counts[i].count * this.counts[i].PRODUCT_PRICE;
      // }
    },
    getName() {
      // console.log(this.counts);
      // for (let i = 0; i < this.counts.length; i++) {
      //   console.log(JSON.parse(storage.getItem('items'))[i].name);
      // }
      // JSON.parse() 方法把會把一個JSON字串轉換成 JavaScript的數值或是物件
    },
    getPrice() {
      // return JSON.parse(storage.getItem('item_0')).PRODUCT_PRICE;
    },
    getIMG() {
      // return JSON.parse(storage.getItem('item_0')).PRODUCT_IMG;
    },
    getCount() {
      // return JSON.parse(storage.getItem('item_0')).count;
      return 1;
    },
    getTotalPrice() {
      return 100;
    },
  },
});

let data = {
  options: [
    { val: 0, item: '用品' },
    { val: 1, item: '食品' },
    { val: 2, item: '虛擬試衣間' },
    { val: 3, item: '客製化商品' },
  ],

  info: [],

  food: [],

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
    axios.post('php/front_end_API/sup_select.php').then(function (res) {
      self.info = res.data;
    });
    axios.post('php/front_end_API/food_select.php').then(function (res) {
      self.food = res.data;
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
    increase(i) {
      this.chooseItem[i].count++;
      storage.setItem(`item_0`);
      // console.log(this.info);
    },
    decrease(i) {
      if (this.chooseItem[i].count > 0) {
        this.chooseItem[i].count--;
      } else {
        return 0;
      }
    },
    addToCart(product) {
      // 只要一按加到購物車就存到localStorage

      let cart = {
        item_id: product.PRODUCT_ID,
        item_img: product.PRODUCT_IMG,
        item_name: product.PRODUCT_NAME,
        item_count: product.count,
      };
      // 設定localStorage的value要放的資料

      let value = JSON.parse(localStorage.getItem('items'));
      // getItem() 方法中輸入key可以得到對應的value，並轉換成JS物件型態
      if (value) {
        // 如果items裡有value，cart物件被加到陣列的最後
        value.push(cart);
      } else {
        // 若items裡尚未有value，value就是cart，並以陣列包住
        value = [cart];
      }
      storage.setItem('items', JSON.stringify(value));
      // 加到localStorage，key為items，value為字串化後的items

      if (this.chooseItem.indexOf(product) == -1) {
        this.chooseItem.push(product); //chooseItem['陣列']
      }
    },
    removeToCart() {
      let check_delete = confirm('是否移除?');
      if (check_delete) {
        for (let i = 1; i < localStorage.length; i++) {
          if (JSON.stringify(localStorage.key(i)) == `item_1`) {
            console.log(`item_${this.i}`);
          }
          // 箭頭函式，尋找陣列chooseItem中符合的元素，並返回其 index值，每個元素都會執行cllback function，如果參數item(陣列元素)也存在於陣列裡，返回它的index值
          // this.chooseItem.splice(index, 1); //刪除該index
        }
      }
    },
    reRender() {
      window._jf.flush(); //手動更新justfont
    },
    openCart() {
      console.log('from_vue');
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
    // 關鍵字搜尋功能
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
