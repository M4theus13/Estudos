const carrosselBoxControls = document.querySelector('.box-buttons')
const carrosselButtons = ['voltar', 'proximo']
const carrosselItems = document.querySelectorAll('.imgs')

class Carrossel {

    constructor (control, item) {
        this.carrosselControl = control
        this.carrosselItem = [...item]
    }

    attCarrossel() {
        this.carrosselItem.forEach(el => {
            el.classList.remove('img-1')
            el.classList.remove('img-2')
            el.classList.remove('img-3')
            el.classList.remove('img-4')
            el.classList.remove('img-5')
            el.classList.remove('img-6')
        });

        this.carrosselItem.slice(0, 6).forEach((el, i) => {
            el.classList.add(`img-${i+1}`)
        })
    }

    setDirecao(dir) {
        if (dir.classList == 'button-voltar') {
            this.carrosselItem.unshift(this.carrosselItem.pop())
        } else {
            this.carrosselItem.push(this.carrosselItem.shift())
        }
        this.attCarrossel()
    }

    useControle() {
        const gatilho = [...carrosselBoxControls.childNodes]
        gatilho.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.setDirecao(control)
            })
        })
    }
}

const carrossel = new Carrossel(carrosselBoxControls, carrosselItems)

carrossel.useControle()