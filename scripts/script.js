const sliderDescription = new Swiper('.description__slider', {
   navigation: {
      nextEl: '.description__slider-button-next',
      prevEl: '.description__slider-button-prev',
   },
   slidesPerView: 1,
   loop: true,
});

const buttonForm = document.querySelector('.footer__button')
const form = document.querySelector('.footer__form')
const input = document.querySelector('.footer__input')

function onclickButton (evt) {
   evt.preventDefault();
   buttonForm.classList.add('footer__button_aktive')
}
form.addEventListener('click', onclickButton);

function okButton () {
   buttonForm.classList.remove('footer__button_aktive');
   input.value = '';
   input.placeholder = 'Круто!';
}
buttonForm.addEventListener('click', okButton);


