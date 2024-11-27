const modalwindow = document.querySelector(".overlay");
const overlay = document.querySelector(".overlay");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modalwindow.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalwindow.classList.contains("hidden")) {
    overlay.classList.add("is-hidden");
  }
});
