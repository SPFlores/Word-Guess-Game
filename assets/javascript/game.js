console.log(computerGuess)

const noNumbersHere = () => {
  document.onkeyup = (event) => {
    if (event.keyCode <= 57 && event.keyCode >= 48) {
      alert(`You can only choose letters in this game!`)
    } else {
      //  run function to determine if the letter is part of the word
    }
  }
}

const computerChoices = [`winchester`, `dean`, `sam`, `crowley`, `castiel`, `pie`, `angels`, `demons`, `leviathan`, `impala`, `enochian`]
var remainingLetters = computerGuess.length
const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
let wins = 0
let losses = 0
let guessesLeft = 12
let guesses = [] 
const answerArray = []
for (let i = 0; i < computerGuess.length; i++) {
  answerArray[i] = '_'
}
// to change wins and losses
progress = function () {
  showWins.innerHTML = `You have won ${wins = 0} games`
  showLosses.innerHTML = `You have lost ${losses = 0} games`
  for (var i = 0; i < geusses.length; i++) {
    if (computerGuess.indexOf('_') === -1) {
      show.Losses.innerHTML

    }
  }
}

// compare user input to letters in word, fill in if there, decrease number of guesses remaining if not there

// if word completed before guesses = 0, show corresponding image, increase wins by one, pick another word; if not completed, show fail image and reset guesses, word, and increase losses by one

// make sure you can't input the same letter more than once
