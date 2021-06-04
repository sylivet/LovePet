// 預約餐廳元件
Vue.component("booking", {
  props: ['foods', 'member'],
  template: "#bookingbox",
  data(){
    return {
        FK_MEMBER_ID: null,
        CREATE_DATE:"",
        BOOKING_DATE:"",
        numberOfAdults:"0",
        numberOfKids:"0",
        numberOfDogs:"0",
        numberOfCats:"0",
        // 篩掉客製寵美食的菜單
        food: [],
        // 只存客製寵美食的菜單
        petsFood:[]
    }
  },
  methods: {
    closeBox() {
      this.$emit('closelightbox')
    },
    booking(){
      if(!this.BOOKING_DATE){
        alert('請選預定日期')
      }else{
        if(this.numberOfAdults === "0"){
          alert('請選人數')
        }else{
          $.ajax({            
            method: "POST",
            url: "php/front_end_API/R_Insert_booking.php",
            data:{
              'FK_MEMBER_ID': this.FK_MEMBER_ID,
              'CREATE_DATE': this.CREATE_DATE,
              'BOOKING_DATE': this.BOOKING_DATE,
              'numberOfAdults': this.numberOfAdults,
              'numberOfKids': this.numberOfKids,
              'numberOfDogs': this.numberOfDogs,
              'numberOfCats': this.numberOfCats,
              // 篩掉客製寵美食的菜單
              'food': this.food.length ===0? null: this.food
              // 只存客製寵美食的菜單
            },            
            dataType: "text",
            success: (res)=> {
              console.log(res);
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            }
        });
        }
      }
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
    }
  },
  mounted(){
    // 月曆
    const calendar_el = document.querySelector('.i_calendar');

    const my_calendar = new TavoCalendar(calendar_el)
  
    calendar_el.addEventListener('calendar-select', (ev) => {
      this.BOOKING_DATE = my_calendar.getSelected()
    });

    // 訂單創建日期
    let t = new Date()
    let y = t.getFullYear()
    let M = t.getMonth() + 1
    let d = t.getDate()
    let h = t.getHours()
    let m = t.getMinutes()
    let s = t.getSeconds()
    return this.CREATE_DATE = `${y}-${M}-${d} ${h}:${m}:${s}`
  },
  watch:{
    foods(){
      // 篩掉客製寵美食的菜單
      let noPetsCustom = this.foods.filter(food => food.MEAL_TYPE !== "petsCustom")
      this.food = [];
      this.food = noPetsCustom
    },
    member(){
      this.FK_MEMBER_ID = this.member
    }
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
    },
    addCount(){
      // 勿刪
    }
  },
})

// 加入人類菜單元件
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
// 加入寵物菜單元件
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
    memberID: null,
    i:0,
    allFoodMenu:[],
    forPHP:[]
  },
  methods: {
    loginCheck(){
      $.ajax({            
        method: "POST",
        url: "php/front_end_API/M_getsession_MID.php",
        data:{},            
        dataType: "text",
        success: (response)=> {
          if(response === '"N"'){
                alert('請先登入會員'); 
                $('#m_sign_in_bk').show()
              }else{
                this.isBookingBoxOpen = true
                this.memberID = parseInt(response.split(`"`).join(""))
                sessionStorage.clear()
            }              
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
    },

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
          alert('已取消')
          break;
        case "配菜" :
          if(this.petCustomFoodSelection.length>2){
            this.petCustomFoodSelection.pop();
            alert('已取消')
          }else{
            this.petCustomFoodSelect = "主食",
            this.petCustomFoodSelection.pop();
            alert('已取消')
          }
          break;
        case "請確認菜單":
          this.petCustomFoodSelect = "配菜",
          this.petCustomFoodSelection.pop(),
          alert('已取消')
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
        MEAL_TYPE: "petsCustom",
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
      this.forPHP = this.petCustomFoodSelection;
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
      // 因為localstorage 傳參改變，改判斷MEAL_NAME
      let check = this.allFoodSelection.some((item)=>{
        return item.MEAL_NAME === food.MEAL_NAME
      })

      if(!check){
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
    font(){
      window._jf.flush()
    }
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
      if($(".Price").length>0){
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
    allFoodSelection: {
      handler() {
        let value = JSON.stringify(this.allFoodSelection);
        sessionStorage.setItem('foods', value);
      },
      deep: true
    }
  },
  mounted() {
    axios.post("php/front_end_API/R_select.php").then((res)=>{
      this.allFoodMenu = res.data
    });

    // 取localStorage
    let value = JSON.parse(sessionStorage.getItem('foods'))
    if(value){
      this.allFoodSelection = value
    };

    // 卷軸
    Array.prototype.forEach.call(document.getElementsByClassName('bar'), function (el) {
      new SimpleBar(el);
    });

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
    }, 200);
  });
  
  // 關閉登入會員燈箱
  $('.i_closeButton').click(()=>$('#m_sign_in_bk').hide())
});











