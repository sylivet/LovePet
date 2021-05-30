// let vm = new Vue({
//     el: "#app",
//     mounted() {
//         /*----- 天羅地汪 -----*/
//         pannellum.viewer = pannellum.viewer("h_panorama", {
//             type: "equirectangular",
//             panorama: "img/hotel/h_panorama1.jpg",
//             // 調整初始畫面位置
//             pitch: -10,
//             hfov: 180,
//             // 自動旋轉
//             autoRotate: -2,
//             // 指南針
//             compass: true,
//             // 自動加載
//             autoLoad: true,
//             // 按鈕調整畫面
//             showControls: false,
//             // 預防無限環景設定
//             mouseZoom: false,
//             draggable: false,
//             // 寵物用品位置熱點
//             hotSpots: [
//                 {
//                     pitch: -8.5,
//                     yaw: 8.7,
//                     type: "info",
//                     text: "貓抓柱",
//                 },
//                 {
//                     pitch: -20,
//                     yaw: 46,
//                     type: "info",
//                     text: "寵物窩墊",
//                 },
//             ],
//         });

//         // Make buttons work (按鈕調整移動畫面)
//         document.getElementById("h_arrow_up").addEventListener("click", function (e) {
//             pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
//         });
//         document.getElementById("h_arrow_down").addEventListener("click", function (e) {
//             pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
//         });
//         document.getElementById("h_arrow_left").addEventListener("click", function (e) {
//             pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
//         });
//         document.getElementById("h_arrow_right").addEventListener("click", function (e) {
//             pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
//         });
//         document.getElementById("h_enlarge").addEventListener("click", function (e) {
//             pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
//         });
//         document.getElementById("h_narrow").addEventListener("click", function (e) {
//             pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
//         });
//     },
// });



// let vm = new Vue({
//     el: "#app",
//     mounted() {
//         /*----- 時毛玩意 -----*/
//         pannellum.viewer = pannellum.viewer("h_panorama", {
//             type: "equirectangular",
//             panorama: "img/hotel/h_panorama2.jpeg",
//             // 調整初始畫面位置
//             pitch: -10,
//             hfov: 180,
//             // 自動旋轉
//             autoRotate: -2,
//             // 指南針
//             compass: true,
//             // 自動加載
//             autoLoad: true,
//             // 按鈕調整畫面
//             showControls: false,
//             // 預防無限環景設定
//             mouseZoom: false,
//             draggable: false,
//             // 寵物用品位置熱點
//             hotSpots: [
//                 {
//                     pitch: -15,
//                     yaw: 240,
//                     type: "info",
//                     text: "防蟻碗架",
//                 },
//                 {
//                     pitch: -7,
//                     yaw: 247,
//                     type: "info",
//                     text: "小帳棚",
//                 },
//             ],
//         });

//         // Make buttons work (按鈕調整移動畫面)
//         document.getElementById("h_arrow_up").addEventListener("click", function (e) {
//             pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
//         });
//         document.getElementById("h_arrow_down").addEventListener("click", function (e) {
//             pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
//         });
//         document.getElementById("h_arrow_left").addEventListener("click", function (e) {
//             pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
//         });
//         document.getElementById("h_arrow_right").addEventListener("click", function (e) {
//             pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
//         });
//         document.getElementById("h_enlarge").addEventListener("click", function (e) {
//             pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
//         });
//         document.getElementById("h_narrow").addEventListener("click", function (e) {
//             pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
//         });
//     },
// });



// let vm = new Vue({
//     el: "#app",
//     mounted() {
//         /*----- 一汪無際 -----*/
//         pannellum.viewer = pannellum.viewer("h_panorama", {
//             type: "equirectangular",
//             panorama: "img/hotel/h_panorama3.jpg",
//             // 調整初始畫面位置
//             pitch: 3,
//             hfov: 180,
//             // 自動旋轉
//             autoRotate: -2,
//             // 指南針
//             compass: true,
//             // 自動加載
//             autoLoad: true,
//             // 按鈕調整畫面
//             showControls: false,
//             // 預防無限環景設定
//             mouseZoom: false,
//             draggable: false,
//             // 寵物用品位置熱點
//             hotSpots: [
//                 {
//                     pitch: -20,
//                     yaw: 119,
//                     type: "info",
//                     text: "貓抓板",
//                 },
//                 {
//                     pitch: 24,
//                     yaw: 299,
//                     type: "info",
//                     text: "貓走道",
//                 },
//             ],
//         });

//         // Make buttons work (按鈕調整移動畫面)
//         document.getElementById("h_arrow_up").addEventListener("click", function (e) {
//             pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
//         });
//         document.getElementById("h_arrow_down").addEventListener("click", function (e) {
//             pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
//         });
//         document.getElementById("h_arrow_left").addEventListener("click", function (e) {
//             pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
//         });
//         document.getElementById("h_arrow_right").addEventListener("click", function (e) {
//             pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
//         });
//         document.getElementById("h_enlarge").addEventListener("click", function (e) {
//             pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
//         });
//         document.getElementById("h_narrow").addEventListener("click", function (e) {
//             pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
//         });
//     },
// });



// let vm = new Vue({
//     el: "#app",
//     mounted() {
//         /*----- 青喵淡寫 -----*/
//         pannellum.viewer = pannellum.viewer("h_panorama", {
//             type: "equirectangular",
//             panorama: "img/hotel/h_panorama4.jpg",
//             // 調整初始畫面位置
//             pitch: 3,
//             hfov: 180,
//             // 自動旋轉
//             autoRotate: -2,
//             // 指南針
//             compass: true,
//             // 自動加載
//             autoLoad: true,
//             // 按鈕調整畫面
//             showControls: false,
//             // 預防無限環景設定
//             mouseZoom: false,
//             draggable: false,
//             // 寵物用品位置熱點
//             hotSpots: [
//                 {
//                     pitch: 10,
//                     yaw: 21,
//                     type: "info",
//                     text: "貓跳台",
//                 },
//             ],
//         });

//         // Make buttons work (按鈕調整移動畫面)
//         document.getElementById("h_arrow_up").addEventListener("click", function (e) {
//             pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
//         });
//         document.getElementById("h_arrow_down").addEventListener("click", function (e) {
//             pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
//         });
//         document.getElementById("h_arrow_left").addEventListener("click", function (e) {
//             pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
//         });
//         document.getElementById("h_arrow_right").addEventListener("click", function (e) {
//             pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
//         });
//         document.getElementById("h_enlarge").addEventListener("click", function (e) {
//             pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
//         });
//         document.getElementById("h_narrow").addEventListener("click", function (e) {
//             pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
//         });
//     },
// });



let vm = new Vue({
    el: "#app",
    mounted() {
        /*----- 舒毛一夏 -----*/
        pannellum.viewer = pannellum.viewer("h_panorama", {
            type: "equirectangular",
            panorama: "img/hotel/h_panorama5.jpg",
            // 調整初始畫面位置
            pitch: 0,
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
                    pitch: -20,
                    yaw: 140,
                    type: "info",
                    text: "漂浮水碗",
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