//房間預約元件
Vue.component("room-booking", {
    props: ['roomtype'],
    template: "#roombookingbox",
    data() {
        return {
            FK_MEMBER_ID: null,
            numberOfAdults: 0,
            numberOfKids: 0,
            numberOfDogs: 0,
            numberOfCats: 0,
            start:"",
            end:"",
            roomCapacity:null,
            roomName:null,
            roomID:null,
            roomPrice:null,
            roomBlackList:[]
        }
    },
    methods: {
        closeBox() {
            this.$emit('closelightbox')
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
                      this.FK_MEMBER_ID = parseInt(response.split(`"`).join(""))
                      sessionStorage.clear()

                      $.ajax({            
                        method: "POST",
                        url: "php/front_end_API/H_Insert_booking.php",
                        data:{
                          'FK_MEMBER_ID': this.FK_MEMBER_ID,
                          'BOOKING_CHECKIN_DATE': this.start,
                          'BOOKING_CHECKOUT_DATE': this.end,
                          'FK_ROOM_TYPE_ID': this.roomID,
                          'numberOfAdults': this.numberOfAdults,
                          'numberOfKids': this.numberOfKids,
                          'numberOfDogs': this.numberOfDogs,
                          'numberOfCats': this.numberOfCats,
                        },            
                        dataType: "text",
                        success: ()=> {
                        alert("已幫您預約")
                        this.$emit('closelightbox')
                        },
                        error: function(exception) {
                            alert("數據載入失敗: " + exception.status);
                        }
                    });
                  }              
              },
              error: function(exception) {
                  alert("數據載入失敗: " + exception.status);
              }
          });
          },
    },
    watch:{
        roomtype(){
            this.numberOfAdults=0,
            this.numberOfKids= 0,
            this.numberOfDogs= 0,
            this.numberOfCats= 0,
            this.start="",
            this.end="",
            this.roomCapacity=parseInt(this.roomtype[0].MAX_CAPACITY),
            this.roomName=this.roomtype[0].ROOM_NAME,
            this.roomID=this.roomtype[0].ROOM_TYPE_ID,
            this.roomPrice=parseInt(this.roomtype[0].PRICE)
        },
        roomID(){
            $.ajax({            
                method: "POST",
                url: "php/front_end_API/H_blacklist.php",
                data:{
                    'FK_ROOM_TYPE_ID' : this.roomID
                },            
                dataType: "text",
                success: (res)=> {
                    this.roomBlackList = JSON.parse(res);
                }
            });
        }
    },
    mounted(){
        const self=this;
            /*----- 月曆 -----*/
            const calendar_el = document.querySelector('#my-calendar');
            const myCalendar = new TavoCalendar(calendar_el, {
                date: new Date(),
                blacklist: ["2021-06-10", "2021-06-23"],
                range_select: true,
            });
        
            calendar_el.addEventListener('calendar-range', (ev) => {
                const range = myCalendar.getRange();
                this.start = range.start
                this.end = range.end
            });
    },
})


