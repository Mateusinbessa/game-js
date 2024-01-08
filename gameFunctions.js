export function ajustaTamanhoPalcoJogo() {
    let altura = window.innerHeight
    let largura = window.innerWidth
    console.log("Tela do jogo: " + altura, largura)
    return { altura, largura }
}
export function posicaoRandomica(altura, largura) {
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log("Posicao randomica: " + posicaoY, posicaoX)

    let mosquito = document.createElement('img')
    mosquito.src = './images/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}