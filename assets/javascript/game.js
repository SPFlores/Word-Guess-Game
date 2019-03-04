const computerChoices = [`sam-winchester`, `dean-winchester`, `crowley`, `castiel`, `pie`, `angels`, `demons`, `leviathan`, `impala`, `enochian`]
computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
// var remainingLetters = computerGuess.length
// let wins = 0
// let losses = 0
let guessesLeft = 12

let result = () => {
  wordHolder = document.querySelector('#hold')
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
      if (computerChoice[i] === guess) { // if guess is in the word
        guesses[i].innerHTML = guess.toUpperCase() // put it in the array
        counter += 1 // increase counter
      } else if ((computerChoice[i] !== guess) && (guessesLeft > 0)) { // if guess is not in the array
        // check to see if the answer has already been guessed
        switch (wrongGuesses.indexOf(guess)) {
          case -1:
            wrongGuesses[wrongCounter]
            wrongCounter += 1
            break;
          default:
            break
          // SWITCH if not, put it in at [wrongCounter], increase wrongCounter
          // if it is, break
          // let wrongCheck = () => {
          //   wrongWordHolder = document.querySelector('#wronghold')
          //   incorrect = document.createElement('ul')
          //   let guess = (event.key).toUpperCase()
          // }
          // for (var i = 0; i < computerChoice.length; i++) {
          //   incorrect.setAttribute('id', 'my-wrong-word')
          //   wrongGuess = document.createElement('li')
          //   wrongGuess.setAttribute('class', 'wrong-guess')
          //   if ((computerChoice[i] !== guess) && (guessesLeft === 0)) {
          //     document.querySelector('#guessesLeft').innerHTML = `Number of guesses remaining: 0`
          //   } else if ((computerChoice[i] !== guess) && (guessesLeft > 0) && (wrongGuesses.indexOf(guess) > -1)) {
          //     wrongGuess.innerHTML = guess
          //   }
          //   wrongGuesses.push(guess)
          //   wrongWordHolder.appendChild(incorrect)
          //   incorrect.appendChild(guess)
          // }
        }

      }
    }
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
  counter = space + 0
  wrongCounter = 0
  result()
  check()
  // progress()
}

play()
