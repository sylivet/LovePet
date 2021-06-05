//預約健檢元件
Vue.component("clinic-booking", {
  props: ['check'],
  template: "#clinicBox",
  data(){
      return {
        
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
      console.log(this.CREATE_DATE);
      console.log(this.BOOKING_DATE);
      console.log(this.i_petsname);

    
      },
  },

  computed: {
    // checkSet(){
    //   return this.check[0];
    // }
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
      isBookingBoxOpen: false, // 預約燈箱啟閉
      fast:'快速篩檢套餐',
      advanced:'進階健檢套餐',
      elder:'熟齡健檢套餐',
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

    },

    created() {
      axios.post("php/front_end_API/C_select.php").then((res)=>{
        this.checkMenu = res.data
      })
    },

    });  
             
                

