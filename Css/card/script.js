function actived() {
    const card = document.querySelector('.card')
    const button = document.getElementById('read_button')

    card.classList.toggle('active')

    if (card.classList.contains('active')) {
        button.textContent = 'Read Less'
    } else {
        button.textContent = 'Read More'
    }
}
