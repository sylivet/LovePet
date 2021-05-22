// 最新消息
let vm = new Vue({
  el: "#app",
  data: {
    news: [
      {
        imgURL: "img/index/news1.jpg",
        title: "特製毛孩麵包上市",
        content:
          "無鹽鬆軟麵包，不使用小麥粉，使用有機南瓜、北海道馬鈴薯、京都山羊乳與蜂蜜等天然食材製成。",
      },
      {
        imgURL: "img/index/news2.png",
        title: "即日起游泳池開放",
        content:
          "炎炎夏日讓毛孩玩玩水，清涼又有趣。免費提供寵物救生衣以及浮板玩具。",
      },
      {
        imgURL: "img/index/news3.png",
        title: "與主人共享舒適房間",
        content:
          "我們不惜成本打造合適主人與寵物的居住環境，期望毛孩們獲得最滿意的外宿經驗。",
      },
      {
        imgURL: "img/index/news4.png",
        title: "專業寵物健檢中心",
        content:
          "寵物的健康不能等！樂寵擁有最專業的獸醫駐足在渡假村內，帶毛孩來檢查一番，還能自由地奔跑在園區內，增進抵抗力。",
      },
      {
        imgURL: "img/index/news5.png",
        title: "毛孩沙拉新上市",
        content:
          "夏季限定「雞肉沙拉」新上市！炎炎夏日，你還在餵家裡的毛孩寵物飼料嗎？趕快預訂樂寵的鮮食，讓牠清涼一下。",
      },
    ],
  },
  mounted() {
    //首頁動畫
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ease:"ease"})
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.green',
        start: 'top top',
        end: 'bottom+=1000 top',
        pin: true,
        scrub: 1,
        // markers: true
      },
      defaults: {
        duration: 1
      }
    })

   .to(".a2", {
    z:2000,
    opacity: 1,
    }).to(".a3", {
      opacity: 1,
      }).to(".a4", {
        opacity: 1,
      }).to(".a5", {
        opacity: 1,
      }).to(".a6", {
        opacity: 1,
      }).to(".a7", {
        opacity: 1,
      }).to(".a8", {
        opacity: 1,
      })

    // 首頁輪播圖
    var swiper = new Swiper(".newsSwiper", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1300: {
          slidesPerView: 5,
        },
      },
    });

    //首頁環景圖
    pannellum.viewer = pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama: "img/index/panorama.jpg",
      pitch: -10,
      hfov: 180,
      compass: true,
      autoLoad: true,
      showControls: false,
      mouseZoom: false,
      draggable: false,
      // "hotSpotDebug": true,
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
    // Make buttons work
    document.getElementById("pan-up").addEventListener("click", function (e) {
      pannellum.viewer.setPitch(pannellum.viewer.getPitch() + 15);
    });
    document.getElementById("pan-down").addEventListener("click", function (e) {
      pannellum.viewer.setPitch(pannellum.viewer.getPitch() - 15);
    });
    document.getElementById("pan-left").addEventListener("click", function (e) {
      pannellum.viewer.setYaw(pannellum.viewer.getYaw() - 15);
    });
    document
      .getElementById("pan-right")
      .addEventListener("click", function (e) {
        pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
      });
    document.getElementById("zoom-in").addEventListener("click", function (e) {
      pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
    });
    document.getElementById("zoom-out").addEventListener("click", function (e) {
      pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
    });
  },
});
