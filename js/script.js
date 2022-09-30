const btnMobile = document.querySelector('nav');
btnMobile.addEventListener('click', () => {
    console.log(btnMobile.classList.toggle('active'));
});

addEventListener('scroll', () => {
    btnMobile.classList.remove('active');
})

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
