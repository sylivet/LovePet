//房間預約元件
Vue.component("room-booking", {
    props: ['foods'],
    template: "#roombookingbox",
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


/*----- 720度環景 -----*/
let vm = new Vue({
    el: "#app",
    data: {
        rooms: [
            {
                ROOM_TYPE_ID:1,
                ROOM_NAME:"時毛玩意",
                PRICE:5999,
                MAX_CAPACITY:4,
                ROOM_IMG:"img/hotel/h_room1.png",
                ROOM_IMG2:"img/hotel/h_room2.png",
                ROOM_IMG3:"img/hotel/h_room3.png",
                PANNELLUM:"img/hotel/h_panorama1.jpg",
            },
            {
                ROOM_TYPE_ID:2,
                ROOM_NAME:"一汪無際",
                PRICE:3500,
                MAX_CAPACITY:2,
                ROOM_IMG:"img/hotel/h_room1.png",
                ROOM_IMG2:"img/hotel/h_room2.png",
                ROOM_IMG3:"img/hotel/h_room3.png",
                PANNELLUM:"img/hotel/h_panorama1.jpg",
            },
            {
                ROOM_TYPE_ID:3,
                ROOM_NAME:"天羅地汪",
                PRICE:4000,
                MAX_CAPACITY:2,
                ROOM_IMG:"img/hotel/h_room1.png",
                ROOM_IMG2:"img/hotel/h_room2.png",
                ROOM_IMG3:"img/hotel/h_room3.png",
                PANNELLUM:"img/hotel/h_panorama1.jpg",
            },
            {
                ROOM_TYPE_ID:4,
                ROOM_NAME:"青喵淡寫",
                PRICE:4999,
                MAX_CAPACITY:4,
                ROOM_IMG:"img/hotel/h_room1.png",
                ROOM_IMG2:"img/hotel/h_room2.png",
                ROOM_IMG3:"img/hotel/h_room3.png",
                PANNELLUM:"img/hotel/h_panorama1.jpg",
            },
            {
                ROOM_TYPE_ID:5,
                ROOM_NAME:"舒毛一夏",
                PRICE:4200,
                MAX_CAPACITY:2,
                ROOM_IMG:"img/hotel/h_room1.png",
                ROOM_IMG2:"img/hotel/h_room2.png",
                ROOM_IMG3:"img/hotel/h_room3.png",
                PANNELLUM:"img/hotel/h_panorama1.jpg",
            },
        ],
        allRoomMenu: [],
    },
    mounted() {
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
