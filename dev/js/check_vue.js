//預約健檢元件
Vue.component("clinic-booking", {
  props: ['menuselect', 'custom', 'member'],
  template: "#clinicBox",
  data(){
      return {
        BOOKING_DATE:"",
        CREATE_DATE:"",
        takeHEALTH_CHECK_ID:"",
        petsID:"",
        memberID:this.member,
        customed: this.custom,
        select: null,
        petsInfo:null,
      }
    },
  methods: {
      closeBox() {
          this.$emit('closelightbox')
      },
      booking() {
        let t = new Date()
        let y = t.getFullYear()
        let M = t.getMonth() + 1
        let d = t.getDate()
        let h = t.getHours()
        let m = t.getMinutes()
        let s = t.getSeconds()
        this.CREATE_DATE = `${y}-${M}-${d} ${h}:${m}:${s}`


        if(!this.BOOKING_DATE){
          alert('請選預定日期')
        }else{
          if(this.i_petsname === ""){
            alert('請選寵物')
          }else{
            $.ajax({            
              method: "POST",
              url: "php/front_end_API/C_Insert_booking.php",
              data:{
                'FK_MEMBER_ID': this.memberID,
                'FK_PET_ID': this.petsID,
                'CREATE_DATE': this.CREATE_DATE,
                'BOOKING_DATE': this.BOOKING_DATE,
                'FK_SET_MENU_ID': this.MenuID,
                'FK_HELTH_CHECK_ID': this.addMenuID,
                'FK_HELTH_CHECK_ID2': this.addMenuID1,
                'TOTAL_PRICE': this.totalPrice1 + this.totalPrice2,
              },            
              dataType: "text",
              success: (res)=> {
                this.$emit('closelightbox')
                console.log(res);
              },
              error: function(exception) {
                  alert("數據載入失敗: " + exception.status);
              }
          });
          }
        }

      },
  },
  computed:{
    priceFilter(){
      if(this.customed.length<2){
        return this.customed
      }else{
        let newCustomed = this.customed.map((item)=>{
          return (
            {
              'HEALTH_CHECK_ID':item.HEALTH_CHECK_ID,
              'LISTNAME':item.LISTNAME,
              'PRICE':item.PRICE*0.9,
              'TESTING_SUBJECT':item.TESTING_SUBJECT
            }
          )
        });
        return newCustomed
      }
    },
    totalPrice1() {
      if(this.select){
        var result = this.select.reduce((a, b) => {
          return a + parseInt(b.PRICE);
        }, 0)
        return result;
      }else{
        return 0
      }
    },
    totalPrice2() {
      if(this.customed.length>=2){
        var result = this.customed.reduce((a, b) => {
          return a + parseInt(b.PRICE)*0.9;
        }, 0)
        return result;
      }else if(this.customed.length==1){
        return parseInt(this.customed[0].PRICE)
      }else{
        return 0
      };
    },
    MenuID(){
      if(this.takeHEALTH_CHECK_ID == 8){
        return 1
      }else if(this.takeHEALTH_CHECK_ID == 16){
        return 2
      }else if(this.takeHEALTH_CHECK_ID == 24){
        return 3
      }else{
        return 0
      }
    },
    addMenuID(){
      if(this.customed.length == 0){
        return ""
      }else if(this.customed.length == 1){
        return this.customed[0].HEALTH_CHECK_ID
      }else if(this.customed.length == 2){
        return this.customed[0].HEALTH_CHECK_ID
      }
    },
    addMenuID1(){
      if(this.customed.length == 0){
        return ""
      }else if(this.customed.length == 1){
        return 0
      }else if(this.customed.length == 2){
        return this.customed[1].HEALTH_CHECK_ID
      }
    }
  },
  watch:{
    menuselect(){
      this.select = this.menuselect;
      this.takeHEALTH_CHECK_ID = this.menuselect[this.menuselect.length-1].HEALTH_CHECK_ID
    },
    member(){
      $.ajax({            
        method: "POST",
        url: "php/front_end_API/C_findPetsName.php",
        data:{
          'FK_MEMBER_ID': this.member,
        },            
        dataType: "text",
        success: (res)=> {
          this.petsInfo = JSON.parse(res)
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
      this.memberID = this.member
    }
  },
  mounted() {

    /*----- 卷軸 -----*/
    Array.prototype.forEach.call(
        document.getElementsByClassName("bar"),
        function (el) {
            new SimpleBar(el);
        }
    );
    
    /*----- 月曆 -----*/
    const calendar_el = document.querySelector('.i_calendar');

    const my_calendar = new TavoCalendar(calendar_el)
  
    calendar_el.addEventListener('calendar-select', (ev) => {
      this.BOOKING_DATE = my_calendar.getSelected()
    });
  }
})


// 金錢轉千分符
  Vue.filter('currency', function (price) {
    return price.toLocaleString('en-US');
  });

//new Vue  
  let vm = new Vue({
    el: "#app",
    data: {
      choice: "",
      choicePrice: "",
      customChoice: [],
      checkMenu: [],
      selected:[],
      isBookingBoxOpen: false, // 預約燈箱啟閉
      fast:'快速篩檢套餐',
      advanced:'進階健檢套餐',
      elder:'熟齡健檢套餐',
      memberID: null
    },
    computed: {
      fastTest() {
        return this.checkMenu.slice(0, 8)
      },
      advancedTest() {
        return this.checkMenu.slice(8, 16)
      },
      elderTest() {
        return this.checkMenu.slice(16, 24)
      },
      customTest() {
        return this.checkMenu.slice(24, 32)
      },
      totalPrice() {
        let price1 = this.choicePrice == "" ? 0 : parseInt(this.choicePrice);
        let price2 = this.customChoice.length == 1 ? parseInt(this.customChoice[0].PRICE) : 0;
        let price3 = this.customChoice.length >= 2 ? (parseInt(this.customChoice[0].PRICE) + parseInt(this.customChoice[1].PRICE)) * 0.9 : 0;
        return price1 + price2 + price3;
      }
    },
    
    methods: {
      clearAll(){
        this.customChoice = [];
        this.choice = "";
        this.choicePrice="";
      },

      pushItem(item){
        if(!this.customChoice.includes(item)){this.customChoice.push(item)}
      },
      fastSelected(){
        this.choice = 'fast'
        this.choicePrice = 4000
        this.selected = this.checkMenu.slice(0, 8)
      },
      advancedSelected(){
        this.choice = 'advanced'
        this.choicePrice = 9500
        this.selected = this.checkMenu.slice(0, 16)
      },
      elderSelected(){
        this.choice = 'elder'
        this.choicePrice = 17000
        this.selected = this.checkMenu.slice(0, 24)
      },
      loginCheck(){
        $.ajax({            
          method: "POST",
          url: "php/front_end_API/M_getsession_MID.php",
          success: (response)=> {
            if(response === '"N"'){
                  alert('請先登入會員'); 
                  $('#m_sign_in_bk').show()
                }else{
                  this.isBookingBoxOpen = true
                  this.memberID = parseInt(response.split(`"`).join(""))
              }              
          },
          error: function(exception) {
              alert("數據載入失敗: " + exception.status);
          }
      });
      },

    },

    created() {
      axios.post("php/front_end_API/C_select.php").then((res)=>{
        this.checkMenu = res.data
      })
    },

    });   
                

