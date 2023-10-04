let button = document.getElementById('play');
let text = document.getElementById('text');
button.addEventListener('click',() => {
    let interacao = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(interacao);
});