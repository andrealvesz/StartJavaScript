function criarProduto(nome, preco) {
    let desconto = preco * 0.1
    let total = preco - desconto

    return {
        nome,
        preco: `Preço c/ desconto R$ ${total.toFixed(2)}`,
        desconto: '10%'
    }
}

console.log(criarProduto('borracha', 2.49))