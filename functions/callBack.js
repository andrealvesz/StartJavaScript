// callback function

function sayMyName(name) {
    console.log('antes de executar uma função callback')

    name()

    console.log('depois de executar uma função callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)