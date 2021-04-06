// // function expression or function anonymous
// // parâmetros or parameters

const sum = function(number1, number2){
    // let total = (number1 + number2)
    // return total

    return number1 + number2
}

let number1 = 23
let number2 = 10
let total = sum(number1, number2)

// sum(arguments or argumentos)
// sum(number1, number2) 

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${/*sum(number1, number2)*/ total}`)



// OUTRO EXEMPLO
// nesse exemplo a função é um liquidificador

//nesse primeiro o nome da função é fazerSuco
// function fazerSuco (fruta1, fruta2){
//     return fruta1 + fruta2
// }
// const copo = fazerSuco('banana', 'maça')
// console.log(copo)


//já nesse segundo, a const fazerSuco recebe uma função anonima
// const fazerSuco = function(fruta1, fruta2){
//     return fruta1 + fruta2
// }
// const copo = fazerSuco('laranja', 'morango')
// console.log(copo)