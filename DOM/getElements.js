// // getElementsById
// const element = document.getElementById('bodyTitle')
// console.log(element)

// getElementsByClassName
// const elementClass = document.getElementsByClassName("testandojs")
// console.log(elementClass)

// getElementsByTagName
// const elementsTag = document.getElementsByTagName('h1')
// console.log(elementsTag)

// console.log(document.querySelector('#bodyTitle'))

const headerhtml = document.querySelector('header')
headerhtml.setAttribute('id', 'bodyTitle')

const headerTitle = document.querySelector('#bodyTitle')
headerTitle.textContent // += " e Manipulando o conteúdo do texto"
console.log(headerTitle/*.textContent*/)