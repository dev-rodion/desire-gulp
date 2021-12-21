window.onload = function () {
  const body = document.querySelector("body");
  const headerBtn = document.querySelector(".header__btn");
  const rightsideMenu = document.querySelector(".rightside-menu");
  const rightsideClose = document.querySelector(".rightside-menu__close");
  const darkBg = document.querySelector(".dark-background");

  headerBtn.addEventListener("click", () => {
    rightsideMenu.classList.remove("rightside-menu--close");
    showDarkBg();
  });

  rightsideClose.addEventListener("click", () => {
    rightsideMenu.classList.add("rightside-menu--close");
    hideDarkBg();
  });

  darkBg.addEventListener("click", () => {
    rightsideMenu.classList.add("rightside-menu--close");
    hideDarkBg()
  })

  function showDarkBg() {
    body.style.overflow = "hidden";
    darkBg.classList.add("dark-background--active");
  }
  function hideDarkBg() {
    body.style.overflow = "";
    darkBg.classList.remove("dark-background--active");
  }
};
