function toggleMenu() {

    var button = document.getElementById('menu-btn');
    button.classList.toggle('open');
    var slideBar = document.getElementById('slide-bar');
    slideBar.classList.toggle('active');
    var homepage = document.getElementById('home-page-text');
    homepage.classList.toggle('moveUp');
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
