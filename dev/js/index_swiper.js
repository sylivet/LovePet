var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });

  