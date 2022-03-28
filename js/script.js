const btnMobile = document.querySelector('nav');
btnMobile.addEventListener('click', () => {
    btnMobile.classList.toggle('active');
});


//----Scroll Suave
const menuItems = document.querySelectorAll('.header-menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}
//-------------------------------
