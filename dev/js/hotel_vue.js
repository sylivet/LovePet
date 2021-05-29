//房間預約元件
Vue.component("room-booking", {
    props: ['roomtype'],
    template: "#roombookingbox",
    methods: {
        closeBox() {
            this.$emit('closelightbox')
        }
    },
    computed: {
        selectRoom(){
            return this.roomtype[0];
        }
    }
})


let vm = new Vue({
    el: "#app",
    data: {
        dropMenuSelect: "時毛玩意",//下拉選單選擇的
        roomSelection: "",//預約的房間
        isBookingBoxOpen: false, // 預約燈箱啟閉
        rooms: [//資料庫房型資料
            {
                ROOM_TYPE_ID: 1,
                ROOM_NAME: "時毛玩意",
                PRICE: 5999,
                MAX_CAPACITY: 4,
                ROOM_IMG: "img/hotel/h_room1.png",
                ROOM_IMG2: "img/hotel/h_room2.png",
                ROOM_IMG3: "img/hotel/h_room3.png",
                PANNELLUM: "img/hotel/h_panorama1.jpg",
                ROOM_INFO: "簡雅的線條設計，配上舒適的亞麻米色，房內更設有方便的工作桌，讓需要常外出工作的您，還能帶著寵物出門旅遊；考慮到毛孩的活動範圍，房內的擺設皆留有寬敞的空間，並配置隔音牆，讓您可以安心陪伴牠們玩耍、休息。浴室採乾溼分離設計，提高您的安全及便利性，並附設方型湯池，能依喜好選擇一般的泡澡或是溫泉，舒緩您一天的疲勞。",
            },
            {
                ROOM_TYPE_ID: 2,
                ROOM_NAME: "一汪無際",
                PRICE: 3500,
                MAX_CAPACITY: 2,
                ROOM_IMG: "img/hotel/h_room1.png",
                ROOM_IMG2: "img/hotel/h_room2.png",
                ROOM_IMG3: "img/hotel/h_room3.png",
                PANNELLUM: "img/hotel/h_panorama1.jpg",
                ROOM_INFO: "簡雅的線條設計，配上舒適的亞麻米色，房內更設有方便的工作桌，讓需要常外出工作的您，還能帶著寵物出門旅遊；考慮到毛孩的活動範圍，房內的擺設皆留有寬敞的空間，並配置隔音牆，讓您可以安心陪伴牠們玩耍、休息。浴室採乾溼分離設計，提高您的安全及便利性，並附設方型湯池，能依喜好選擇一般的泡澡或是溫泉，舒緩您一天的疲勞。",

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
                ROOM_IMG: "img/hotel/h_room1.png",
                ROOM_IMG2: "img/hotel/h_room2.png",
                ROOM_IMG3: "img/hotel/h_room3.png",
                PANNELLUM: "img/hotel/h_panorama1.jpg",
                ROOM_INFO: "簡雅的線條設計，配上舒適的亞麻米色，房內更設有方便的工作桌，讓需要常外出工作的您，還能帶著寵物出門旅遊；考慮到毛孩的活動範圍，房內的擺設皆留有寬敞的空間，並配置隔音牆，讓您可以安心陪伴牠們玩耍、休息。浴室採乾溼分離設計，提高您的安全及便利性，並附設方型湯池，能依喜好選擇一般的泡澡或是溫泉，舒緩您一天的疲勞。",

            },
            {
                ROOM_TYPE_ID: 5,
                ROOM_NAME: "舒毛一夏",
                PRICE: 4200,
                MAX_CAPACITY: 2,
                ROOM_IMG: "img/hotel/h_room1.png",
                ROOM_IMG2: "img/hotel/h_room2.png",
                ROOM_IMG3: "img/hotel/h_room3.png",
                PANNELLUM: "img/hotel/h_panorama1.jpg",
                ROOM_INFO: "簡雅的線條設計，配上舒適的亞麻米色，房內更設有方便的工作桌，讓需要常外出工作的您，還能帶著寵物出門旅遊；考慮到毛孩的活動範圍，房內的擺設皆留有寬敞的空間，並配置隔音牆，讓您可以安心陪伴牠們玩耍、休息。浴室採乾溼分離設計，提高您的安全及便利性，並附設方型湯池，能依喜好選擇一般的泡澡或是溫泉，舒緩您一天的疲勞。",

            },
        ],
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
    // created(){
        //var self = this;
    //     axios.post("php/front_end_API/H_select.php").then((res)=>{
    //       self.rooms = res.data
    //     })
    // },
    mounted() {
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
            blacklist: ["2021-05-10", "2021-05-23"],
            range_select: true,
        });
        /*----- 720度環景 -----*/
        pannellum.viewer = pannellum.viewer("h_panorama", {
            type: "equirectangular",
            panorama: "img/hotel/h_panorama1.jpg",
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
            hotSpots: [
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
        });

        // Make buttons work (按鈕調整移動畫面)
        document.getElementById("h_arrow_up").addEventListener("click", function (e) {
            pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
        });
        document.getElementById("h_arrow_down").addEventListener("click", function (e) {
            pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
        });
        document.getElementById("h_arrow_left").addEventListener("click", function (e) {
            pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
        });
        document.getElementById("h_arrow_right").addEventListener("click", function (e) {
            pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
        });
        document.getElementById("h_enlarge").addEventListener("click", function (e) {
            pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
        });
        document.getElementById("h_narrow").addEventListener("click", function (e) {
            pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
        });
    },
});
