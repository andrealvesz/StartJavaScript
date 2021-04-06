// Criando e adicionando Elementos

//createElement

const div = document.createElement('div')
div.innerHTML = '<strong>Criando e Adicionando</strong> elementos pelo JS'

// append(adiciona o elemento no final(lastchild)) prepend(adiciona o elemento no começo(firstchild))

const body = document.querySelector('body')
// body.append(div)

// insertBefore adiciona o elemento antes do elemento especificado
const script = body.querySelector('script')
body.insertBefore(div, script) //Dentro do body, insira o novo elemento criado antes da tag script

const header = document.querySelector('header')  //macete pra inserir o novo elemento após o elemento especificado.
body.insertBefore(div, header.nextSibling)
