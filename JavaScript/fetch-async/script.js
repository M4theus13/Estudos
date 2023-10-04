const init = fetch('https://api.coingecko.com/api/v3/exchange_rates', {mode: 'cors'}).then((data) => {
	return data.json()
})


// async & await
async function getCoinData(){
	try{
		const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates')
		const json = await data.json()
		console.log(json)
	}catch(erro){
		console.log(erro)
	}
}

getCoinData()