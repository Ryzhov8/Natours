const refs = {
  navMenu: document.querySelector(".navigation"),
  navBtn: document.querySelector(".navigation__btn"),
  navLinks: document.querySelectorAll(".navigation__link"),
};

console.log(refs.navLinks);

refs.navBtn.addEventListener("click", () => {
  refs.navMenu.classList.toggle("open");
});

refs.navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    refs.navMenu.classList.remove("open");
  });
});
