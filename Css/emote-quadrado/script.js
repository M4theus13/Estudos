const boca = document.getElementById('boca');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    let body = document.getElementById('box');
    if (body.style.borderRadius == '0%') {
        body.style.animation = 'on .1s linear';
        body.style.borderRadius = '50%';
        button.style.borderRadius = '0%';
        button.style.backgroundImage = 'url(img/quadrado.png)';
    } else {
        body.style.animation = 'off .1s linear';
        body.style.borderRadius = '0%';
        button.style.borderRadius = '50%';
        button.style.backgroundImage = 'url(img/bola.png)';
    }
});