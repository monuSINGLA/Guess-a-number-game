const inputNumber = document.querySelector(".inputNumber");
const button = document.querySelector(".btn");
const chanceLeft = document.querySelector(".chanceLeft");
const previousGuesses = document.querySelector(".previousGuesses");

let randomNumber = Math.floor(Math.random() * 100) + 1
const closeHigh = document.querySelector(".closeHigh");

const playAgain = document.querySelector(".tryAgain");

let addGuessNumbers = [];

let guessNumber = 1

let startGame = true;

// if start game is true so we will let player play 
if (startGame) {
    button.addEventListener("click", () => {
    const number = parseInt(inputNumber.value)
    inputValidation(number)
})
}

// function for user input validation check 
function inputValidation(number) {
    if (number < 1 || number > 100 || isNaN(number)) {
        displayMessege("Please enter a number between 1-100")
    }else{
        addGuessNumbers.push(number)
        if (guessNumber === 11) {
            displayGuess(number)
            displayMessege(`Game Over!! Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(number)
            checkGuess(number)
        }
    }
}

// function for check input number is equal to random number or not 
function checkGuess(number) {
    if (number === randomNumber) {
        displayMessege("Congratulations You Won the GAME!!")
        endGame()
    } else if (number < randomNumber) {
        displayMessege("Guess number is toooo Low!!!!")
    }
    else if (number > randomNumber) {
        displayMessege("Guess number is toooo High!!!")
    }
}

// function for change display messege 
function displayGuess(number) {
    inputNumber.value = ""
    previousGuesses.innerHTML += `${number} `
    guessNumber++
    chanceLeft.innerHTML = `${11 - guessNumber}`
}

// function for show display messege on web 
function displayMessege(message) {
    closeHigh.innerHTML = `${message}`
}

// functio for ending game 
function endGame() {
    inputNumber.setAttribute("disabled", "")
    previousGuesses.innerHTML = " "
    chanceLeft.innerHTML = 0
    guessNumber = 1
    startGame = false
    setTimeout(() => {
        playAgain.style.display = "block"
        
    }, 2000);

    newGame()
}

// function for restarting  game 
function newGame() {
    document.querySelector(".playAgain").addEventListener("click", () => {
        playAgain.style.display = "none"
        closeHigh.textContent = ""
        chanceLeft.innerHTML = `${11 - guessNumber}`
        inputNumber.removeAttribute("disabled")
        randomNumber = Math.floor(Math.random() * 100) + 1
        startGame = true
        addGuessNumbers = [];
        previousGuesses.innerHTML = "";
    })
}



