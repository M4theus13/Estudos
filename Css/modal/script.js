const button = document.getElementById('button')
const boxModal = document.getElementById('box-modal')
const sair = document.getElementById('sair')

function modal() {

  const boxModal = document.getElementById('box-modal')
  boxModal.classList.add('active')

  boxModal.addEventListener('click', (e) => {
    if (e.target.id == 'box-modal' || e.target.id == "sair"){
      boxModal.classList.remove('active')
      localStorage.fechaModal = '.box-modal'
    }
  })
}


