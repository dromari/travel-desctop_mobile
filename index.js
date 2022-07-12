(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navigation-mobile');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__navigation-mobile_active')
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__navigation-mobile_active')
    });
    }());

    