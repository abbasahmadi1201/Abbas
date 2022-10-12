const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const modaBtnOpen = document.getElementById("modal-open");
const modalBtnClose = document.getElementById("modal-close");
const modalContainer = document.getElementById("modal-container");


navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

modaBtnOpen.addEventListener("click", function () {
  modalContainer.classList.add("show-modal");
});
modalBtnClose.addEventListener("click", function () {
  modalContainer.classList.remove("show-modal");
});

let subBtn = document.querySelector('.submit-btn');
subBtn.addEventListener('click', function () {
  alert('Your message sent succesfully');
})
