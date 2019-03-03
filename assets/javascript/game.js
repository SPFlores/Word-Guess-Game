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

let progress = () => {
  if (guessesLeft < 1) {
    losses -= 1
    document.querySelector('#mylosses').innerHTML = `Losses: ${losses}`
    dosument.querySelector('#guessesLeft').innerHTML = `0`
    //show losing picture
  }
  if (counter + space === guesses.length) {
    wins += 1
    document.querySelector('#mywins').innerHTML = `Wins: ${wins}`
    // show picture from array according to word chosen
    // clear out computerChoice
    // choose new word
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
          guesses[i].innerHTML = guess.toUpperCase()
          counter += 1
        }
      }
      var j = (computerChoice.indexOf(guess))
      if (j === -1) {
        guessesLeft -= 1
        document.querySelector('#guessesLeft').innerHTML = `Number of guesses remaining: ${guessesLeft}`
        progress() // check win vs lose status
        // animate()  // change picture
      } else {
        progress()
      }
    }
  }
}


play = function () {

  console.log(computerChoice)

  guessesLeft = 10
  guesses = []
  lives = 10
  wins = 0
  losses = 0
  space = 0
  counter = space + 1
  check()
  result()
}

play()

// compare user input to letters in word, fill in if there, decrease number of guesses remaining if not there

// make sure you can't input the same letter more than once
