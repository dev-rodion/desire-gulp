$(function () {
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
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
