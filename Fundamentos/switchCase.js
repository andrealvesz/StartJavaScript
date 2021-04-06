function calculate(number1, operator, number2){
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        
        case '-':
            result = number1 - number2
            break
        
        case '*':
            result = number1 * number2
            break

        case '/':
            result = number1 / number2
            break
        
        default:
            console.log('Não Implementado')
    }

    return result
}

console.log(calculate(5, '%', 4))