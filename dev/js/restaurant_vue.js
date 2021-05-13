// 預約餐廳元件
Vue.component("booking", {
  props: ['foods'],
  template: "#bookingbox",
  methods: {
    closeBox() {
      this.$emit('closelightbox')
    }
  },
  computed: {
    totalPrice() {
      var result = this.foods.reduce(function (a, b) {
        return a + b.price * b.count;
      }, 0)
      return result;
    },
    filterCataToPets() {
      return this.foods.filter((food) => {
        return food.cata === "petsFood"
      })
    },
    filterCataToHuman() {
      return this.foods.filter((food) => {
        return food.cata === "humanFood"
      })
    },
  }
})

// 燈箱元件
Vue.component("box", {
  props: ['food'],
  template: "#lightBox",
  methods: {
    closeBox() {
      this.$emit('closelightbox')
    },
    getFood(food){
      this.$emit('getfood', food)
    }
  }
})

// 加入寵物菜單元件
Vue.component("addToHumanMenu", {
  props: ['menu'],
  template: "#addToMenu",
  methods: {
    removeItem(fid, menu) {
      this.$emit('removefood', fid, menu)
    }
  },
})
// 加入人類菜單元件
Vue.component("addToPetsMenu", {
  props: ['menu'],
  template: "#addToMenu",
  methods: {
    removeItem(fid, menu) {
      this.$emit('removefood', fid, menu)
    }
  },
})


// 金錢轉千分符
Vue.filter('currency', function (price) {
  return price.toLocaleString('en-US');
});


