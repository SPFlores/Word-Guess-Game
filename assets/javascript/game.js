const computerChoices = [`sam-winchester`, `dean-winchester`, `crowley`, `castiel`, `pie`, `angels`, `demons`, `leviathan`, `impala`, `enochian`]
let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]

let result = _ => {
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

let check = _ => {
  document.onkeyup = (event) => {
    if (event.keyCode <= 57 && event.keyCode >= 48) {
      document.querySelector('#warning').innerHTML = `You can only choose letters in this game`
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
      document.querySelector('#warning').innerHTML = ' '
      let guess = (event.key)
      for (var i = 0; i < computerChoice.length; i++) {
        if (computerChoice[i] === guess) {
          guesses[i].innerHTML = guess.toUpperCase()
          counter += 1
        }
      }

      if ((guessesLeft > 0) && (computerChoice.indexOf(guess) === -1)) {
        guessesLeft -= 1
        document.querySelector('#guessesLeft').innerHTML = `Number of guesses remaining: ${guessesLeft}`
        let wrongul = document.createElement('ul')
        wrongul.setAttribute('id', 'my-wrong-word')
        wrongul.textContent = guess.toUpperCase()
        document.querySelector('#wronghold').append(wrongul)
      } else if ((computerChoice[i] !== guess) && (guessesLeft === 0)) {
        document.querySelector('#guessesLeft').innerHTML = `Number of guesses remaining: 0`
      }
      progress()
    }
  }
}

let progress = _ => {
  if (guessesLeft < 1) {
    losses += 1
    document.querySelector('#mylosses').innerHTML = `Losses: ${losses}`
    // show losing picture
    reset()
  }
  if (counter + space === guesses.length) {
    wins += 1
    document.querySelector('#mywins').innerHTML = `Wins: ${wins}`
    // show picture from array according to word chosen
    reset()
  }
}

play = _ => {

  computerChoice = computerChoice.replace(/\s/g, "-")
  guessesLeft = 10
  guesses = []
  wrongGuesses = []
  lives = 10
  wins = 0
  losses = 0
  space = 0
  counter = space + 0
  result()
  check()
  progress()
  
  console.log(computerChoice)
}

play()

let reset = _ => {
  // clear current word
  document.querySelector('#wordhold').innerHTML = ` `
  // reset already guessed
  document.querySelector('#wronghold').innerHTML = ` `
  play()
}
