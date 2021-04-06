/*
### Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F -32) * 5/9

    F = C * 9/5 + 32
*/

//transformDegree('50F')
function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    //Fluxo de Erro
    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado')
    }

    //Fluxo ideal, F -> C 
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit -32) * 5/9
    let degreeSign = 'C'

    //Fluxo alternativo, C -> F
    if(celsiusExist) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('23C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('6z'))
} catch (error) {
    console.log(error.message)
}







// Minha Resolução
// function transformarCelsiusforFahrenheit(fahrenheit) {
//     let celsiusTransformat = (fahrenheit - 32) * 5 / 9

//     return `Essa é a transformação de celsius para fahrenheint: ${celsiusTransformat} F`
// }

// console.log(transformarCelsiusforFahrenheit(23))


// function transformarFahrenheitforCelsius(celsius) {
//     let fahrenheitTransformat = celsius * 9 / 5 + 32

//     return `Essa é a transformação de fahrenheint para celsius: ${fahrenheitTransformat} C`
// }

// console.log(transformarFahrenheitforCelsius(-5))