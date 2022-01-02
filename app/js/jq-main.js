$(function () {
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".contact__slider").slick({
    slidesToShow: 10,
    slidesToScroll: 5,
    dots: true,
    arrows: false,
    infinite: false
  });

  $(".blog__item-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: "<button class='slider-arrow slider-arrow--prev'><img src='images/arrow-back.svg' alt='prev'/></button>",
    nextArrow: "<button class='slider-arrow slider-arrow--next'><img src='images/arrow-next.svg' alt='next'/></button>"
  });

  if ($(".gallery__inner").length !== 0) {
    const galleryMixer = mixitup(".gallery__inner", {
      load: {
        filter: ".living",
      },
      animation: {
        effects: "fade",
        effectsIn: "fade",
      },
    });
  }

  $('[data-fancybox="gallery"]').fancybox();

  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 0,
      showinfo: 0,
    },
  });
});
