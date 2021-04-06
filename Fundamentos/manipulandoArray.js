/*
    // Criando Array sem e com construtor

    // Sem construtor
    // let myArray = [0, 1, 2, 3]
    // console.log(myArray)

    // Com Construtor
    // let myArray = new Array(0, 1, 2, 3, 'etc')
    // console.log(myArray.)

*/

/*
    // Transformar uma cadeia de caracteres em elementos de um Array

    // let word = "manipulação"
    // console.log(Array.from(word))
 */


    let techs = new Array('html', 'css', 'js')

// adicionar um item no fim
techs.push('nodejs')

// adicionar no começo
techs.unshift('react')

// remover do fim
// techs.pop()

// remover do começo
// techs.shift()

// pega somente alguns elementos do Array
// console.log(techs.slice(1, 3))

// remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)