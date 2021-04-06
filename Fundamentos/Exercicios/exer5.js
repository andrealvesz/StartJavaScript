/*
        Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

const totalCategorys = booksByCategory.length
console.log(totalCategorys)

for (let category of booksByCategory) {
    console.log(`Total de livros dentro da categoria: ${category.category}`)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = []   //criando um array authors para add todos os autores

    for (let category of booksByCategory) {     //o for vai percorrer o array booksbycategory e vai jogar todos os seus elementos dentro do objeto criado (category(novo array))
        for (let book of category.books) {      //o for vai percorrer o books dentro do "novo" objeto do tipo array criado (category.books) e colocara tudo dentro do objeto criado (book)
            if (authors.indexOf(book.author) == -1) {  //indexOf vai identificar a posição do autor dentro do array criado e caso ele não encontre, o push vai add o autor dentro do array
                authors.push(book.author)
            }
        }
    }

    console.log(`Total de autores: ${authors.length}`)
}

countAuthors()

function showBooksAuthor(author) {
    let books = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

showBooksAuthor('Augusto Cury')

