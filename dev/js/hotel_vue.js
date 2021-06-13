//房間預約元件
Vue.component('room-booking', {
  props: ['roomtype'],
  template: '#roombookingbox',
  data() {
    return {
      FK_MEMBER_ID: null,
      numberOfAdults: 0,
      numberOfKids: 0,
      numberOfDogs: 0,
      numberOfCats: 0,
      start: '',
      end: '',
      roomCapacity: null,
      roomName: null,
      roomID: null,
      roomPrice: null,
      roomBlackList: [],
      newBlackList: [],
    };
  },
  methods: {
    closeBox() {
      this.$emit('closelightbox');
    },
    loginCheck() {
      $.ajax({
        method: 'POST',
        url: 'php/front_end_API/M_getsession_MID.php',
        success: response => {
          if (response === '"N"') {
            alert('請先登入會員');
            $('#m_sign_in_bk').show();
            this.$emit('closelightbox');
          } else {
            this.FK_MEMBER_ID = parseInt(response.split(`"`).join(''));
            sessionStorage.clear();

            $.ajax({
              method: 'POST',
              url: 'php/front_end_API/H_Insert_booking.php',
              data: {
                FK_MEMBER_ID: this.FK_MEMBER_ID,
                BOOKING_CHECKIN_DATE: this.start,
                BOOKING_CHECKOUT_DATE: this.end,
                FK_ROOM_TYPE_ID: this.roomID,
                numberOfAdults: this.numberOfAdults,
                numberOfKids: this.numberOfKids,
                numberOfDogs: this.numberOfDogs,
                numberOfCats: this.numberOfCats,
              },
              dataType: 'text',
              success: () => {
                alert('已幫您預約');
                this.$emit('closelightbox');
              },
              error: function (exception) {
                alert('數據載入失敗: ' + exception.status);
              },
            });
          }
        },
        error: function (exception) {
          alert('數據載入失敗: ' + exception.status);
        },
      });
    },
  },
  watch: {
    roomtype() {
      (this.numberOfAdults = 0),
        (this.numberOfKids = 0),
        (this.numberOfDogs = 0),
        (this.numberOfCats = 0),
        (this.start = ''),
        (this.end = ''),
        (this.roomCapacity = parseInt(this.roomtype[0].MAX_CAPACITY)),
        (this.roomName = this.roomtype[0].ROOM_NAME),
        (this.roomID = this.roomtype[0].ROOM_TYPE_ID),
        (this.roomPrice = parseInt(this.roomtype[0].PRICE));
      this.newBlackList = [];
    },
    roomID() {
      $.ajax({
        method: 'POST',
        url: 'php/front_end_API/H_blacklist.php',
        data: {
          FK_ROOM_TYPE_ID: this.roomID,
        },
        dataType: 'text',
        success: res => {
          this.roomBlackList = JSON.parse(res);
          for (let i = 0; i <= this.roomBlackList.length; i++) {
            const current = this.roomBlackList[i];
            if (current) {
              if (parseInt(current.stays) === 1) {
                if (
                  current.BOOKING_CHECKIN_DATE >
                  new Date().toISOString().split('T')[0]
                ) {
                  this.newBlackList.push(current.BOOKING_CHECKIN_DATE);
                }
              } else {
                for (let j = 0; j < parseInt(current.stays); j++) {
                  const dateTime = new Date(current.BOOKING_CHECKIN_DATE);
                  dateTime = dateTime.setDate(dateTime.getDate() + j);
                  dateTime = new Date(dateTime).toISOString().split('T')[0];
                  if (dateTime > new Date().toISOString().split('T')[0]) {
                    this.newBlackList.push(dateTime);
                  }
                }
              }
            }
          }
        },
      });
    },
    newBlackList() {
      $('#my-calendar').empty();
      const self = this;
      /*----- 月曆 -----*/

      const calendar_el = document.querySelector('#my-calendar');
      const myCalendar = new TavoCalendar(calendar_el, {
        date: new Date(),
        blacklist: self.newBlackList,
        range_select: true,
      });

      calendar_el.addEventListener('calendar-range', ev => {
        const range = myCalendar.getRange();
        self.start = range.start;
        self.end = range.end;
      });
    },
  },
  mounted() {
    /*----- 卷軸 -----*/
    Array.prototype.forEach.call(
      document.getElementsByClassName('bar'),
      function (el) {
        new SimpleBar(el);
      },
    );
  },
});

