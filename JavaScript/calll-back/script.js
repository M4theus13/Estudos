function sayMyName(name) {
    console.log('Antes do callback')

    name()

    console.log('Depois do callback')
}

sayMyName( () => {
    console.log('Estou no callback')
})
