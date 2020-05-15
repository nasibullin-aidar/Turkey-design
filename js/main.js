
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const modalClose = document.querySelector('[data-toggle=close]');

  modalBtn.forEach(function (element) {
    element.addEventListener('click', function () {
      modal.classList.toggle('modal--visible');

    });
  
  });
  modalClose.addEventListener('click', function () {
    modal.classList.toggle('modal--visible')
  });
});