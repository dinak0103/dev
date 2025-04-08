const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('toggle'),
      navClose = document.getElementById('nav-close'),
      overlay = document.getElementById('overlay');

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
        overlay.style.display = 'block';
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
        overlay.style.display = 'none';
    })
}

const navLink = document.querySelectorAll('.menu__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


