const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".modal-btn-open");
const closeModalBtn = document.querySelector(".modal-btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("is-hidden");
  overlay.classList.add("is-hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("is-hidden");
  overlay.classList.remove("is-hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);

// overlay.addEventListener("click", closeModal);

//--------------------------------------------------
