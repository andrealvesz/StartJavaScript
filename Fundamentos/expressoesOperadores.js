/*
    - Expressions
    - Operators
        Binary
        Unary
        Ternary    
*/

function Pessoa(name, idade, altura){
    this.nome = name
    this.idade = idade
    this.tamanho = altura
}

let nome = new Pessoa('André', 26, 1.7);
console.log(nome.idade)

