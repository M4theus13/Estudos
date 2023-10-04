
interface endereco {
    cidade: string,
    estado: string
}

interface ocupacao {
    trabalho: string,
    local: string
}

interface pessoa {
    nome: string,
    idade: number,
    endereco?: endereco,
    ocupacao: ocupacao
}

const pessoa: pessoa = {
    nome: 'Matheus',
    idade: 18,
    endereco: {
        cidade: 'Itumbiara',
        estado: 'GO'
    },
    ocupacao: {
        trabalho: 'Programador',
        local: 'Empresa'
    }
}