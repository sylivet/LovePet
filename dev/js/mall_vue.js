// 設定LaclStorage，放在變數中以後若要改SessionStorage
const storage = localStorage;

Vue.component('the-cart', {
  template: '#cart',
  props: ['counts'], //counts接chooseItem陣列
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
    remove(index) {
      this.$emit('to-remove', index);
      console.log('有偵測到刪除功能');
    },
    // getCount(index) {
    //   this.$emit('show-count', index);
    // },
  },
  computed: {
    currentPrice() {
      // for (let i = 0; i < this.counts.length; i++) {
      //   return this.counts[i].count * this.counts[i].PRODUCT_PRICE;
      // }
    },
    // getCount() {
    //   let count = JSON.parse(storage.getItem('items'));
    //   console.log(count);
    //   return count.item_count;
    // },
    getPrice() {
      // return JSON.parse(storage.getItem('item_0')).PRODUCT_PRICE;
    },
    getIMG() {
      // return JSON.parse(storage.getItem('item_0')).PRODUCT_IMG;
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
  page: 0,
  currentPage: [],
};

new Vue({
  el: '#forCart',
  data: data,
  created() {
    var self = this;
    //對前端頁面資料進行初始化
    axios.post('php/front_end_API/sup_select.php').then(function (res) {
      self.info = res.data;
      self.currentPage.push(
        self.info[parseInt(location.href.split('#')[1]) - 1],
      ); //動態新增會有問題 index對不上
    });
    // console.log(this.currentPage);
    axios.post('php/front_end_API/food_select.php').then(function (res) {
      self.food = res.data;
    });
  },
  mounted() {},
  methods: {
    //======開啟搜尋輸入框======
    showInput() {
      if (this.clicked == false) {
        this.clicked = true;
      } else {
        this.clicked = false;
      }
    },

    //======隱藏搜尋輸入框======
    hideInput() {
      if (this.selected < 2) {
        //如果切頁到非用品頁，input輸入框隱藏，點回用品頁時就會重置
        this.clicked = false;
        this.input.text = ''; //切頁後清空輸入內容，切回時就會讓頁面重置，防止切回輸入結果還在的情況
      }
    },

    //======購物車商品數量增加======
    increase(pointer) {
      let counts = JSON.parse(localStorage.getItem('items'));
      for (let i in counts) {
        if (counts[pointer].item_id == this.chooseItem[i].item_id) {
          counts[pointer].item_count = parseInt(counts[pointer].item_count) + 1;
        }
      }
      storage.setItem('items', JSON.stringify(counts));
    },

    //======購物車商品數量減少======
    decrease(pointer) {
      let counts = JSON.parse(localStorage.getItem('items'));
      for (let i in counts) {
        if (
          counts[pointer].item_id == this.chooseItem[i].item_id &&
          counts[pointer].item_count > 1
          //商品數量大於1才能減，直到最小為1
        ) {
          counts[pointer].item_count = parseInt(counts[pointer].item_count) - 1;
        }
      }
      storage.setItem('items', JSON.stringify(counts));
    },

    //======商品加到購物車======
    addToCart(product) {
      alert('成功加入購物車');
      // 只要一按加到購物車就存到localStorage

      let cart = {
        item_id: product.PRODUCT_ID,
        item_img: product.PRODUCT_IMG,
        item_name: product.PRODUCT_NAME,
        item_count: product.count,
        item_price: product.PRODUCT_PRICE,
      };
      // 設定localStorage的value要放的資料

      let value = JSON.parse(localStorage.getItem('items'));
      // getItem() 方法中輸入key可以得到對應的value，並轉換成JS物件型態

      if (value) {
        let repeat = false; //設定repeat變數為false，當開關
        for (let i in value) {
          if (value[i].item_id == cart.item_id) {
            value[i].item_count = parseInt(value[i].item_count) + 1;
            repeat = true;
            //如果value的item_id等於cart的item_id，數量直接+1，並且repeat此時變更為true
          }
        }
        if (!repeat) {
          value.push(cart);
        }
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

    //======商品從購物車移除======
    removeToCart(pointer) {
      let check_delete = confirm('是否移除?');
      if (check_delete) {
        let counts = JSON.parse(localStorage.getItem('items'));
        for (let i in counts) {
          if (counts[i].item_id == this.chooseItem[pointer].item_id) {
            //相互比對ID
            counts.splice(i, 1); //localStorage刪除
            this.chooseItem.splice(pointer, 1); //畫面刪除
          }
        }
        storage.setItem('items', JSON.stringify(counts));
      }
    },

    //======字型渲染======
    reRender() {
      window._jf.flush(); //手動更新justfont
    },

    //======開啟購物車======
    openCart() {
      this.chooseItem = JSON.parse(localStorage.getItem('items'));
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
    into(pointer) {
      this.currentPage.push(this.info[pointer]);
      console.log(this.info[this.page]);
    },
  },
  computed: {
    //======關鍵字搜尋功能======
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
