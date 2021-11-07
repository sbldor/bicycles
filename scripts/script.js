const sliderDescription = new Swiper('.description__slider', {
   navigation: {
      nextEl: '.description__slider-button-next',
      prevEl: '.description__slider-button-prev',
   },
   slidesPerView: 1,
   loop: true,
});

const sliderBicycles = new Swiper('.cards', {
   pagination: {
      el: '.cards__pagination',
      clickable: true,
   },
   slidesPerView: 3,
   // spaceBetween: 20,
   slidePerGroup: 1,
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 150,
      },

      600: {
         slidesPerView: 1,
         spaceBetween: 150,
      },

      901: {
         slidesPerView: 2,
         spaceBetween: 150,
      },


      1041: {
         slidesPerView: 2,
         spaceBetween: 100,
      },
      
      1061: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   },
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

const iconBurger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.header__menu');
const body = document.querySelector('.page')

iconBurger.addEventListener('click', function (){
   iconBurger.classList.toggle('header__burger_active');
   menuBurger.classList.toggle('header__menu_active');
   body.classList.toggle('page_locked');
   menuBurger.addEventListener('click', function (e) {
      if (e.target.matches('.header__title')) {
         iconBurger.classList.remove('header__burger_active');
         menuBurger.classList.remove('header__menu_active');
         body.classList.remove('page_locked');
      }
   });
});

let tab = function () {
   let tabNav = document.querySelectorAll('.bicycle__button'),
      tabContent = document.querySelectorAll('.cards'),
      tabButton = document.querySelector('.bicycle__content'),
      tabName;

   tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
   });

   function selectTabNav() {
      tabNav.forEach(item => {
         item.classList.remove('bicycle__button_active')
      });
      this.classList.add('bicycle__button_active');
      tabButton.textContent = this.textContent;
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
   }

   function selectTabContent(tabName) {
      tabContent.forEach(item => {
         item.classList.contains(tabName) ? item.classList.add('cards_active') : item.classList.remove('cards_active')
      })
   }

}
tab();

const buttonSwitherHeader = document.querySelector('.header__switcher-ball');
const buttonSwitherFooter = document.querySelector('.footer__switcher-ball');
const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const menuBurgerDark = document.querySelector('.header__burger-menu');
const menuBurgerAfler = document.querySelector('.header__burger');
const headerLinks = document.querySelectorAll('.header__title');
const infoTitle = document.querySelector('.info__title');
const infoSubtitle = document.querySelector('.info__subtitle');
const infoBicycle = document.querySelector('.info__bicycle');
const quoteTitle = document.querySelector('.quote__title');
const quoteName = document.querySelector('.quote__name');
const quoteInfo = document.querySelector('.quote__info');
const descriptionButtonLeft = document.querySelector('.description__button-left');
const descButtonLeftDark = 'image/desk-button-left-dark.svg';
const descButtonLeft = 'image/button-left.svg';
const descriptionButtonRight = document.querySelector('.description__button-right');
const descButtonRightDark = 'image/desk-button-right-dark.svg';
const descButtonRight = 'image/button-right.svg';
const descTitlt = document.querySelectorAll('.description__title');
const descSubtitlt = document.querySelectorAll('.description__subtitle');
const bicycleTitle = document.querySelector('.bicycle__title');
const bicycleButton = document.querySelectorAll('.bicycle__button');
const bicycleButtonActive = document.querySelector('.bicycle__button_active');
const cardInfo = document.querySelectorAll('.cards__info');
const cards = document.querySelectorAll('.cards');
const trainingTitle = document.querySelector('.training__title');
const trainingSubtitle = document.querySelector('.training__subtitle');
const trainingApps = document.querySelectorAll('.training__app');
const footer = document.querySelector('.footer');
const footerTitle = document.querySelector('.footer__title');
const footerForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__input');
const footerButton = document.querySelector('.footer__button')
const footerCopy = document.querySelector('.footer__copy')
const switcherSun = document.querySelectorAll('.switcher__sun');
const switcherOval = document.querySelectorAll('.switcher__oval');
const switcherMoon = document.querySelectorAll('.switcher__moon');
const sunLight = 'image/sun.svg';
const sunDark = 'image/sun-dark.svg';
const ovalLight = 'image/oval.svg';
const ovalDark = 'image/oval-dark.svg';
const moonLight = 'image/moon.svg';
const moonDark = 'image/moon-dark.svg';



let dark = function () {
   buttonSwitherHeader.addEventListener('click', ball);
   buttonSwitherFooter.addEventListener('click', ball);
   function ball () {
      buttonSwitherHeader.classList.toggle('header__switcher-ball_dark');
      buttonSwitherFooter.classList.toggle('footer__switcher-ball_dark');
      body.classList.toggle('page_dark');
      header.classList.toggle('header_dark');
      menu.classList.toggle('header__menu_dark');
      menuBurgerDark.classList.toggle('header__burger-menu_dark');
      menuBurgerAfler.classList.toggle('header__burger_dark');
      headerLinks.forEach(item => {
         item.classList.toggle('header__title_dark')
      });
      infoTitle.classList.toggle('info__title_dark');
      infoSubtitle.classList.toggle('info__subtitle_dark');
      infoBicycle.classList.toggle('info__bicycle_dark');
      quoteTitle.classList.toggle('quote__title_dark');
      quoteName.classList.toggle('quote__name_dark');
      quoteInfo.classList.toggle('quote__info_dark');
      removeIcon(descriptionButtonLeft, descButtonLeft, descButtonLeftDark);
      removeIcon(descriptionButtonRight, descButtonRight, descButtonRightDark);
      descTitlt.forEach(item => {
         item.classList.toggle('description__title_dark')
      });
      descSubtitlt.forEach(item => {
         item.classList.toggle('description__subtitle_dark')
      });
      bicycleTitle.classList.toggle('bicycle__title_dark');

      bicycleButton.forEach(item =>{
         item.classList.toggle('bicycle__button_dark');
      });
      cardInfo.forEach(item => {
         item.classList.toggle('cards__info_dark');
      });
      trainingTitle.classList.toggle('training__title_dark');
      trainingSubtitle.classList.toggle('training__subtitle_dark');
      trainingApps.forEach(item => {
         item.classList.toggle('training__app_dark')
      });
      footer.classList.toggle('footer_dark');
      footerTitle.classList.toggle('footer__title_dark');
      footerForm.classList.toggle('footer__form_dark');
      footerInput.classList.toggle('footer__input_dark');
      footerButton.classList.toggle('footer__button_dark');
      footerCopy.classList.toggle('footer__copy_dark')
      switcherSun.forEach(item => {
         removeIcon(item, sunLight, sunDark)
      });
      switcherOval.forEach(item => {
         removeIcon(item, ovalLight, ovalDark)
      });
      switcherMoon.forEach(item => {
         removeIcon(item, moonLight, moonDark)
      });
      cards.forEach(item => {
         item.classList.toggle('cards_dark')
      })
   }
}
dark();

console.log(descriptionButtonLeft.src)

function removeIcon (obj, img1, img2) {
   if (obj.getAttribute('src') === img1) {
      obj.src = img2
   } else {
      obj.src = img1
   }
}