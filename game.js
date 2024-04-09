let lifes = 1
let time = 10

function adjustSizeOfGameContainer() {
    //getting the actual height and width of the screen
    let height = window.innerHeight 
    let width = window.innerWidth
    return { height, width }
} const { height, width } = adjustSizeOfGameContainer()

function randomPosition(height, width) {
    //remove the previous fly, if the user not clicked to remove in time
    if (document.querySelector('#mosquito')) {
        document.querySelector('#mosquito').remove()
        if (lifes > 3) {
            window.location.href = '../gameover/gameover.html'
        }
        document.querySelector('#v' + lifes).src = "../../assets/coracao_vazio.png"
        lifes++
    }

    // Generate random values for X and Y positions within the given width and height
    let positionX = Math.floor(Math.random() * width) - 90
    let positionY = Math.floor(Math.random() * height) - 90

    // Ensure the positions are not negative
    positionX = Math.max(0, positionX)
    positionY = Math.max(0, positionY)

    // Creating an image node
    let mosquito = document.createElement('img')
    mosquito.src = '../../assets/mosquito.png'
    mosquito.className = randonHeight() + ' ' + randomSide()
    mosquito.style.position = 'absolute'
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = (e) => {
        e.stopPropagation()
        mosquito.remove()
    }
    //Commiting the node to the document
    document.body.appendChild(mosquito)

}

function randonHeight() {
    let classe = Math.floor(Math.random() * 3)
    switch (classe) {
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
    switch (classe) {
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'

    }
}

//handling missclick in the fly
const body = document.querySelector('body')
body.addEventListener("click", () => {
    if (lifes > 3) {
        window.location.href = '../gameover/gameover.html'
    }
    document.querySelector('#v' + lifes).src = "/images/coracao_vazio.png"
    lifes++
})

//Initializating the stopwatch in the init of the game
document.querySelector("#cronometro").innerHTML = time
let cronometro = setInterval(() => {
    time -= 1
    if (time < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = '../victory/victory.html'
    } else {
        document.querySelector("#cronometro").innerHTML = time
    }

}, 1000)

let criaMosquito = setInterval(() => {
    randomPosition(height, width)
}, 1000)

