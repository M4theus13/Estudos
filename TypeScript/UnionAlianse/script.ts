
interface ocupacao {
    trabalho?: string, //
    local?: string
}

interface pessoa {
    nome: string,
    idade: number,
    cidade: string
}

type dados = pessoa & ocupacao

const meu: dados = {
    nome: 'Matheus',
    idade: 18,
    cidade: 'Itumbiara'
}

let valor: number | string = 'Matheus'

valor = 30