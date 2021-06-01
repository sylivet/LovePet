let data = {
  panorama: [
    {
      ctrlid: "pan-up",
      iclass: "fa fa-arrow-up"
    },
    {
      ctrlid: "pan-down",
      iclass: "fa fa-arrow-down"
    },
    {
      ctrlid: "pan-left",
      iclass: "fa fa-arrow-left"
    },
    {
      ctrlid: "pan-right",
      iclass: "fa fa-arrow-right"
    }, {
      ctrlid: "zoom-in",
      iclass: "fa fa-plus"
    }, {
      ctrlid: "zoom-out",
      iclass: "fa fa-minus"
    },
  ],
  backgrounds: [
    {
      imgURL: "./img/index/0-01.png",
      imgclass: "a1"
    },
    {
      imgURL: "./img/index/1-01.png",
      imgclass: "a2"
    },
    {
      imgURL: "./img/index/2-01.png",
      imgclass: "a3"
    },
    {
      imgURL: "./img/index/3-01.png",
      imgclass: "a4"
    }, {
      imgURL: "./img/index/4-01.png",
      imgclass: "a5"
    }, {
      imgURL: "./img/index/5-01.png",
      imgclass: "a6"
    }, {
      imgURL: "./img/index/6-01.png",
      imgclass: "a7"
    },
    {
      imgURL: "./img/index/6-01.png",
      imgclass: "a7"
    },
    {
      imgURL: "./img/index/7-01.png",
      imgclass: "a8"
    },
  ],
  contents: [
    {
      intro: "餐廳使用我們渡假村自產自銷的天然食材，堅持不含防腐劑及化學添加。<br>讓毛孩吃得到真食物，並從中獲得飽足感。",
      divclass: "content1",
      pclass: "content1-1"
    }, {
      intro: "我們的健檢中心，擁有全台最專業的設備及經驗豐富的獸醫。<br>歡迎帶您的毛小孩來此做一年一度的健康檢查。",
      divclass: "content2",
      pclass: "content2-1"
    }, {
      intro: "旅館配有寵物遊樂設施，房間內也都有寵物專屬寢具，讓毛小孩能與您一起渡過美好的渡假時光。",
      divclass: "content3",
      pclass: "content3-1"
    },
    {
      intro: "除了有米其林主廚外，我們餐廳配有寵物專屬的廚師，還能事先客製專屬的毛孩美食。",
      divclass: "content4",
      pclass: "content4-1"
    },
  ],
  news: [
        {
      NEWS_IMG: "img/index/news1.jpg",
      NEWS_TITLE: "特製毛孩麵包上市",
      NEWS_CONTENT: "無鹽鬆軟麵包，不使用小麥粉，使用有機南瓜、北海道馬鈴薯、京都山羊乳與蜂蜜等天然食材製成。"
    },
    {
      NEWS_IMG: "img/index/news2.png",
      NEWS_TITLE: "即日起游泳池開放",
      NEWS_CONTENT: "炎炎夏日讓毛孩玩玩水，清涼又有趣。免費提供寵物救生衣以及浮板玩具。"
    },
    {
      NEWS_IMG: "img/index/news3.png",
      NEWS_TITLE: "與主人共享舒適房間",
      NEWS_CONTENT: "我們不惜成本打造合適主人與寵物的居住環境，期望毛孩們獲得最滿意的外宿經驗。"
    },
    {
      NEWS_IMG: "img/index/news4.png",
      NEWS_TITLE: "專業寵物健檢中心",
      NEWS_CONTENT: "寵物的健康不能等！樂寵擁有最專業的獸醫駐足在渡假村內，帶毛孩來檢查一番，還能自由地奔跑在園區內，增進抵抗力。"
    }, {
      NEWS_IMG: "img/index/news5.png",
      NEWS_TITLE: "毛孩沙拉新上市",
      NEWS_CONTENT: "夏季限定「雞肉沙拉」新上市！炎炎夏日，你還在餵家裡的毛孩寵物飼料嗎？趕快預訂樂寵的鮮食，讓牠清涼一下。"
    },
  ]
}

let vm = new Vue({
  el: "#app",
  data: data,
  created(){
    var self = this;
    //對前端頁面資料進行初始化
    axios.post("php/front_end_API/I_select.php").then(function (res) {
      self.news = res.data; //獲取資料
      self.$nextTick(() => {//在DOM已掛載、渲染完成後，執行nextTick()內的程式碼
        //最新消息
        var swiper = new Swiper(".mySwiper", {
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
      });
    });
  },
  mounted() { 
    // 首頁動畫
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "ease" })
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.green',
        start: 'top top',
        end: 'bottom+=3500 top',
        pin: true,
        scrub: 1,
        // markers: true
      },
      defaults: {
        duration: 1
      }
    })

    .to(".a2", {
      z: 2000,
      opacity: 1
    })
    .to(".a3", { opacity: 1 })
    .to(".a4", { opacity: 1 })
    .to(".a5", { opacity: 1 })
    .to(".a6", { opacity: 1 })
    .to(".a7", { opacity: 1 })
    .to(".a1 , .a2 , .a3 , .a4 , .a5 , .a6 , .a7", {
      top: "30%",
      left: "-20%",
      scale: 1.5
    })
    .to(".content1", {
      opacity: 1,
      width: "240px",
      height: "175px"
    })
    .to(".content1-1", { opacity: 1 })
    .to(".content1 , .content1-1", { opacity: 0})
    
    .to(".a1 , .a2 , .a3 , .a4 , .a5 , .a6 , .a7", {
      top: "10%",
      left: "0%",
      scale: 1.5
    })
    .to(".content2", {
    opacity: 1,
    width: "240px",
    height: "175px"
    })
    .to(".content2-1", { opacity: 1 })
    .to(".content2 , .content2-1", { opacity: 0})
    .to(".a1 , .a2 , .a3 , .a4 , .a5 , .a6 , .a7", {
      top: "-15%",
      left: "20%",
      scale: 1.5
    })
    .to(".content3", {
    opacity: 1,
    width: "240px",
    height: "155px"
    })
    .to(".content3-1", { opacity: 1 })
    .to(".content3 , .content3-1", { opacity: 0})
    .to(".a1 , .a2 , .a3 , .a4 , .a5 , .a6 , .a7", {
      top: "-50%",
      left: "0%",
      scale: 1.5
    })
    .to(".content4", {
      opacity: 1,
      width: "240px",
      height: "155px"
      })
      .to(".content4-1", { opacity: 1 })
      .to(".content4 , .content4-1", { opacity: 0})
      .to(".a1 , .a2 , .a3 , .a4 , .a5 , .a6 , .a7", {
        top: "0%",
        left: "0%",
        scale: 1
      })
    .to(".a8", { 
      left:"-5%",
      opacity: 1,
      scale:.8,
      duration: 2
    })
    // 首頁輪播圖
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3500
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        500: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        },
        1300: {
          slidesPerView: 5
        }
      }
    });

    // 首頁環景圖
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
          text: "貓抓柱"
        }, {
          pitch: -20,
          yaw: 46,
          type: "info",
          text: "寵物窩墊"
        },
      ]
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
    document.getElementById("pan-right").addEventListener("click", function (e) {
      pannellum.viewer.setYaw(pannellum.viewer.getYaw() + 15);
    });
    document.getElementById("zoom-in").addEventListener("click", function (e) {
      pannellum.viewer.setHfov(pannellum.viewer.getHfov() - 15);
    });
    document.getElementById("zoom-out").addEventListener("click", function (e) {
      pannellum.viewer.setHfov(pannellum.viewer.getHfov() + 15);
    });
  }
});
