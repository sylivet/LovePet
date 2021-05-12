// 預約餐廳元件
Vue.component("booking",{
  props:['foods'],
  template:"#bookingbox",
  methods:{
    closeBox(){
      this.$emit('closelightbox')
    }
  },
  computed:{
    totalPrice(){
      var result = this.foods.reduce(function(a,b){
        return a + b.price*b.count;
      }, 0)
      return result;
    },
    filterCataToPets(){
      return this.foods.filter((food)=>{
        return food.cata === "petsFood"
      })
    },
    filterCataToHuman(){
      return this.foods.filter((food)=>{
        return food.cata === "humanFood"
      })
    },
  }
})

// 燈箱元件
Vue.component("box",{
  props:[''],
  template:"#lightBox",
  methods:{
    closeBox(){
      this.$emit('closelightbox')
    }
  }
})

// 加入菜單元件
Vue.component("addToHumanMenu",{
  props:['menu'],
  template:"#addToMenu",
  methods:{
    removeItem(fid, menu){
      this.$emit('removefood', fid, menu)
    }
  },
})
// 加入菜單元件
Vue.component("addToPetsMenu",{
  props:['menu'],
  template:"#addToMenu",
  methods:{
    removeItem(fid, menu){
      this.$emit('removefood', fid, menu)
    }
  },
})


// 金錢轉千分符
Vue.filter('currency', function(price) {
  return price.toLocaleString('en-US');
});


