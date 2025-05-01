const swiper = new Swiper('.js-testimonials-slider', {
    loop: true,
    pagination: {
      el: '.js-testimonials-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });