const modalwindow = document.querySelector(".overlay");
const overlay = document.querySelector(".overlay");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const modalBtnOpen2 = document.querySelector(".modal-btn-open2");

const toggleModal = () => modalwindow.classList.toggle("is-hidden");
const toggleModal2 = () => modalwindow.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

modalBtnOpen2.addEventListener("click", toggleModal2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalwindow.classList.contains("is-hidden")) {
    overlay.classList.add("is-hidden");
  }
});
