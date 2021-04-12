function requisitar() {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const params = {
        method: 'POST',   //method: 'get' é o padrão
        body: JSON.stringify({
            nome: 'André',
            idade: 26
        })
    }

    fetch(url, params/*params*/)
        .then( resposta => {
            resposta.json()  //resposta vai retornar um json que espera uma promise
        })
        .then(json => {
            console.log(json)
        })

        console.log('Alguma coisa')
}

async function requisitar2(){
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const params = {
        method: 'POST',   //method: 'get' é o padrão
        body: JSON.stringify({
            nome: 'André',
            idade: 26
        })
    }

    const resposta = await fetch(url, params)
    const json  = await resposta.json() 

    console.log(json)
    console.log('Alguma coisa')
}

requisitar()