//預約健檢元件
Vue.component("clinic-booking", {
  props: ['menuselect', 'custom', 'member'],
  template: "#clinicBox",
  data(){
      return {
        customed: this.custom,
        select: null,
        takeHEALTH_CHECK_ID:"",
        petsName:[],
        petChoice:""
      }
    },
  methods: {
      closeBox() {
          this.$emit('closelightbox')
      },
      booking() {
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
                'BOOKING_DATE': this.BOOKING_DATE,
                'CREATE_DATE': this.CREATE_DATE,
                'i_petsname': this.i_petsname,
              
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
          this.petsName = []
          JSON.parse(res).forEach((item)=>{
            this.petsName.push(item.PET_NAME)
          })
        },
        error: function(exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
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
    const my_calendar = new TavoCalendar(calendar_el);
    calendar_el.addEventListener('calendar-select', (ev) => {
      this.BOOKING_DATE = my_calendar.getSelected()
      // alert(myCalendar.getSelected());
    });

    // 訂單創建日期
    let t = new Date()
    let y = t.getFullYear()
    let m = t.getMonth() + 1
    let d = t.getDate()
    return this.CREATE_DATE = `${y}-${m}-${d}`
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
                

