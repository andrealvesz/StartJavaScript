/*
    Function() constructor

        * expressão new
        * criar um novo objeto
        * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando."
    }
}

const André = new Person('André')
const Fernanda = new Person('Fernanda')

console.log(André.walk(), Fernanda.walk())


// let nome = new Date("2021-03-31")
// console.log(nome)