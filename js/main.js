(function () {
const header = document.querySelector('.header');
window.onscroll = () => {
  if (window.pageYOffset > 50) {
    header.classList.add('header_active');
     } else {
       header.classList.remove('header_active')
     }
};
}());


//burger

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const close = document.querySelector('.header__nav-close');
  const menulinks = document.querySelectorAll('.header__link');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
  });
  close.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
  });
  if(window.innerWidth <= 767) {
    for (let i=0; i < menulinks.length; i += 1){
      menulinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
      })
    }
  }
  }());


  //slider

$(function() {
  $('.intro-slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    speed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      }
    ]
  }
  )
})
