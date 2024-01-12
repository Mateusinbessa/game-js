let lifes = 1
let time = 10
function adjustSizeOfGameContainer() {
    //Adjusts the size of the game stage based on the height and width of the window.
    let height = window.innerHeight
    let width = window.innerWidth
    
    //Logging the height and the width of the window
    console.log("Tela do jogo: " + height, width)

    //Returning the height and the width as an object!
    return { height, width }
}

function randomPosition(height, width) {

    //remover o mosquito anterior
    if (document.querySelector('#mosquito')) {
        document.querySelector('#mosquito').remove()
        if(lifes > 3) {
            window.location.href = 'fim_de_jogo.html'
        }
        document.querySelector('#v' + lifes).src = "/images/coracao_vazio.png"
        lifes++
    }

    // Generate random values for X and Y positions within the given width and height
    let positionX = Math.floor(Math.random() * width) - 90
    let positionY = Math.floor(Math.random() * height) - 90

    // Ensure the positions are not negative
    positionX = Math.max(0, positionX)
    positionY = Math.max(0, positionY)

    //Logging the random position
    console.log("Posicao randomica: " + positionY, positionX)

    // Create an image element
    let mosquito = document.createElement('img')
    mosquito.src = './images/mosquito.png'
    mosquito.className = randonHeight() + ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = () => {
        mosquito.remove()
    }

    // Append the image element to the body of the document
    document.body.appendChild(mosquito)

}

function randonHeight() {
    let classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1: 
            return 'mosquito2'
        case 2:
            return 'mosquito3'

    }
}

function randomSide() {
    let classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return 'sideA'
        case 1: 
            return 'sideB'

    }
}

const { height, width } = adjustSizeOfGameContainer()

let cronometro = setInterval(() => {
    time -= 1
    if (time < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.querySelector("#cronometro").innerHTML = time
    }

}, 1000)

document.querySelector("#cronometro").innerHTML = time

let criaMosquito = setInterval(() => {
    randomPosition(height, width)
}, 1000)

