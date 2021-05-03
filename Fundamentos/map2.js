const carrinho = [
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 13.90}',
    '{"nome": "Kit de Lápis", "Preco": 41.22}',
    '{"nome": "Caneta", "Preco": 7.50}'
]

// Retornar um array apenas com os preços
const precos = carrinho.map(produto => `R$ ${JSON.parse(produto).Preco.toFixed(2).replace('.', ',')}`)
console.log(precos)


//ou 
// const paraObjeto = json => JSON.parse(json);
// const apenasPrecos = produto => `R$ ${produto.Preco.toFixed(2).replace('.', ',')}`

// const result = carrinho.map(paraObjeto).map(apenasPrecos)
// console.log(result)