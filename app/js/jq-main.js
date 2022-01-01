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