let vm = new Vue({
  el:"#app",
  data:{
    petCustomFoodSelect:"乾糧", //下拉選單選擇的
    humanFoodSelect:"美式", //下拉選單選擇的
    petFoodSelect:"沙拉", //下拉選單選擇的
    petCustomFoodType:["乾糧","主食","配菜"], // 客製寵食類別
    humanFoodType:["美式","義式"], // 人的食物類別
    petFoodType:["沙拉","鮮食"], // 寵物現有的食物類別
    petCustomFoodSelection:[], // 被加入的客製寵食
    petFoodSelection:[],  // 被加入的現有寵食
    humanFoodSelection:[],  // 被加入的人類食物
    allFoodSelection:[],  // 所有被加入的食物
    isLightBoxOpen:false, // 食物燈箱啟閉
    isBookingBoxOpen:false, // 預約燈箱啟閉
    // 客製寵食總菜單
    petCustomFoodMenu:[
      {
        cata:"pets",
        type:"乾糧",
        name:"基本款餅乾",
        eng:"mainfood",
        price:100,
        cal:"30cal",
        imgURL:"../img/restaurant/mainFood.svg",
        count:1
      },
      {
        cata:"pets",
        type:"乾糧",
        name:"小魚造型餅乾",
        eng:"mainfood2",
        price:210,
        cal:"36cal",
        imgURL:"../img/restaurant/mainFood2.svg",
        count:1
      },
      {
        cata:"pets",
        type:"乾糧",
        name:"骨頭造型餅乾",
        eng:"mainfood3",
        price:210,
        cal:"40cal",
        imgURL:"../img/restaurant/mainFood3.svg",
        count:1
      },
      {
        cata:"pets",
        type:"乾糧",
        name:"圈圈造型餅乾",
        eng:"mainfood4",
        price:160,
        cal:"42cal",
        imgURL:"../img/restaurant/mainFood4.svg",
        count:1
      },
      {
        cata:"pets",
        type:"主食",
        name:"牛肉",
        eng:"meat",
        price:300,
        cal:"210cal",
        imgURL:"../img/restaurant/meat.svg",
        count:1
      },
      {
        cata:"pets",
        type:"主食",
        name:"魚肉",
        eng:"meat2",
        price:280,
        cal:"185cal",
        imgURL:"../img/restaurant/meat2.svg",
        count:1
      },
      {
        cata:"pets",
        type:"主食",
        name:"大明蝦",
        eng:"meat3",
        price:290,
        cal:"190cal",
        imgURL:"../img/restaurant/meat3.svg",
        count:1
      },
      {
        cata:"pets",
        type:"主食",
        name:"大雞腿",
        eng:"meat4",
        price:200,
        cal:"160cal",
        imgURL:"../img/restaurant/meat4.svg",
        count:1
      },
      {
        cata:"pets",
        type:"配菜",
        name:"紅蘿蔔",
        eng:"sidefood1",
        price:20,
        cal:"36cal",
        imgURL:"../img/restaurant/carrot.png",
        count:1
      },
      {
        cata:"pets",
        type:"配菜",
        name:"青菜",
        eng:"sidefood2",
        price:20,
        cal:"31cal",
        imgURL:"../img/restaurant/veg1.png",
        count:1
      },
      {
        cata:"pets",
        type:"配菜",
        name:"放山雞的蛋",
        eng:"sidefood3",
        price:20,
        cal:"33cal",
        imgURL:"../img/restaurant/sliceEgg.svg",
        count:1
      },
      {
        cata:"pets",
        type:"配菜",
        name:"酪梨",
        eng:"sidefood4",
        price:20,
        cal:"62cal",
        imgURL:"../img/restaurant/egg2.png",
        count:1
      },
    ],
    // 推薦毛主人美食總菜單
    humanFoodMenu:[
      {
        cata:"humanFood",
        type:"美式",
        name:"安格斯牛肉漢堡",
        price:100,
        cal:"120cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"美式",
        name:"費城牛肉三明治",
        price:120,
        cal:"300cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"美式",
        name:"炸物拼盤",
        price:500,
        cal:"500cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"美式",
        name:"凱薩沙拉",
        price:80,
        cal:"90cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"美式",
        name:"碳烤豬肋排",
        price:500,
        cal:"260cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"義式",
        name:"番茄義大利麵",
        price:200,
        cal:"220cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"義式",
        name:"羅勒青醬義大利麵",
        price:320,
        cal:"200cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"義式",
        name:"蛤蠣奶油義大利麵",
        price:200,
        cal:"500cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"義式",
        name:"雙層美式臘腸披薩",
        price:300,
        cal:"400cal",
        count:1
      },
      {
        cata:"humanFood",
        type:"義式",
        name:"彩蔬鮮菇披薩",
        price:390,
        cal:"290cal",
        count:1
      },
    ],
    // 推薦毛孩美食總菜單
    petFoodMenu:[
      {
        cata:"petsFood",
        type:"沙拉",
        name:"雞肉沙拉",
        price:200,
        cal:"200cal",
        count:1
      },
      {
        cata:"petsFood",
        type:"沙拉",
        name:"牛肉沙拉",
        price:299,
        cal:"230cal",
        count:1
      },
      {
        cata:"petsFood",
        type:"沙拉",
        name:"嫩煎鮭魚沙拉",
        price:270,
        cal:"220cal",
        count:1
      },
      {
        cata:"petsFood",
        type:"鮮食",
        name:"低敏結實配方",
        price:370,
        cal:"250cal",
        count:1
      },
      {
        cata:"petsFood",
        type:"鮮食",
        name:"關節保養配方",
        price:570,
        cal:"230cal",
        count:1
      },
      {
        cata:"petsFood",
        type:"鮮食",
        name:"毛髮亮麗配方",
        price:170,
        cal:"320cal",
        count:1
      },
      {
        cata:"petsFood",
        type:"鮮食",
        name:"元氣滿滿­­配方",
        price:470,
        cal:"280cal",
        count:1
      },
    ]
  },
  methods: {
    choosePetCustomFood(food){
      if(this.petCustomFoodSelection.indexOf(food) ==-1){
        this.petCustomFoodSelection.push(food);
      }
      if(this.allFoodSelection.indexOf(food) ==-1){
        this.allFoodSelection.push(food);
      }
    },
    chooseHumanFood(food){
      if(this.humanFoodSelection.indexOf(food) ==-1){
        this.humanFoodSelection.push(food);
      }
      if(this.allFoodSelection.indexOf(food) ==-1){
        this.allFoodSelection.push(food);
      }
    },
    choosePetsFood(food){
      if(this.petFoodSelection.indexOf(food) ==-1){
        this.petFoodSelection.push(food);
      }
      if(this.allFoodSelection.indexOf(food) ==-1){
        this.allFoodSelection.push(food);
      }
    },
    // 移除寵物菜單
    remove(fid, menu){
      if(menu.count > 1){
        menu.count-=1;
      }else{
        let yes = confirm("確定移除?")
        if(yes){
          this.petFoodSelection.splice(fid, 1);
          this.allFoodSelection.splice(fid, 1);
        }
      }
    },
    // 移除人類菜單
    remove1(fid, menu){
      if(menu.count > 1){
        menu.count-=1;
      }else{
        let yes = confirm("確定移除?");
        if(yes){
          this.humanFoodSelection.splice(fid, 1);
          this.allFoodSelection.splice(fid, 1);
        }
      }
    }

  },
  computed: {
    humanFoodSelected(){
      return this.humanFoodMenu.filter((item)=>{
        return item.type === this.humanFoodSelect;
      })
    },
    petFoodSelected(){
      return this.petFoodMenu.filter((item)=>{
        return item.type === this.petFoodSelect;
      })
    },
    totalPrice(){
      var result = this.humanFoodSelection.reduce(function(a,b){
        return a + b.price*b.count;
      }, 0)
      return result;
    },
    totalPrice1(){
      var result = this.petFoodSelection.reduce(function(a,b){
        return a + b.price*b.count;
      }, 0)
      return result;
    },
  },
})

// 卷軸
Array.prototype.forEach.call(document.getElementsByClassName('bar'), function (el) {
  new SimpleBar(el);
});


// 月曆
const myCalendar = new TavoCalendar('#my-calendar', {
    date: new Date(),
})







