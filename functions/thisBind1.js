const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

const saudacao = pessoa.falar.bind(pessoa);  //Força o this ao objeto passado na função bind

saudacao();
