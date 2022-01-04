$(function () {

  $(window).on("load resize", function(){
    if ($(window).width() <= 540) {
      $('.works-path__item--measurements').appendTo($('.works-path__items-box'));
    } else {
      $('.works-path__item--measurements').appendTo($('.works-path__inner'));
    }
  });

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
    infinite: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: true,
          prevArrow: "<button class='slider-arrow slider-arrow--prev'><img src='images/arrow-back.svg' alt='prev'/></button>",
          nextArrow: "<button class='slider-arrow slider-arrow--next'><img src='images/arrow-next.svg' alt='next'/></button>"
        }
      }
    ]
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
