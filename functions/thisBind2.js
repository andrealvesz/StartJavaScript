// Em uma arrow function o this nunca vai variar

// function Pessoa() {
//     this.idade = 0;

//     setInterval(() => {
//         this.idade++
//         console.log(this.idade)
//     }, 1000)
// }

// new Pessoa

// Em uma function normal tem que ter o bind ou utilizar outra estratégia como criar uma const armazendo o this.
function Pessoa() {
    this.idade = 0;
    const self = this;

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa