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


const playBtn = document.getElementById('playBtn');
const videoPopup = document.getElementById('videoPopup');
const videoThumb = document.getElementById('videoThumb');

videoThumb.addEventListener('click', () => {
    videoPopup.style.display = 'flex';
  });

playBtn.addEventListener('click', () => {
  videoPopup.style.display = 'flex';
});

videoPopup.addEventListener('click', () => {
  videoPopup.style.display = 'none';
  document.getElementById('youtubePlayer').src = document.getElementById('youtubePlayer').src; // stop video
});
