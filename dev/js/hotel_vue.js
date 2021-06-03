//房間預約元件
Vue.component("room-booking", {
    props: ['roomtype'],
    template: "#roombookingbox",
    data() {
        return {
            numberOfAdults: 0,
            numberOfKids: 0,
            numberOfDogs: 0,
            numberOfCats: 0,
        }
    },
    methods: {
        closeBox() {
            this.$emit('closelightbox')
        }
    },
    computed: {
        selectRoom() {
            return this.roomtype[0];
        }
    },
    watch:{
        roomtype(){
            this.numberOfAdults=0,
            this.numberOfKids= 0,
            this.numberOfDogs= 0,
            this.numberOfCats= 0
        }
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
        rooms: [//資料庫房型資料
            {
                ROOM_TYPE_ID: 1,
                ROOM_NAME: "時毛玩意",
                PRICE: 5999,
                MAX_CAPACITY: 4,
                ROOM_IMG: "img/hotel/h_room4.jpg",
                ROOM_IMG2: "img/hotel/h_room5.jpg",
                ROOM_IMG3: "img/hotel/h_room6.jpg",
                PANNELLUM: "img/hotel/h_panorama2.jpeg",
                ROOM_INFO: "房內採白色的牆面，配上強烈的紅色沙發，以及對比色系的家具，形成撞色的時髦感，且窗外撒落的陽光與綠意，讓身處在都市喧囂的我們，還能觀賞波光粼粼的河面，獲得片刻的寧靜...另有開放式廚房及餐桌，選用了時尚的大理石桌板，讓您與家人或朋友，可以享受在房內使用餐點的私人空間，不受他人打擾。",
            },
            {
                ROOM_TYPE_ID: 2,
                ROOM_NAME: "一汪無際",
                PRICE: 3500,
                MAX_CAPACITY: 2,
                ROOM_IMG: "img/hotel/h_room7.jpg",
                ROOM_IMG2: "img/hotel/h_room8.jpg",
                ROOM_IMG3: "img/hotel/h_room9.jpg",
                PANNELLUM: "img/hotel/h_panorama3.jpg",
                ROOM_INFO: "使用明亮舒適的嵌燈照明，以及大量的鏡面設計，令房間的臥室顯得有獨特的格調；周圍還配上了烤漆玻璃的櫃體，讓水藍色的門片照映，房間整個一覽無遺，不必擔心毛孩跑到您不知道的角落裡。並且化妝台上的鏡子，還接上了補光燈，絕對是您享有一天美好的開始；身旁的貓抓板也能讓貓咪與您一同互動。",

            },
            {
                ROOM_TYPE_ID: 3,
                ROOM_NAME: "天羅地汪",
                PRICE: 4000,
                MAX_CAPACITY: 2,
                ROOM_IMG: "img/hotel/h_room1.png",
                ROOM_IMG2: "img/hotel/h_room2.png",
                ROOM_IMG3: "img/hotel/h_room3.png",
                PANNELLUM: "img/hotel/h_panorama1.jpg",
                ROOM_INFO: "簡雅的線條設計，配上舒適的亞麻米色，房內更設有方便的工作桌，讓需要常外出工作的您，還能帶著寵物出門旅遊；考慮到毛孩的活動範圍，房內的擺設皆留有寬敞的空間，並配置隔音牆，讓您可以安心陪伴牠們玩耍、休息。浴室採乾溼分離設計，提高您的安全及便利性，並附設方型湯池，能依喜好選擇一般的泡澡或是溫泉，舒緩您一天的疲勞。",

            },
            {
                ROOM_TYPE_ID: 4,
                ROOM_NAME: "青喵淡寫",
                PRICE: 4999,
                MAX_CAPACITY: 4,
                ROOM_IMG: "img/hotel/h_room10.jpg",
                ROOM_IMG2: "img/hotel/h_room11.jpg",
                ROOM_IMG3: "img/hotel/h_room12.jpg",
                PANNELLUM: "img/hotel/h_panorama4.jpg",
                ROOM_INFO: "喜歡大自然的旅客，不妨選擇我們預約top1的房型。從踏入房間的那刻起，就讓您感受到大地的擁抱，採用松木質地的地板與家具，有陣陣飄來的清香；沙發與床組都是讓雙眼得以休息的大地色，配上樂寵後山特別栽種的植物，絕對是您愜意的首選。還有架高的液晶電視，讓您無論是在沙發旁與貓咪玩耍，或是在床上觀賞頻道，都是舒適自在的觀看角度。",

            },
            {
                ROOM_TYPE_ID: 5,
                ROOM_NAME: "舒毛一夏",
                PRICE: 4200,
                MAX_CAPACITY: 2,
                ROOM_IMG: "img/hotel/h_room13.jpg",
                ROOM_IMG2: "img/hotel/h_room14.jpg",
                ROOM_IMG3: "img/hotel/h_room15.jpg",
                PANNELLUM: "img/hotel/h_panorama5.jpg",
                ROOM_INFO: "位於最高樓層的景觀房型，打開窗簾便能俯瞰這個美麗的城市，坐在窗前讀讀喜歡的書本，或是小酌情誼，抬頭便能看見夜色，喜歡夜景的訪客千萬不能錯過。主色系採用了優雅的藍色，從床頭舒適柔軟的靠墊到地上天然的羊毛地毯，給您與毛孩最大的呵護，不必擔心孩子們活動的空間受到侷限，可以在房內自由地奔跑。",

            },
        ],
    },
    methods: {
        // loginChenk(){
        //     $.ajax({            
        //       method: "POST",
        //       url: "php/front_end_API/R_LoginCheck.php",
        //       data:{},            
        //       dataType: "text",
        //       success: (response)=> {
        //           if(response == ""){
        //               // 尚未登入->前往Login.php
        //               alert('請先登入會員'); 
        //               $('#m_sign_in_bk').show()
        //             }else{
        //               this.isBookingBoxOpen = true
        //           }              
        //       },
        //       error: function(exception) {
        //           alert("數據載入失敗: " + exception.status);
        //       }
        //   });
        //   },
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
        const self=this;
        /*----- 卷軸 -----*/
        Array.prototype.forEach.call(
            document.getElementsByClassName("bar"),
            function (el) {
                new SimpleBar(el);
            }
        );

        /*----- 月曆 -----*/
        const myCalendar = new TavoCalendar("#my-calendar", {
            date: new Date(),
            blacklist: ["2021-06-10", "2021-06-23"],
            range_select: true,
        });
        /*----- 720度環景 -----*/
        self.pannellum= pannellum.viewer("h_panorama", {
            type: "equirectangular",
            panorama: self.typeRoom[0].PANNELLUM,//錯誤==
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
    },
});
