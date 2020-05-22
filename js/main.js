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

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  // Валидация
  $('#form').validate({
    errorClass: "invalid",
    rules: {

      userName: "required",
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      },
    },
    messages: {
      userName: "Имя обязательно",
      userPhone: "Укажите телефон",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в форме name@domain.ru/com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Контактные данные отправлены, мы скоро перезвоним');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });
  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000');

});