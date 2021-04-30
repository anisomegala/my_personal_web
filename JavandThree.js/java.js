
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

const navSlide = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');

    menuBtn.addEventListener('click', () => {
        //toggle nav

        nav.classList.toggle('nav-active');



        // animate links
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `naLinksFade 0.5s ease forwards ${index / 9 + 0.7}s`
            }
        });

    });

}

navSlide();


// function to open and close menus

function Menus(open, close) {
    const container = document.querySelector(open);
    const containerShow = document.querySelector(close);
    container.addEventListener('click', () => {
        if (containerShow.style.display === 'none') {
            containerShow.style.display = 'flex';
        } else {
            containerShow.style.display = 'none';
        }
    });
}
Menus('.musicmenu', '.myMusic');
Menus('.videomenu', '.videoCarousel');
Menus('.projectsmenu', '.projects');
Menus('.gallerymenu', '.gallery');


// animation paralax 

function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function () {
    parallax('h1', window.scrollY, 0.5);
});











