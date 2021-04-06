//  1. Declare uma variável de nome weight
// let weight

//  2. Que tipo de dado é a variável acima?
// console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (interger)
        * stars: Number (float)
        * isSubscribed: Boolean
        
*/

// let name, age, stars, isSubscribed

// name = 'Andre'
// age = 26
// stars = 4.6
// isSubscribed = true

// console.log(typeof name, typeof age, typeof stars, typeof isSubscribed)

// console.log(`O ${name} tem ${age} anos`)

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
    
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valors de cada propriedade do objeto
 */

let student = {
    name: 'André',
    age: 26,
    stars: 4.6,
    isSubscribed: true,
    weight: 76.2
}

// console.log(typeof student) 

// console.log(`${student.name}, de idade ${student.age}, pesa ${student.weight} kg.`)

/*
   5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente Array vazio
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copie e cole o objeto, mas use o objeto criado e insera ele no Array)
*/

students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const fernanda = {
    name: 'Fernanda',
    age: 25,
    weight: 59
}

students[1] = fernanda

console.log(students[1])
