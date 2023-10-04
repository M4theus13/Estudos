const passwordEye = document.getElementById('password-eye');
const inputSenha = document.querySelector('input[type="password"]');
console.log(passwordEye)

passwordEye.addEventListener('click', ()=> {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
        passwordEye.style.backgroundImage = 'url(https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Eye-Show-View-Watch-See-512.png)';
    } else {
        inputSenha.type = 'password';
        passwordEye.style.backgroundImage = 'url(https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-4/24/ic_fluent_eye_hide_24_regular-512.png)';
    }
});