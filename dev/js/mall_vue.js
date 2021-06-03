Vue.component('the-cart', {
  template: '#cart',
  props: ['counts'],
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
      this.$emit('toplus'); //子元件傳值給父元件用$emit(自訂事件)
      console.log('有偵測到功能');
    },
    sub() {
      if (this.selected > 0) {
        this.selected--;
      } else {
        this.selected == 0;
      }
    },
  },
  computed: {
    chooseProduct() {
      return this.counts;
    },
  },
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

  info: [
    {
      name: '小帳篷',
      price: '81' + `,` + '000',
      src: 'img/mall/tent_4@2x.png',
      link: './s_view.html',
      count: 1,
      sold: 500,
      photo: 'img/mall/tent_1@2x.png',
    },
    {
      name: '安全座椅',
      price: '1' + `,` + '200',
      src: 'img/mall/seat1950元-2@2x.png',
      link: '',
    },
    {
      name: '成長碗架',
      price: '279',
      src: 'img/mall/成長碗架279元@2x.png',
      link: '',
    },
    {
      name: '吸水墊',
      price: '699',
      src: 'img/mall/吸水墊699元@2x.png',
      link: '',
    },
    {
      name: '奧利反光寵物胸背帶',
      price: '699',
      src: 'img/mall/奧利反光寵物胸背帶699元@2x.png',
      link: '',
    },
    {
      name: '波浪斜坡寵物樓梯',
      price: '1' + `,` + '590',
      src: 'img/mall/波浪斜坡寵物樓梯1590元@2x.png',
      link: '',
    },
    {
      name: '糰子貓宅',
      price: '2' + `,` + '490',
      src: 'img/mall/糰子貓宅2490元@2x.png',
      link: '',
    },
    {
      name: '寵物碗架組',
      price: '2' + `,` + '250',
      src: 'img/mall/寵物碗架組2250元@2x.png',
      link: '',
    },
    {
      name: '貓抓柱',
      price: '1' + `,` + '690',
      src: 'img/mall/貓抓柱1690元@2x.png',
      link: '',
    },
    {
      name: '鯊魚造型貓窩',
      price: '479',
      src: 'img/mall/鯊魚造型貓窩NT479@2x.png',
      link: '',
    },
    {
      name: '黑六角椅墊組',
      price: '3' + `,` + '350',
      src: 'img/mall/黑六角椅墊組3350元@2x.png',
      link: '',
    },
    {
      name: '太空艙',
      price: '500' + `,` + '000',
      src: 'img/mall/4@2x.png',
      link: '',
    },
  ],

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
  el: '#formall',
  data: data,
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
    addToCart(product) {
      if (this.chooseItem.indexOf(product) == -1) {
        this.chooseItem.push(product); //chooseItem['小帳篷']
      }
    },
  },
  computed: {
    forsup() {
      if (this.input.text) {
        return this.info.filter(
          itemName => itemName.name.indexOf(this.input.text) !== -1,
        );
      } else {
        return this.info;
      }
    },
    forfood() {
      if (this.input.text) {
        return this.food.filter(
          itemName => itemName.name.indexOf(this.input.text) !== -1,
        );
      } else {
        return this.food;
      }
    },
  },
});
