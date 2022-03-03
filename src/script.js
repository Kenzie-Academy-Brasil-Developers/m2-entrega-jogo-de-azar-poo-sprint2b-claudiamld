const btn = document.querySelector('button')
const body = document.body.querySelector('body')

const mensagens = [
    'Você ainda não está preparado para isso!', 
    'Isso irá acontecer em breve!',
    'Desista enquanto há tempo!',
    'No fundo, você sabe a resposta'
]

function textoMensagem(){
    const random = Math.floor(Math.random() * (4 - 0) + 0 )
    console.log(random);
    switch (random) {
        case 0:
            return `${mensagens[0]}`
            break;
        case 1:
            return `${mensagens[1]}`
            break;
        case 2:
            return `${mensagens[2]}`
            break;
        case 3:
            return `${mensagens[3]}`
            break;
    }
}

function renderizarMensagem(){
    const divMensagem = document.querySelector('#mensagem')
    divMensagem.innerHTML = ''
    const span = document.createElement('span')
    span.innerText = textoMensagem()
    divMensagem.appendChild(span)
}

btn.addEventListener('click', renderizarMensagem)