//LocalStorage
localStorage.setItem('name', 'Matheus')//para verificar oque foi salvo: inspecionar, aplicativo, Armazenamento local
localStorage.getItem('name')

//SessionStorage
sessionStorage.setItem('preferencia', 'carro')
sessionStorage.getItem('preferencia')

//Cookie
document.cookie = 'name=matheus'


console.log(localStorage.getItem('name'))