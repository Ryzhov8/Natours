const refs = {
  navMenu: document.querySelector(".navigation"),
  navBtn: document.querySelector(".navigation__btn"),
  navLinks: document.querySelectorAll(".navigation__link"),
  modalBtn: document.querySelectorAll("[data-open-modal]"),
  backdrop: document.querySelector(".backdrop"),
  modal: document.querySelector(".modal"),
  modalCloseBtn: document.querySelector(".modal__close-btn"),
};

refs.navBtn.addEventListener("click", () => {
  refs.navMenu.classList.toggle("open");
});

refs.navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    refs.navMenu.classList.remove("open");
    closeModal();
  });
});

refs.modalBtn.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

function onBackdropClick(e) {
  if (e.target.className === "backdrop") {
    closeModal();
  }
}

function closeModal() {
  refs.backdrop.classList.add("is-hidden");
  document.body.classList.remove("modal-open");
  refs.backdrop.removeEventListener("click", onBackdropClick);
  refs.modalCloseBtn.removeEventListener("click", closeModal);
  document.removeEventListener("keydown", onEscPress);
}

function openModal() {
  refs.backdrop.classList.remove("is-hidden");
  document.body.classList.add("modal-open");
  refs.backdrop.addEventListener("click", onBackdropClick);
  refs.modalCloseBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", onEscPress);
}

function onEscPress(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}
