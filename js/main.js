

(function () {
    var header = document.querySelector('.header');
    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
})();

//burger

(function () {
    var burgerItem = document.querySelector('.burger');
    var menu = document.querySelector('.header__nav');
    var close = document.querySelector('.header__nav-close');
    var menulinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', function () {
        menu.classList.add('header__nav_active');
    });
    close.addEventListener('click', function () {
        menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth <= 767) {
        for (var i = 0; i < menulinks.length; i += 1) {
            menulinks[i].addEventListener('click', function () {
                menu.classList.remove('header__nav_active');
            });
        }
    }
})();