let vm = new Vue({
  el: "#app",
  data: {
    petCustomFoodSelect: "乾糧", //客製寵美食目前位置
    humanFoodSelect: "美式", //下拉選單選擇的
    petFoodSelect: "沙拉", //下拉選單選擇的
    humanFoodType: ["美式", "義式"], // 人的食物類別
    petFoodType: ["沙拉", "鮮食"], // 寵物現有的食物類別
    petCustomFoodSelection: [], // 被加入的客製寵食
    allFoodSelection: [],  // 所有被加入的食物
    isLightBoxOpen: false, // 食物燈箱啟閉
    forLightBoxInfo:[],
    isBookingBoxOpen: false, // 預約燈箱啟閉
    allFoodMenu:[
      {
        cata: "petsCustom",
        type: "乾糧",
        name: "基本款餅乾",
        eng: "mainfood",
        price: 100,
        cal: "30cal",
        imgURL: "../img/restaurant/mainFood.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "乾糧",
        name: "小魚造型餅乾",
        eng: "mainfood2",
        price: 210,
        cal: "36cal",
        imgURL: "../img/restaurant/mainFood2.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "乾糧",
        name: "骨頭造型餅乾",
        eng: "mainfood3",
        price: 210,
        cal: "40cal",
        imgURL: "../img/restaurant/mainFood3.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "乾糧",
        name: "圈圈造型餅乾",
        eng: "mainfood4",
        price: 160,
        cal: "42cal",
        imgURL: "../img/restaurant/mainFood4.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "主食",
        name: "牛肉",
        eng: "meat",
        price: 300,
        cal: "210cal",
        imgURL: "../img/restaurant/meat.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "主食",
        name: "魚肉",
        eng: "meat2",
        price: 280,
        cal: "185cal",
        imgURL: "../img/restaurant/meat2.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "主食",
        name: "大明蝦",
        eng: "meat3",
        price: 290,
        cal: "190cal",
        imgURL: "../img/restaurant/meat3.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "主食",
        name: "大雞腿",
        eng: "meat4",
        price: 200,
        cal: "160cal",
        imgURL: "../img/restaurant/meat4.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "配菜",
        name: "紅蘿蔔",
        eng: "sidefood1",
        price: 20,
        cal: "36cal",
        imgURL: "../img/restaurant/carrot.png",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "配菜",
        name: "青菜",
        eng: "sidefood2",
        price: 20,
        cal: "31cal",
        imgURL: "../img/restaurant/veg1.png",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "配菜",
        name: "放山雞的蛋",
        eng: "sidefood3",
        price: 20,
        cal: "33cal",
        imgURL: "../img/restaurant/sliceEgg.svg",
        count: 1
      },
      {
        cata: "petsCustom",
        type: "配菜",
        name: "酪梨",
        eng: "sidefood4",
        price: 20,
        cal: "62cal",
        imgURL: "../img/restaurant/egg2.png",
        count: 1
      },
      {
        cata: "humanFood",
        type: "美式",
        name: "安格斯牛肉漢堡",
        price: 100,
        cal: "120cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "美式",
        name: "費城牛肉三明治",
        price: 120,
        cal: "300cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "美式",
        name: "炸物拼盤",
        price: 500,
        cal: "500cal",
      imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "美式",
        name: "凱薩沙拉",
        price: 80,
        cal: "90cal",
      imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "美式",
        name: "碳烤豬肋排",
        price: 500,
        cal: "260cal",
      imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "義式",
        name: "番茄義大利麵",
        price: 200,
        cal: "220cal",
      imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "義式",
        name: "羅勒青醬義大利麵",
        price: 320,
        cal: "200cal",
      imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "義式",
        name: "蛤蠣奶油義大利麵",
        price: 200,
        cal: "500cal",
      imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "義式",
        name: "雙層美式臘腸披薩",
        price: 300,
        cal: "400cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "humanFood",
        type: "義式",
        name: "彩蔬鮮菇披薩",
        price: 390,
        cal: "290cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"選用頂級厚實的安格斯牛肉，搭配濃郁的起士醬，讓牛番茄和生菜穿梭其中，增加其層次感，配上鬆軟的漢堡麵包，每一口都是鮮甜多汁的享受。"
      },
      {
        cata: "petsFood",
        type: "沙拉",
        name: "雞肉沙拉",
        price: 200,
        cal: "200cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"這裡要想文案"
      },
      {
        cata: "petsFood",
        type: "沙拉",
        name: "牛肉沙拉",
        price: 299,
        cal: "230cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"這裡要想文案"
      },
      {
        cata: "petsFood",
        type: "沙拉",
        name: "嫩煎鮭魚沙拉",
        price: 270,
        cal: "220cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"這裡要想文案"
      },
      {
        cata: "petsFood",
        type: "鮮食",
        name: "低敏結實配方",
        price: 370,
        cal: "250cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"這裡要想文案"
      },
      {
        cata: "petsFood",
        type: "鮮食",
        name: "關節保養配方",
        price: 570,
        cal: "230cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"這裡要想文案"
      },
      {
        cata: "petsFood",
        type: "鮮食",
        name: "毛髮亮麗配方",
        price: 170,
        cal: "320cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"這裡要想文案"
      },
      {
        cata: "petsFood",
        type: "鮮食",
        name: "元氣滿滿­­配方",
        price: 470,
        cal: "280cal",
        imgURL:"../img/common/hamburger.png",
        count: 1,
        msg:"這裡要想文案"
      },
    ],
  },
  methods: {
    choosePetCustomFood(food) {
      console.log(food.type);
      if (this.petCustomFoodSelection.indexOf(food) == -1) {
        this.petCustomFoodSelection.push(food);
        switch(food.type){
          case "乾糧" :
            return this.petCustomFoodSelect = "主食";
          case "主食":
            return this.petCustomFoodSelect = "配菜";
        }
      }
      // if (this.allFoodSelection.indexOf(food) == -1) {
      //   this.allFoodSelection.push(food);
      // }
    },

    // 加入菜單
    chooseFood(food) {
      if (this.allFoodSelection.indexOf(food) == -1) {
        this.allFoodSelection.push(food);
      }
      this.isLightBoxOpen = false
    },
    // 移除菜單
    remove(fid, menu) {
      if (menu.count > 1) {
        menu.count -= 1;
      } else {
        let yes = confirm("確定移除?")
        if (yes) {
          this.allFoodSelection.splice(fid, 1);
        }
      }
    },
    getLightBoxOpen(food){
      this.isLightBoxOpen = true
      this.forLightBoxInfo = this.allFoodMenu.find((item)=>{
        return item === food
      })
    }
  },
  computed: {
    //菜單總價
    totalPrice() {
      var result = this.allFoodSelection.reduce(function (a, b) {
        return a + b.price * b.count;
      }, 0)
      return result;
    },
    // 分類鮮食
    filterTypeToFresh() {
      return this.allFoodMenu.filter((food) => {
        return food.type === "鮮食"
      })
    },
    // 分類沙拉
    filterTypeToSalad() {
      return this.allFoodMenu.filter((food) => {
        return food.type === "沙拉"
      })
    },
    // 分類美式
    filterTypeToUS() {
      return this.allFoodMenu.filter((food) => {
        return food.type === "美式"
      })
    },
    // 分類義式
    filterTypeToItaly() {
      return this.allFoodMenu.filter((food) => {
        return food.type === "義式"
      })
    },
    // 分類客製寵食
    filterCataToPetsCustom() {
      return this.allFoodMenu.filter((food) => {
        return food.cata === "petsCustom"
      })
    },
    filterMenuToPets() {
      return this.allFoodSelection.filter((food) => {
        return food.cata === "petsFood"
      })
    },
    filterMenuToHuman() {
      return this.allFoodSelection.filter((food) => {
        return food.cata === "humanFood"
      })
    },
  },
  mounted() {
    // 卷軸
    Array.prototype.forEach.call(document.getElementsByClassName('bar'), function (el) {
      new SimpleBar(el);
    });
    // 月曆
    const myCalendar = new TavoCalendar('#my-calendar', {
      date: new Date(),
    })
  },
})









