const computerChoices = [`sam-winchester`, `dean-winchester`, `crowley`, `castiel`, `pie`, `angels`, `demons`, `leviathan`, `impala`, `enochian`]
computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
// var remainingLetters = computerGuess.length
// let wins = 0
// let losses = 0
let guessesLeft = 12

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

let check = function () {
  document.onkeyup = (event) => {
    if (event.keyCode <= 57 && event.keyCode >= 48) {
      document.querySelector('#warning').innerHTML = `You can only choose letters in this game`
    } else {
      document.querySelector('#warning').innerHTML = ' '
    }

    let guess = (event.key)
    for (var i = 0; i < computerChoice.length; i++) {
      if (computerChoice[i] === guess) {
        guesses[i].innerHTML = guess.toUpperCase()
        counter += 1
      }
    }
    // for (var j = 0; j < computerChoice.length; j++) {
    //   if ((computerChoice[j] !== guess) && (guessesLeft === 0)) {
    //     document.querySelector('#guessesLeft').innerHTML = `Number of guesses remaining: 0`
    //   } else if ((computerChoice[j] !== guess) && (guessesLeft > 0)) {
    //     for (var k = 0; k < wrongGuesses.length; k++) {
    //       // check to see if the letter is already in the wrongGuesses array
    //       if (wrongGuesses[k] === guess) {
    //         // if it is, keep it the same
    //         wrongGuesses[k] === guess
    //       } else if (wrongGuesses[k] !== guess) {
    //         // if it isn't, add it at the index of wrongCounter, then increse wrongCounter 
    //         incorrect = document.createElement('ul')
    //         incorrect.setAttribute('id', 'in-word')
    //         incorrectGuess = document.createElement('li')
    //         incorrectGuess.setAttribute('class', 'wrongguess')
    //         incorrectGuess.push(incorrectGuess)
    //         document.querySelector('#wronghold').appendChild(incorrect)
    //         correct.appendChild(incorrectGuess)
    //       }
    //     }
    //   }
    // }
  }
}


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

  guessesLeft = 10
  guesses = []
  wrongGuesses = []
  lives = 10
  wins = 0
  losses = 0
  space = 0
  counter = space + 1
  wrongCounter = 0
  check()
  result()
  // checkIncorrect()
  progress()
}

play()