let vm = new Vue({
    el: "#app",
    data: {
        dropMenuSelect: "時毛玩意",//下拉選單選擇的
        roomSelection: "",//預約的房間
        isBookingBoxOpen: false, // 預約燈箱啟閉
        pannellum:null,//環景圖預設空值
        setting: [
            [//ROOM1
                {
                    pitch: -15,
                    yaw: 240,
                    type: "info",
                    text: "防蟻碗架",
                },
                {
                    pitch: -7,
                    yaw: 247,
                    type: "info",
                    text: "小帳棚",
                },
            ],
            [//ROOM2
                {
                    pitch: -20,
                    yaw: 119,
                    type: "info",
                    text: "貓抓板",
                },
                {
                    pitch: 24,
                    yaw: 299,
                    type: "info",
                    text: "貓走道",
                },
            ],
            [//ROOM3
                {
                    pitch: -8.5,
                    yaw: 8.7,
                    type: "info",
                    text: "貓抓柱",
                },
                {
                    pitch: -20,
                    yaw: 46,
                    type: "info",
                    text: "寵物窩墊",
                },
            ],
            [//ROOM4
                {
                    pitch: 10,
                    yaw: 21,
                    type: "info",
                    text: "貓跳台",
                },
            ],
            [//ROOM5
                {
                    pitch: -20,
                    yaw: 140,
                    type: "info",
                    text: "漂浮水碗",
                },
                {
                    pitch: -27,
                    yaw: 165,
                    type: "info",
                    text: "潔牙玩具/寵物木眠床",
                },
            ],
        ],
        rooms: []
    },
    methods: {
        font(){
            window._jf.flush();//手動更新justfont
        },
        changeRoom(room, i) {
            const self=this;            
            this.dropMenuSelect = room.ROOM_NAME
            if(self.pannellum){
                self.pannellum.destroy();
                self.pannellum=null;
            }
            self.pannellum = pannellum.viewer('h_panorama', {
                "type": "equirectangular",
                "panorama": self.rooms[i].PANNELLUM,
                "autoLoad": true,
                "autoRotate": -2,
                'pitch': -10,
                'hfov': 180,
                'autoRotate': -2,
                'compass': true,
                'autoLoad': true,
                'showControls': false,
                'mouseZoom': false,
                'draggable': false,
                hotSpots: self.setting[i],
            });
        },
    },
    computed: {//資料處理
        typeRoom() {//篩選房型，預設時毛玩意
            if (this.dropMenuSelect === "時毛玩意") {
                return this.rooms.filter(room => {
                    return room.ROOM_NAME === this.dropMenuSelect;
                })
            } else {
                return this.rooms.filter(room => {
                    return room.ROOM_NAME === this.dropMenuSelect;
                })
            }
        }

    },
    mounted() {
        
        axios.post("php/front_end_API/H_select.php").then((res)=>{
            this.rooms = res.data
        });
        /*----- 卷軸 -----*/
        Array.prototype.forEach.call(
            document.getElementsByClassName("bar"),
            function (el) {
                new SimpleBar(el);
            }
            );
    },
    watch:{
        rooms(){
            const self=this;
        /*----- 720度環景 -----*/
        this.pannellum= pannellum.viewer("h_panorama", {
            type: "equirectangular",
            panorama: this.typeRoom[0].PANNELLUM,//錯誤==
            // 調整初始畫面位置
            pitch: -10,
            hfov: 180,
            // 自動旋轉
            autoRotate: -2,
            // 指南針
            compass: true,
            // 自動加載
            autoLoad: true,
            // 按鈕調整畫面
            showControls: false,
            // 預防無限環景設定
            mouseZoom: false,
            draggable: false,
            // 寵物用品位置熱點
            hotSpots: this.setting[0],
        });

        //按鈕調整移動畫面
        document.getElementById("h_arrow_up").addEventListener("click", function (e) {
            self.pannellum.setPitch(self.pannellum.getPitch() + 15);
        });
        document.getElementById("h_arrow_down").addEventListener("click", function (e) {
            self.pannellum.setPitch(self.pannellum.getPitch() - 15);
        });
        document.getElementById("h_arrow_left").addEventListener("click", function (e) {
            self.pannellum.setYaw(self.pannellum.getYaw() - 15);
        });
        document.getElementById("h_arrow_right").addEventListener("click", function (e) {
            self.pannellum.setYaw(self.pannellum.getYaw() + 15);
        });
        document.getElementById("h_enlarge").addEventListener("click", function (e) {
            self.pannellum.setHfov(self.pannellum.getHfov() - 15);
        });
        document.getElementById("h_narrow").addEventListener("click", function (e) {
            self.pannellum.setHfov(self.pannellum.getHfov() + 15);
        });
        }
    }
});

$(function () {
    /* ----- 房型選擇跟介紹 -----*/
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
    
    /*----- 旅館Q&A -----*/
      $('.h_show').click(function () {
        $(this).next().slideToggle('slow');
        $(this).parent().toggleClass('h_faqopen');
      });
      $('.h_flip').click(function () {
        $(this).next().slideToggle('slow');
        $(this).parent().toggleClass('h_faqopen0');
      });
  });