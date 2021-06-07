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
      intro: "餐廳使用渡假村自產自銷的天然食材，堅持不含防腐劑及化學添加，讓毛孩吃得到真食物，並從中獲得飽足感。",
      divclass: "content1",
      pclass: "content1-1"
    }, {
      intro: "我們的健檢中心，擁有全台最專業的設備及經驗豐富的獸醫。<br>歡迎帶您的毛小孩來此做一年一度的健康檢查。",
      divclass: "content2",
      pclass: "content2-1"
    }, {
      intro: "旅館配有寵物遊樂設備，房間內也有設置寵物的寢具，讓毛小孩能與您一起渡過美好的時光。",
      divclass: "content3",
      pclass: "content3-1"
    },
    {
      intro: "除了有米其林主廚外，餐廳配有寵物專屬的廚師，還能事先客製屬於毛孩的美食。",
      divclass: "content4",
      pclass: "content4-1"
    },
  ],
  news: []
}

let vm = new Vue({
  el: "#app",
  data: data,
  created(){
    const self = this;
    //對前端頁面資料進行初始化
    axios.post("php/front_end_API/I_select.php").then(function (res) {
      self.news = res.data; //獲取資料
      self.$nextTick(() => {//在DOM已掛載、渲染完成後，執行nextTick()內的程式碼
        //最新消息
        let swiper = new Swiper(".mySwiper", {
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
