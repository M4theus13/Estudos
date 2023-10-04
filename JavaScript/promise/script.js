const promise = new Promise((resolve, reject) => {
	let condicao = false;

	//codigo para resolver a promise

	if (condicao) {
		resolve('resolvido')
	} else {
		reject('erro')
	}
})

//then é para quando a promise for resolvida
//catch é caso a promise não seja resolvida


promise.then((resultado) =>{
	console.log(resultado)
}).catch((error) => {
	console.log(error)
})