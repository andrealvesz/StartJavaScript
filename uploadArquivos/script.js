async function enviar() {
    let arquivo = 
        document
            .getElementById('arquivo').files;
            

    let body = new FormData();
    body.append('title', 'bla bla bla');
    body.append('arquivo', arquivo);

    let req = await fetch('url', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

document
    .getElementById('buttonEnviar')
    .addEventListener('click', enviar);