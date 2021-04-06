// function splitString(stringToSplit, separator) {
//     let arrayOfStrings = stringToSplit.split(separator); //arrayOfStrings irá receber a frase sem o separador que foi passado.

//     console.log('A string original é: "' + stringToSplit + '"');
//     console.log('O separador é: "' + separator + '"');
//     console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));
// }

// let tempestString = 'Oh brave new world that has such people in it.';
// let monthString = 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez';
// let space = ' ';
// let comma = ',';

// splitString(tempestString, space);
// splitString(monthString, comma);

// OUTRO EXEMPLO =============================================

function dividirString(fraseParaDividir, separator) {
    let jogandoDentroDoArray = fraseParaDividir.split(separator)

    console.log(`A frase original é "${fraseParaDividir}"`)
    console.log(`A frase vai ser dividida pelo separador:"${separator}"`)
    console.log(`O array formado tem ${jogandoDentroDoArray.length} elementos`)
    console.log(`A frase original, ficara assim: "${jogandoDentroDoArray.join('_')}"`)
}

let frase = 'praticando um exercicío de dividir frases ou palavras, colocando a divisão dentro de um array.'
let separador  = ' '

dividirString(frase, separador)

/*
// OUTRA FORMA DE FAZER (FUNCTION EXPRESSION JUNTO COM ARROW FUNCTION)=========================================================

    // const dividirString = (fraseParaDividir, separator) => {
    //     console.log(`A frase original é "${fraseParaDividir}"`)
    //     console.log(`A frase vai ser dividida pelo separador:"${separator}"`)
    //     return fraseParaDividir.split(separator)
    // }

    // let frase = 'praticando um exercicío de dividir frases ou palavras, colocando a divisão dentro de um array.';
    // let separador = ' ';
    // let jogandoDentroDoArray = dividirString(frase, separador);

    // console.log(`A frase original, ficara assim: "${jogandoDentroDoArray.join('_')}"`)
    // console.log(`O array formado tem ${jogandoDentroDoArray.length} elementos`)
*/