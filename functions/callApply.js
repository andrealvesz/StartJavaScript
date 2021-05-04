function getPreco(imposto = 0, moeda = 'R$') {
    let totalPreco = `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
    return totalPreco
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
console.log(produto.getPreco())

//A diferença entre call e apply é a forma que é passado os paramentros

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))  // os parametros são passados na forma de um array