const swiper = new Swiper('.swiper', {
  spaceBetween: 20,         // gap entre cards
  loop: true,               // loop infinito
  autoplay: {delay: 3000},// autoplay
  pagination: {clickable: true},
  breakpoints: {
      // tablets
    1024: { slidesPerView: 4 },  // desktop
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 } 
  }
});