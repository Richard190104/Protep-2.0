function toggleMenu() {

    var button = document.getElementById('menu-btn');
    button.classList.toggle('open');
    var slideBar = document.getElementById('slide-bar');
    slideBar.classList.toggle('active');
    var homepage = document.getElementById('home-page-text');
    homepage.classList.toggle('moveUp');
    if (slideBar.classList.contains('active')) {
        slideBar.style.animation = 'slideIn 0.5s forwards';
    } else {
        slideBar.style.animation = 'slideOut 0.5s forwards';
    }

    
}


