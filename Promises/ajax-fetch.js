const url = "https://alunos.b7web.com.br/api/ping"
const params = {
    method: 'POST',   //method: 'get' é o padrão
    body: JSON.stringify({
        nome: 'André',
        idade: 26
    })
}

fetch(url, /*params*/)
    .then( resposta => {
        resposta.json()  //resposta vai retornar um json que espera uma promise
    })
    .then(json => {
        console.log(json)
    })