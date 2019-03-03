const noNumbersHere = () => {
  document.onkeyup = (event) => {
    if (event.keyCode <= 57 && event.keyCode >= 48) {
      alert(`You can only choose letters in this game!`)
    } else {

    }
  }
}

const computerChoices = [`sam-winchester`, `dean-winchester`, `crowley`, `castiel`, `pie`, `angels`, `demons`, `leviathan`, `impala`, `enochian`]
const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
// var remainingLetters = computerGuess.length
let wins = 0
let losses = 0
let guessesLeft = 12
let guesses = []
var showWins = document.getElementById("mywins")
var showLosses = document.getElementById("myloses")

console.log(computerChoice)

let result = () => {
  wordHolder = document.getElementById('hold')
  correct = document.createElement('ul')

  for (var i = 0; i < computerChoice.length; i++) {
    correct.setAttribute('id', 'my-word')
    guess = document.createElement('li')
    guess.setAttribute('class', 'guess')
    if (computerChoice[i] === '-') {
      guess.innerHTML = ' '
      space = 1
    } else {
      guess.innerHTML = '_'
    }

    guesses.push(guess)
    wordHolder.appendChild(correct)
    correct.appendChild(guess)
  }
}

check = function () {
  document.onkeyup = (event) => {
    if (event.keyCode <= 57 && event.keyCode >= 48) {
      document.querySelector('#warning').innerHTML = `You can only choose letters in this game`
    } else {
      document.querySelector('#warning').innerHTML = ' '
      let guess = (event.key)
      for (var i = 0; i < computerChoice.length; i++) {
        if (computerChoice[i] === guess) {
          guesses[i].innerHTML = guess
          counter += 1
        }
      }
      // var j = (computerChoice.indexOf(guess))
      // if (j === -1) {
      //   lives -= 1
      //   comments()  // lose 
      //   animate()  // change picture
      // } else {
      //   comments()
      // }
    }
  }
}

check()
result()

// to change wins and losses

// compare user input to letters in word, fill in if there, decrease number of guesses remaining if not there

// if word completed before guesses = 0, show corresponding image, increase wins by one, pick another word; if not completed, show fail image and reset guesses, word, and increase losses by one

progress = function () {
  showWins.innerHTML = `You have won ${wins = 0} games`
  showLosses.innerHTML = `You have lost ${losses = 0} games`
  for (var i = 0; i < geusses.length; i++) {
    if (computerGuess.indexOf('_') === -1) {
      showWins.innerHTML
    } else {

    }
  }
}

// make sure you can't input the same letter more than once
