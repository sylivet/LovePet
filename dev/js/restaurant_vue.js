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
        return a + b.MEAL_PRICE * b.MEAL_COUNT;
      }, 0)
      return result;
    },
    filterCataToPets() {
      return this.foods.filter(food => food.MEAL_CATA === "petsFood")
    },
    filterCataToHuman() {
      return this.foods.filter(food => food.MEAL_CATA === "humanFood")
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

// 客製寵食菜單元件
Vue.component("customPetsFood", {
  props: ['menu'],
  template: "#addToMenu",
  methods: {
    removeItem(fid, menu) {
      this.$emit('removefood', fid, menu)
    }
  },
})

// 加入寵物菜單元件
Vue.component("addToHumanMenu", {
  props: ['menu'],
  template: "#addToMenu",
  methods: {
    removeItem(fid, menu) {
      this.$emit('removefood', fid, menu)
    },
    addCount(){
      this.menu.MEAL_COUNT =parseInt(this.menu.MEAL_COUNT)
      this.menu.MEAL_COUNT++
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
    },
    addCount(){
      this.menu.MEAL_COUNT =parseInt(this.menu.MEAL_COUNT)
      this.menu.MEAL_COUNT++
    }
  },
})

// 狗動畫元件
Vue.component("dog", {
  props: [''],
  template: "#letdogout",
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
    isBookingBoxOpen: false, // 預約燈箱啟閉
    isDogOut:false, // 狗動畫啟閉
    forLightBoxInfo:[], // 食物燈箱資訊
    i:0,
    allFoodMenu:[],
  },
  methods: {
    // 客製寵美食下一步
    choosePetCustomFood(food) {
      if (this.petCustomFoodSelection.indexOf(food) == -1) {
        this.petCustomFoodSelection.push(food);
        switch(food.MEAL_TYPE){
          case "乾糧" :
            this.petCustomFoodSelect = "主食";
            break;
          case "主食":
            this.petCustomFoodSelect = "配菜";
            break;
        }
        if(this.petCustomFoodSelection.length === 6){
          this.petCustomFoodSelect = "請確認菜單"
          setTimeout(()=>{this.isDogOut = true;},500)
          
        }
        // 食物動畫
        let className = food.eng
        this.$nextTick(function(){
          gsap.from(`.${className}`, {
            duration:1, 
            scale:0,
            ease:"back"
          })
        })
      }
    },
    // 客製寵美食回上一步
    undo(){
      switch(this.petCustomFoodSelect){
        case "主食":
          this.petCustomFoodSelect = "乾糧",
          this.petCustomFoodSelection.pop();
          break;
        case "配菜" :
          if(this.petCustomFoodSelection.length>2){
            this.petCustomFoodSelection.pop();
          }else{
            this.petCustomFoodSelect = "主食",
            this.petCustomFoodSelection.pop();
          }
          break;
        case "請確認菜單":
          this.petCustomFoodSelect = "配菜",
          this.petCustomFoodSelection.pop(),
          this.isDogOut = false;
          break;
      }
    },

    // 客製寵美食確認
    confirmCustomFood(){
      this.i+= 1;
      var eachItem=[];
      this.petCustomFoodSelection.forEach(function(item){
        eachItem.push(item.MEAL_NAME)
      });
    
      let customPetFood ={
        MEAL_CATA: "petsFood",
        MEAL_TYPE: "",
        MEAL_NAME: `客製寵美食${this.i}`,
        eachItem: eachItem.join("、"),
        eng:"",
        MEAL_PRICE: this.customTotalPrice,
        MEAL_CAL: "",
        MEAL_IMG: "",
        MEAL_COUNT: 1
      };
      this.allFoodSelection.push(customPetFood)
      this.petCustomFoodSelect = "乾糧";
      this.isDogOut = false;
      this.petCustomFoodSelection = [];
    },
    // 客製寵美食取消
    cancelCustomFood(){
      let yes = confirm("確定取消?")
      if (yes) {
        this.petCustomFoodSelect = "乾糧";
        this.isDogOut = false;
        this.petCustomFoodSelection = []; 
      }
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
      if (menu.MEAL_COUNT > 1) {
        menu.MEAL_COUNT -= 1;
      } else {
        let yes = confirm("確定移除?")
        if (yes) {
          let index = this.allFoodSelection.findIndex(item=>item===menu)
          this.allFoodSelection.splice(index, 1);
        }
      }
    },
    // 打開食物燈箱
    getLightBoxOpen(food){
      this.isLightBoxOpen = true
      this.forLightBoxInfo = this.allFoodMenu.find(item=>item === food)
    },

  },
  computed: {
    //菜單總價
    totalPrice() {
      var result = this.allFoodSelection.reduce((a, b) => {
        return a + b.MEAL_PRICE * b.MEAL_COUNT;
      }, 0)
      return result;
    },

    // 客製寵美食總價
    customTotalPrice() {
      var result = this.petCustomFoodSelection.reduce((a, b)=>{
        return a + b.MEAL_PRICE * b.MEAL_COUNT;
      }, 0)
      return result;
    },
    // 分類鮮食
    filterTypeToFresh() {
      return this.allFoodMenu.filter(food => food.MEAL_TYPE === "鮮食")
    },
    // 分類沙拉
    filterTypeToSalad() {
      return this.allFoodMenu.filter(food => food.MEAL_TYPE === "沙拉")
    },
    // 分類美式
    filterTypeToUS() {
      return this.allFoodMenu.filter(food => food.MEAL_TYPE === "美式")
    },
    // 分類義式
    filterTypeToItaly() {
      return this.allFoodMenu.filter(food => food.MEAL_TYPE === "義式")
    },
    // 分類客製寵食
    filterCataToPetsCustom() {
      return this.allFoodMenu.filter(food =>food.MEAL_CATA === "petsCustom")
    },
    // 分類寵物菜單
    filterMenuToPets() {
      return this.allFoodSelection.filter(food => food.MEAL_CATA === "petsFood")
    },
    // 分類人類菜單
    filterMenuToHuman() {
      return this.allFoodSelection.filter(food => food.MEAL_CATA === "humanFood")
    },
  },
  watch:{
    totalPrice(){
      $(".Price").css({
        opacity:1
      })
      gsap.from(".Price", {
        duration:2, 
        opacity:0,
        ease:"ease"
      })
    }
  },
  created(){
    axios.post("php/front_end_API/select.php").then((res)=>{
      this.allFoodMenu = res.data
    })
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

  }
})


// 下拉選單
$(function () {
  $(".mainmenu").click(function () {
    $(".submenu").toggle();
    $(".fa-angle-up").toggleClass("rotate");
  });

  $(".submenu").click(function () {
    $(this).parent().prev(".mainmenu").val($(this).val());
    $(".submenu").hide();
    $(".fa-angle-up").removeClass("rotate");
  });

  $(".mainmenu").blur(function () {
    $(".fa-angle-up").removeClass("rotate");
    setTimeout(function () {
      $(".submenu").hide();
    }, 100);
  });
});










