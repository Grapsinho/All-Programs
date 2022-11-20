let div = document.querySelector('.div1')
let div1 = document.querySelector('.div2')
let div2 = document.querySelector('.div3')
let number = document.querySelector('.number')
let playAgain = document.querySelector('.playAgain')
let playAgainInput = document.querySelector('.play-again')
const submit = document.querySelector('.submit')
let goodbye = document.querySelector('.goodbye')
let secondDiv = document.querySelector('.second-div')
let firstDiv = document.querySelector('.first-div')
let guesses = 0
let randomNumber;

div.addEventListener('click', () => {

    let numberGuess = document.querySelector('.numberGuess')

    firstDiv.classList.add('active')
    number.classList.add('active')
    submit.classList.add('active')
    numberGuess.classList.add('active')
    randomNumber = Math.floor(Math.random() * 10) + 1

    submit.addEventListener('click', ()=> {
        let value = numberGuess.value

        value = Number(value)

        if(value < randomNumber) {
            number.textContent = "Too low. Guess again:"
            guesses++
        }else if(value > randomNumber) {
            number.textContent = "Too high. Guess again:"
            guesses++
        }else {
            guesses++
            number.textContent = `You got it in ${guesses} guesses!`

            secondDiv.classList.add('active')
            playAgain.textContent = "Play again? "
            playAgainInput.classList.add('active')

            playAgainInput.addEventListener('input', ()=> {
                playAgainInput = playAgainInput.value

                if(playAgainInput === "n") {
                    goodbye.classList.add('active')
                    goodbye.textContent = "Goodbye!"
                }else if(playAgainInput === "y") {
                    location.reload()
                }
            })
        }
    })
})

div1.addEventListener('click', () => {

    let numberGuess = document.querySelector('.numberGuess')

    firstDiv.classList.add('active')
    number.classList.add('active')
    submit.classList.add('active')
    numberGuess.classList.add('active')
    randomNumber = Math.floor(Math.random() * 100) + 1

    submit.addEventListener('click', ()=> {
        let value = numberGuess.value

        value = Number(value)

        if(value < randomNumber) {
            number.textContent = "Too low. Guess again:"
            guesses++
        }else if(value > randomNumber) {
            number.textContent = "Too high. Guess again:"
            guesses++
        }else {
            guesses++
            number.textContent = `You got it in ${guesses} guesses!`

            secondDiv.classList.add('active')
            playAgain.textContent = "Play again? "
            playAgainInput.classList.add('active')

            playAgainInput.addEventListener('input', ()=> {
                playAgainInput = playAgainInput.value

                if(playAgainInput === "n") {
                    goodbye.classList.add('active')
                    goodbye.textContent = "Goodbye!"
                }else if(playAgainInput === "y") {
                    location.reload()
                }
            })
        }
    })
})

div2.addEventListener('click', () => {

    let numberGuess = document.querySelector('.numberGuess')

    firstDiv.classList.add('active')
    number.classList.add('active')
    submit.classList.add('active')
    numberGuess.classList.add('active')
    randomNumber = Math.floor(Math.random() * 1000) + 1

    submit.addEventListener('click', ()=> {
        let value = numberGuess.value

        value = Number(value)
        if(value < randomNumber) {
            number.textContent = "Too low. Guess again:"
            guesses++
        }else if(value > randomNumber) {
            number.textContent = "Too high. Guess again:"
            guesses++
        }else {
            guesses++
            number.textContent = `You got it in ${guesses} guesses!`

            secondDiv.classList.add('active')
            playAgain.textContent = "Play again? "
            playAgainInput.classList.add('active')

            playAgainInput.addEventListener('input', ()=> {
                playAgainInput = playAgainInput.value

                if(playAgainInput === "n") {
                    goodbye.classList.add('active')
                    goodbye.textContent = "Goodbye!"
                }else if(playAgainInput === "y") {
                    location.reload()
                }
            })
        }
    })
})

let btnEl = document.querySelector('.btn')

btnEl.addEventListener('mouseover', function(event) {
    const x = (event.pageX - btnEl.offsetLeft)
    const y = (event.pageY - btnEl.offsetTop)

    btnEl.style.setProperty('--posX', x + 'px')
    btnEl.style.setProperty('--posY', y + 'px')
})
