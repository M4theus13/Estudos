const boxCookies = document.querySelector('.cookies-box')

function accept() {
  localStorage.cookies = "salvo"
  boxCookies.classList.remove('show')
  boxCookies.classList.remove('display')
}

if (localStorage.cookies == "salvo") {
  boxCookies.classList.remove('show')
} else {
  boxCookies.classList.add('show')
}