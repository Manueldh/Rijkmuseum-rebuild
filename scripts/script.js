const menuBtn = document.querySelector('#menuBtn');
const navOverlay = document.querySelector('#nav-overlay');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    navOverlay.classList.toggle('visible');
    document.querySelector('body').classList.toggle('menuopen')

    if (navOverlay.classList.contains('visible')) {
        menuBtn.style.backgroundImage = "url('../images/close.svg')";
    } else {
        menuBtn.style.backgroundImage = "url('../images/menu.svg')";
    }
}