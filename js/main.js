let screen = document.querySelector('h1');
let btn1 = document.querySelector('.increse');
let btn2 = document.querySelector('.reset');

btn1.onclick = function(){
    screen.textContent = +screen.textContent + 1;
}

btn2.onclick = function(){
    screen.textContent = 0;
}