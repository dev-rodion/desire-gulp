window.onload = function () {
  const body = document.querySelector("body");
  const headerBtn = document.querySelector(".header__btn");
  const rightsideMenu = document.querySelector(".rightside-menu");
  const rightsideClose = document.querySelector(".rightside-menu__close");
  const darkBg = document.querySelector(".dark-background");
  const menuBtn = document.querySelector(".header__btn-menu");
  const menus = document.querySelectorAll(".menu");

  headerBtn.addEventListener("click", () => {
    rightsideMenu.classList.remove("rightside-menu--close");
    showDarkBg();
  });

  rightsideClose.addEventListener("click", () => {
    rightsideMenu.classList.add("rightside-menu--close");
    hideDarkBg();
  });

  darkBg.addEventListener("click", () => {

    if (!rightsideMenu.classList.contains("rightside-menu--close")) {
      rightsideMenu.classList.add("rightside-menu--close");
    }

    if (menuBtn.classList.contains("header__btn-menu--active")) {
      hideMenu()
    }
    
    hideDarkBg()
  })

  menuBtn.addEventListener("click", function () {
    if (this.classList.contains("header__btn-menu--active")) {
      hideMenu()
    } else {
      showMenu()
    }
  })

  function showMenu() {
    for (const menu of menus) {
      menu.classList.add('menu--open')
    }
    menuBtn.classList.add('header__btn-menu--active')
    body.style.overflow = "hidden";
    showDarkBg()
  }
  function hideMenu() {
    for (const menu of menus) {
      menu.classList.remove('menu--open')
    }
    menuBtn.classList.remove('header__btn-menu--active')
    body.style.overflow = "";
    hideDarkBg()
  }

  function showDarkBg() {
    body.style.overflow = "hidden";
    darkBg.classList.add("dark-background--active");
  }
  function hideDarkBg() {
    body.style.overflow = "";
    darkBg.classList.remove("dark-background--active");
  }
};