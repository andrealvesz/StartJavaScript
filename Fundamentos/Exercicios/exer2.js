/*
###Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -  A 
* de 80 - 89      -  B
* de 70 - 79      -  C
* de 60 - 69      -  D
* menor que 60    -  F

*/

function getScore(nota) {
    const notaA = nota >= 90 && nota <= 100
    const notaB = nota >= 80 && nota <= 89
    const notaC = nota >= 70 && nota <= 79
    const notaD = nota >= 60 && nota <= 69
    const notaF = nota < 60 && nota >= 0

    let notaFinal

    if (notaA) {
        notaFinal = 'A'
    } else if (notaB) {
        notaFinal = 'B'
    } else if (notaC) {
        notaFinal = 'C'
    } else if (notaD) {
        notaFinal = 'D'
    } else if (notaF) {
        notaFinal = 'F'
    } else {
        notaFinal = 'Nota inválida'
    }

    return(notaFinal)
}

console.log(getScore(100))
console.log(getScore(88))
console.log(getScore(77))
console.log(getScore(66))
console.log(getScore(90))
console.log(getScore(101))
console.log(getScore(48))
console.log(getScore(-1))
