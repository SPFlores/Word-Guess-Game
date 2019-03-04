const computerChoices = [`sam-winchester`, `dean-winchester`, `crowley`, `castiel`, `pie`, `angels`, `demons`, `leviathan`, `impala`, `enochian`]
computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
// var remainingLetters = computerGuess.length
// let wins = 0
// let losses = 0
let guessesLeft = 12

let result = () => {
  wordHolder = document.querySelector('#wordhold')
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

let check = function () {
  document.onkeyup = (event) => {
    if (event.keyCode <= 57 && event.keyCode >= 48) {
      document.querySelector('#warning').innerHTML = `You can only choose letters in this game`
    } else {
      document.querySelector('#warning').innerHTML = ' '
      let guess = (event.key)
      for (var i = 0; i < computerChoice.length; i++) {
        if (computerChoice[i] === guess) { // if guess is in the word
          guesses[i].innerHTML = guess.toUpperCase() // put it in the array
          counter += 1 // increase counter
        }
      }

      if ((guessesLeft > 0) && (computerChoice.indexOf(guess) === -1)) { // if there are still guesses left and if the guess is wrong
        // put it in the array, show array on page, decrease number of guesses
        let wrongul = document.createElement('ul')
        wrongul.textContent = guess.toUpperCase()
        document.querySelector('#wronghold').append(wrongul)
        console.log('testing')
        // wrongGuesses[wrongCounter].innerHTML = guess.toUpperCase()
        // wrongCounter += 1
      } else if ((computerChoice[i] !== guess) && (guessesLeft === 0)) {
        document.querySelector('#guessesLeft').innerHTML = `Number of guesses remaining: 0`
      }
    }
    progress()
  }
}
// }
// }
// }
// }
// }
// }
// }
// }
// }
// }

let progress = () => {
  if (guessesLeft < 1) {
    losses += 1
    document.querySelector('#mylosses').innerHTML = `Losses: ${losses}`
    // show losing picture
    // choose new word
  }
  if (counter + space === guesses.length) {
    wins += 1
    document.querySelector('#mywins').innerHTML = `Wins: ${wins}`
    // show picture from array according to word chosen
    // clear out computerChoice
    // choose new word
  }
}

play = () => {

  console.log(computerChoice)

  guessesLeft = 10 // = 10 - (wrongGuesses.length)
  guesses = []
  wrongGuesses = []
  lives = 10
  wins = 0
  losses = 0
  space = 0
  counter = space + 0
  wrongCounter = 0
  result()
  check()
  // progress()
}

play()
