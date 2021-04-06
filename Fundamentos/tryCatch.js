// throw  "dispara, lança"

function sayMyName(name = ''){
    if (name === '') {
        throw new Error('Nome é obrigatório')
    }

    console.log(name)
}

// try(tentar)...catch(capturar)  

try {
    sayMyName('André')
} catch (error) {
    console.log(error)
}

console.log("após o try/catch")