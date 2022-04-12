const button = document.getElementById('mode-selector');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const text = document.getElementById('page-title');
const dark_mode = 'dark-mode';

button.addEventListener("click",darkmode);

function darkmode(){
   changeClasses();
   changeText();
}

function changeClasses(){
    const elements = [button,footer,body];
    elements.forEach(element => element.classList.toggle(dark_mode));
}

function changeText(){
    if(button.classList.contains(dark_mode)){
        button.innerHTML = "Light Mode";
        text.innerHTML = "Dark Mode ON"
    }else{
        button.innerHTML = "Dark Mode";
        text.innerHTML = "Light Mode ON"
    }
}