let vm = new Vue({
  el: '#app',
  data: {
    dropMenuSelect: '時毛玩意', //下拉選單選擇的
    roomSelection: '', //預約的房間
    isBookingBoxOpen: false, // 預約燈箱啟閉
    pannellum: null, //環景圖預設空值
    pitch: ['-10', '3', '-10', '3', '0'],
    setting: [
      [
        //ROOM1
        {
          pitch: -15,
          yaw: 240,
          type: 'info',
          text: '防蟻碗架',
        },
        {
          pitch: -7,
          yaw: 247,
          type: 'info',
          text: '小帳棚',
        },
      ],
      [
        //ROOM2
        {
          pitch: -20,
          yaw: 119,
          type: 'info',
          text: '貓抓板',
        },
        {
          pitch: 24,
          yaw: 299,
          type: 'info',
          text: '貓走道',
        },
      ],
      [
        //ROOM3
        {
          pitch: -8.5,
          yaw: 8.7,
          type: 'info',
          text: '貓抓柱',
        },
        {
          pitch: -20,
          yaw: 46,
          type: 'info',
          text: '寵物窩墊',
        },
      ],
      [
        //ROOM4
        {
          pitch: 10,
          yaw: 21,
          type: 'info',
          text: '貓跳台',
        },
      ],
      [
        //ROOM5
        {
          pitch: -20,
          yaw: 140,
          type: 'info',
          text: '漂浮水碗',
        },
        {
          pitch: -27,
          yaw: 165,
          type: 'info',
          text: '潔牙玩具/寵物木眠床',
        },
      ],
    ],
    rooms: [],
  },
  methods: {
    font() {
      window._jf.flush(); //手動更新justfont
    },
    changeRoom(room, i) {
      const self = this;
      this.dropMenuSelect = room.ROOM_NAME;
      if (self.pannellum) {
        self.pannellum.destroy();
        self.pannellum = null;
      }
      self.pannellum = pannellum.viewer('h_panorama', {
        type: 'equirectangular',
        panorama: self.rooms[i].PANNELLUM,
        autoLoad: true,
        autoRotate: -2,
        pitch: self.pitch[i],
        hfov: 180,
        autoRotate: -2,
        compass: true,
        autoLoad: true,
        showControls: false,
        mouseZoom: false,
        draggable: false,
        hotSpots: self.setting[i],
      });
    },
  },
  computed: {
    //資料處理
    typeRoom() {
      //篩選房型，預設時毛玩意
      if (this.dropMenuSelect === '時毛玩意') {
        return this.rooms.filter(room => {
          return room.ROOM_NAME === this.dropMenuSelect;
        });
      } else {
        return this.rooms.filter(room => {
          return room.ROOM_NAME === this.dropMenuSelect;
        });
      }
    },
  },
  mounted() {
    /*----- 旅館Q&A -----*/
    $('.h_show').click(function () {
      $(this).next().slideToggle('slow');
      $(this).parent().toggleClass('h_faqopen');
    });
    $('.h_flip').click(function () {
      $(this).next().slideToggle('slow');
      $(this).parent().toggleClass('h_faqopen0');
    });

    axios.post('php/front_end_API/H_select.php').then(res => {
      this.rooms = res.data;
      this.$nextTick(() => {
        /* ----- 房型選擇跟介紹 -----*/
        // console.log($(".mainmenu"))
        $('.mainmenu').click(function () {
          $('.submenu').toggle();
          $('.fa-angle-up').toggleClass('rotate');
        });

        $('.submenu').click(function () {
          $(this).parent().prev('.mainmenu').val($(this).val());
          $('.submenu').hide();
          $('.fa-angle-up').removeClass('rotate');
        });

        $('.mainmenu').blur(function () {
          $('.fa-angle-up').removeClass('rotate');
          setTimeout(function () {
            $('.submenu').hide();
          }, 200);
        });
        window._jf.flush(); //手動更新justfont
      });
    });
  },
  watch: {
    rooms() {
      const self = this;
      /*----- 720度環景 -----*/
      this.pannellum = pannellum.viewer('h_panorama', {
        type: 'equirectangular',
        panorama: this.typeRoom[0].PANNELLUM, //錯誤==
        // 調整初始畫面位置
        pitch: this.pitch[0],
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
      document
        .getElementById('h_arrow_up')
        .addEventListener('click', function (e) {
          self.pannellum.setPitch(self.pannellum.getPitch() + 15);
        });
      document
        .getElementById('h_arrow_down')
        .addEventListener('click', function (e) {
          self.pannellum.setPitch(self.pannellum.getPitch() - 15);
        });
      document
        .getElementById('h_arrow_left')
        .addEventListener('click', function (e) {
          self.pannellum.setYaw(self.pannellum.getYaw() - 15);
        });
      document
        .getElementById('h_arrow_right')
        .addEventListener('click', function (e) {
          self.pannellum.setYaw(self.pannellum.getYaw() + 15);
        });
      document
        .getElementById('h_enlarge')
        .addEventListener('click', function (e) {
          self.pannellum.setHfov(self.pannellum.getHfov() - 15);
        });
      document
        .getElementById('h_narrow')
        .addEventListener('click', function (e) {
          self.pannellum.setHfov(self.pannellum.getHfov() + 15);
        });
    },
  },
});

var hotel_bg = new TimelineMax();
hotel_bg.
  // 月亮星星
  to(".h_moon", 1, { opacity: 1, top: "3.5%", left: "1%" }).
  to(".h_star", .5, { opacity: 1, top: "-1%", left: ".5%", rotation: 5 }).
  to(".h_star", .3, { opacity: 0, top: "-3%", left: "1%", y: -8, rotation: 10 }).
  to(".h_star", .5, { opacity: 1, top: "-1%", left: "1.5%", y: -3, rotation: 10 }).
  to(".h_star", .5, { opacity: 0 }).
  to(".h_moon", .8, { opacity: 1, top: "4%", left: "2%", rotation: 2, repeat: -1, yoyo: true, ease: Power0.easeNone });

var hotel_house = new TimelineMax();
hotel_house.delay(4.5).
  // 風向儀
  to(".h_anemoscope", .8, { rotationY: 45, z: -300, repeat: -1, yoyo: true }).
  // 屋頂的貓
  to(".h_cat", .3, { top: "-1%", left: "-1%", rotation: 5 }).
  to(".h_cat", .6, { top: "1.5%", left: "-3%", rotation: 0 }).
  to(".h_cat", .3, { top: "0%", left: "-4.5%", rotation: 5 }).
  to(".h_cat", .6, { top: "3.5%", left: "-5.5%", rotation: 0 });

// 騎腳踏車的人  
TweenMax.to(".h_wheel1", 4, { delay: 7, opacity: 1, top: "50%", left: "68.5%", scale: 1.2, rotation: 360 });
TweenMax.to(".h_wheel2", 4, { delay: 7, opacity: 1, top: "50%", left: "75.3%", scale: 1.2, rotation: 360 });
TweenMax.to(".h_bicycle", 4, { delay: 7, opacity: 1, top: "37%", left: "70%", scale: 1 });

var hotel_stay = new TimelineMax();
hotel_stay.delay(11).
  //遛狗的人
  to(".h_people", 1, { top: 0, left: "-1%", rotation: 1, ease: Power0.easeNone }).
  to(".h_people", .4, { top: "1%", left: "-2%", rotation: 0, ease: Power0.easeNone }).
  to(".h_people", .4, { top: 0, left: "-3%", rotation: 1, ease: Power0.easeNone }).
  to(".h_people", .4, { top: "1%", left: "-4%", rotation: 0, ease: Power0.easeNone }).
  to(".h_people", .4, { top: 0, left: "-5%", rotation: 1, ease: Power0.easeNone }).
  to(".h_people", .4, { top: "1%", left: "-6%", rotation: 0, ease: Power0.easeNone });

// 房型木牌
var hotel_doorplate = new TimelineMax();
hotel_doorplate.delay(14.5).
  to("#wood1", .8, { opacity: 1 }).
  to("#wood2", .8, { opacity: 1 }).
  to("#wood3", .8, { opacity: 1 }).
  to("#wood4", .8, { opacity: 1 }).
  to("#wood5", .8, { opacity: 1 }).
  to(".doorplate", .4, { top: "1%", left: "14%" }).
  to(".doorplate", .5, { top: "-1%", left: "17%" }).
  to(".doorplate", .5, { top: ".5%", left: "15%" }).
  to(".doorplate", .6, { top: 0, left: "16%", repeat: -1, yoyo: true });


// 下拉選單
$(function () {
  // 關閉登入會員燈箱
  $('.i_closeButton').click(() => $('#m_sign_in_bk').hide())
});
