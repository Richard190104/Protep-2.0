function toggleMenu() {

    var button = document.getElementById('menu-btn');
    button.classList.toggle('open');
    var slideBar = document.getElementById('slide-bar');
    slideBar.classList.toggle('active');
    var homepage = document.getElementById('home-page-text');
    if (slideBar.classList.contains('active')) {
        slideBar.style.animation = 'slideIn 1s forwards';
    } else {
        slideBar.style.animation = 'slideOut 1s forwards';
    }

    
}

function copyrequests(){
    const parent = document.getElementById('here');
    const textarea = document.getElementById('requests');
    const chosen = parent.querySelectorAll('.active');
    textarea.value = 'Mám záujem o tieto služby:'
    chosen.forEach(element => {
        textarea.value +=  '\n' + element.id;
    });
    
}


function toggleChoice(button){
    button.classList.toggle('active');
    const contact = document.getElementById('c-button');

    const elements = document.querySelectorAll('.active');
    if(elements.length === 0){
        contact.classList.remove('show');
        const textarea = document.getElementById('requests');
        textarea.value = '';

    }
    else{
        
        contact.classList.add('show');
    }
    
}

let currentIndex = 0;

function slideLeft() {
    const slider = document.getElementById('picture-slider');

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 3 - 1; // Loop to the last image
    }
    updateSlider();
}

function slideRight() {
    const slider = document.getElementById('picture-slider');
    if (currentIndex < 3 - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to the first image
    }
    updateSlider();
}

function updateSlider() {
   
    const slider = document.getElementById('picture-slider');
    const newTransform = `translateX(${-currentIndex * 100}%)`;
    slider.style.transition = 'transform 0.5s ease'; 
    slider.style.transform = newTransform;
}

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.load');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
               
            }
            else{
                entry.target.classList.remove('show');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    items.forEach(item => {
        observer.observe(item);
    });
});



