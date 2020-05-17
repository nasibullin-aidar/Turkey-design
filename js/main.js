//  document.addEventListener("DOMContentLoaded", function (event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const modalClose = document.querySelector('[data-toggle=close]');

//   modalBtn.forEach(function (element) {
//     element.addEventListener('click', function () {
//       modal.classList.toggle('modal--visible');

//     });

//   });
//   modalClose.addEventListener('click', function () {
//     modal.classList.toggle('modal--visible')
//   });
// });

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');


  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
  

});