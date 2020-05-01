(function () {
  var mySwiper = new Swiper('#trainers', {
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper = new Swiper('#reviews', {
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 0,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

})();