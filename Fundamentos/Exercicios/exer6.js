//Usando método reduce


const alunos = [
    { nome: 'André', nota: 7.3, bolsista: false },
    { nome: 'Fernanda', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 6.2, bolsista: false },
    { nome: 'Ana', nota: 8.2, bolsista: true }
]

const result = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}) //valor que inicia o acumulador)

console.log(result)



// // Desafio 1: Todos os alunos são bolsistas?

// const todosBolsistas = (somaTotal, currentValue) => somaTotal && currentValue;
// console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));
// // Desafio 2: Algum aluno é bolsista?

// const algumAlunoBolsista = (somaTotal, currentValue) => somaTotal || currentValue;
// console.log(alunos.map(a => a.bolsista).reduce(algumAlunoBolsista));