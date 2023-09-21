const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".openModalButton");
const closeModalBtn = document.querySelector(".closeModalButton");
const overlay = document.querySelector(".overlay");

openModalBtn.addEventListener("click", () => {
  modal.classList.toggle("modal-open");
  overlay.classList.toggle("overlay-active");
});
closeModalBtn.addEventListener("click", () => {
  modal.classList.toggle("modal-open");
  overlay.classList.toggle("overlay-active");
});
