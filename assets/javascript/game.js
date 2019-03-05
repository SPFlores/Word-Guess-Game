const computerChoices = [`sam-winchester`, `dean-winchester`, `crowley`, `castiel`, `pie`, `angels`, `demons`, `leviathan`, `impala`, `enochian`, `angel-blade`, `chuck-shurley`, `hellhound`, `holy-water`, `salt`, `iron`, `amulet`, `lucifer`]

let wins = 0
let losses = 0

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
        wrongGuesses.add(guess.toUpperCase())
        document.querySelector('#guessesLeft').innerHTML = `Number of guesses remaining: ${guessesLeft - wrongGuesses.size}`
        let arrayWrongGuesses = Array.from(wrongGuesses)
        let stringWrongGuesses = arrayWrongGuesses.join(", ")
        document.querySelector('#wronghold').innerHTML = `${stringWrongGuesses}`
      }
      // document.querySelector('#wronghold').innerHTML = `${wrongGuesses.entries()}`
      progress()
    }
  }
}

let progress = _ => {
  if ((guessesLeft - wrongGuesses.size) < 1) {
    losses += 1
    document.querySelector('#mylosses').innerHTML = `Losses: ${losses}`
    // show losing picture
    reset()
    play()
  }
  if (counter + space === guesses.length) {
    wins += 1
    document.querySelector('#mywins').innerHTML = `Wins: ${wins}`
    // show picture from array according to word chosen

    document.querySelector('#holdingpic').innerHTML =
      `<img class="responsive-img" src=${imageAndText[computerChoices.indexOf(computerChoice)].img} alt="${imageAndText.text}"> 
      <br>
      <p>${imageAndText.paragraph}</p>`

    // console.log(imageAndText[computerChoices.indexOf(computerChoice)])
    reset()
    play()
  }
}

play = _ => {

  computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]

  console.log(computerChoice)

  wrongGuesses = new Set()
  guessesLeft = 13
  guesses = []
  // wins = 0
  // losses = 0
  space = 0
  counter = space + 0
  result()
  check()
  progress()
}

let reset = _ => {
  // clear current word
  document.querySelector('#wordhold').innerHTML = ` `
  // reset already guessed
  wrongGuesses.clear()
  document.querySelector('#wronghold').innerHTML = ` `
  // reset guesses remaining
  let guessesLeft = 13
  // show reset guesses
  document.querySelector('#guessesLeft').innerHTML = `Number of guesses remaining: ${guessesLeft}`
}

play()

let imageAndText = [
  {
    img: "./assets/images/sam-winchester.jpg",
    text: "Sam Winchester",
    paragraph: "text about Sam"
  },
  {
    img: "./assets/images/dean-winchester.jpg",
    text: "Dean Winchester",
    paragraph: "text abour Dean"
  },
  {
    img: "./assets/images/crowley.jpg",
    text: "Crowley",
    paragraph: "text about Crowley"
  },
  {
    img: "./assets/images/castiel.png",
    text: "Castiel",
    paragraph: "text about Castiel"
  },
  {
    img: "./assets/images/pie.gif",
    text: "Pie",
    paragraph: "text about pie"
  },
  {
    img: "./assets/images/angels.gif",
    text: "Angels",
    paragraph: "text about angels"
  },
  {
    img: "./assets/images/demon.jpg",
    text: "Demons",
    paragraph: "text about demons"
  },
  {
    img: "./assets/images/leviathan.png",
    text: "Leviathan",
    paragraph: "text about Leviathans"
  },
  {
    img: "./assets/images/impala.jpg",
    text: "Impala",
    paragraph: "text about Baby"
  },
  {
    img: "./assets/images/enochian.jpg",
    text: "Enochian",
    paragraph: "text about Enochian"
  },
  {
    img: "./assets/images/angel-blade.jpg",
    text: "Angel Blade",
    paragraph: "text about angel blades"
  },
  {
    img: "./assets/images/cuck-shurley.jpg",
    text: "Chuck Shurley",
    paragraph: "text about God"
  },
  {
    img: "./assets/images/hellhound.gif",
    text: "Hell Hound",
    paragraph: "text about hell hounds"
  },
  {
    img: "./assets/images/holy-water.jpg",
    text: "Holy Water",
    paragraph: "text about holy water"
  },
  {
    img: "./assets/images/salt.jpg",
    text: "Salt",
    paragraph: "text about salt"
  },
  {
    img: "./assets/images/iron.jpg",
    text: "Iron",
    paragraph: "text about iron"
  },
  {
    img: "./assets/images/amulet.jpg",
    text: "Amulet",
    paragraph: "text about the amulet"
  },
  {
    img: "./assets/images/lucifer.gif",
    text: "Lucifer",
    paragraph: "text about Lucifer"
  },
]
