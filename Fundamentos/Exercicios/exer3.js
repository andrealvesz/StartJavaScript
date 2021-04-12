/*
### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    * receitas: []
    * despesas: []
    
Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

let family = {
    receitas: [2250, 500, 360.45],
    despesas: [263.9, 187.5, 210, 97.9, 1440]
}


//criar uma função que soma os elementos do array
function sum(array) {
    let total = 0

    // for (let value of array) {  //crio um for para percorrer todo o array e pegar os valores dentro dele
    //     total += value      //atribuir os valores do array ao total
    // }

    array.forEach(value => {
        total += value 
    });

    return total
}

function calcReceitasDespesas() {
    // somar as receitas
    let totalReceitas = sum(family.receitas)

    // somar as despesas
    let totalDespesas = sum(family.despesas)

    // calcular e verificar o saldo
    let saldoTotal = totalReceitas - totalDespesas

    let status;
    let statusPositivo = saldoTotal >= 0
    let statusNegativo = saldoTotal < 0

    if (statusPositivo) {
        status = 'Positivo'
    } else if (statusNegativo) {
        status = 'Negativo'
    }

    // return saldo com uma mensagem
    return `Seu saldo é ${status}: R$ ${saldoTotal.toFixed(2)}`
}

console.log(calcReceitasDespesas())