const logou = document.getElementsByClassName('logou');

const factoryFunction = (nome) => {
	return {
		logou: () => {
			alert(`o usuario ${nome} logou`)
		},
		deslogou: () => {
			alert(`o usuario ${nome} deslogou`)
		},
	}
}
factoryFunction('matheus').logou();