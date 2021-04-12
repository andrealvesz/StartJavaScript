function promiseTrabalhada() {
    return new Promise(function(resolve, reject) {
        resolve('Promise resolvida')
    })
}

promiseTrabalhada().then(message => {
    console.log(message)
})