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
        if ((computerChoice[i] === guess) && (guesses[i].innerHTML !== (guess.toUpperCase()))) {
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
        // console.log(wrongGuesses.size)
      }
      progress()
    }
  }
}

let progress = _ => {
  if ((guessesLeft - wrongGuesses.size) < 1) {
    losses += 1
    document.querySelector('#mylosses').innerHTML = `Losses: ${losses}`
    document.querySelector('#holdingpicandtext').innerHTML =
      `<h3 class="spnfont flow-tex">${lossImageAndText[0].text}</h3>
      <br>
        <img class="responsive-img correctWordImage" src=${lossImageAndText[0].img} alt="${lossImageAndText[0].text}"> 
      <br>
            <h6 class="flow-text">${lossImageAndText[0].paragraph}</h6>`
    reset()
    play()
  }
  if (counter + space === guesses.length) {
    wins += 1
    document.querySelector('#mywins').innerHTML = `Wins: ${wins}`
    document.querySelector('#holdingpicandtext').innerHTML =
      `<h3 class="spnfont flow-tex">${imageAndText[computerChoices.indexOf(computerChoice)].text}</h3>
      <br>
      <img class="responsive-img correctWordImage" src=${imageAndText[computerChoices.indexOf(computerChoice)].img} alt="${imageAndText[computerChoices.indexOf(computerChoice)].text}"> 
      <br>
      <h6 class="flow-text">${imageAndText[computerChoices.indexOf(computerChoice)].paragraph}</h6>`

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

const imageAndText = [
  {
    img: "./assets/images/sam-winchester.jpg",
    text: "Sam Winchester",
    paragraph: "Sam is the younger of the Winchester brothers. He and his brother Dean travel around the country saving people. He's the best at research.  Also known as Moose."
  },
  {
    img: "./assets/images/dean-winchester.jpg",
    text: "Dean Winchester",
    paragraph: "Dean is the oldest Winchester brother. He makes sure to take care of Sam while they're out hunting because family is very important to him. Loves pie, pudding, and Led Zeppelin."
  },
  {
    img: "./assets/images/crowley.jpg",
    text: "Crowley",
    paragraph: `Crowley is a former crossroads demon and the King of Hell. Often, he travels with Sam and Dean to "help" them in his own way. Don't call him Fergus.`
  },
  {
    img: "./assets/images/castiel.png",
    text: "Castiel",
    paragraph: `Castiel, often shortened to Cas, is an angel of the lord, wings and all. He often saves the brothers from threats and fights alongside them on their hunting trips.`
  },
  {
    img: "./assets/images/pie.gif",
    text: "Pie",
    paragraph: "Dean's favorite dessert. Did you forget it when you went out for food?"
  },
  {
    img: "./assets/images/angels.gif",
    text: "Angels",
    paragraph: `Angels are powerful celestial beings created by God. They are responsible of maintaining Heaven and are imbued with considerable power. Sam and Dean often come across angels while hunting.`
  },
  {
    img: "./assets/images/demon.jpg",
    text: "Demons",
    paragraph: `Demons are malevolent spirits that have endured extensive torture in Hell and have become extremely evil and very powerful. They are able to roam in their smoke form.`
  },
  {
    img: "./assets/images/leviathan.png",
    text: "Leviathan",
    paragraph: `The Leviathans are a race of ancient monsters that were God's very first beasts. The creatures were released from Purgatory and had to be stopped by the Winchester brothers.` 
  },
  {
    img: "./assets/images/impala.jpg",
    text: "Impala",
    paragraph: `The Impala is Dean's black 1967 Chevrolet Impala that was passed down to him by his father. The trunk holds many weapons that aid The Winchesters in their hunting activities. Dean refers to the Impala as "Baby."`
  },
  {
    img: "./assets/images/enochian.jpg",
    text: "Enochian",
    paragraph: `Enochian is the language of angels. Aside from its use for communication, Enochian is used for spellwork and rituals.`
  },
  {
    img: "./assets/images/angel-blade.jpg",
    text: "Angel Blade",
    paragraph: `Angel Blades are weapons carried by most angels. They're long, silver, triple-edged daggers that can be used to kill angels, hellhounds, demons, and other supernatural creatures. `
  },
  {
    img: "./assets/images/cuck-shurley.jpg",
    text: "Chuck Shurley",
    paragraph: `text about God`
  },
  {
    img: "./assets/images/hellhound.gif",
    text: "Hell Hound",
    paragraph: `text about hell hounds`
  },
  {
    img: "./assets/images/holy-water.jpg",
    text: "Holy Water",
    paragraph: `text about holy water`
  },
  {
    img: "./assets/images/salt.jpg",
    text: "Salt",
    paragraph: `text about salt`
  },
  {
    img: "./assets/images/iron.jpg",
    text: "Iron",
    paragraph: `text about iron`
  },
  {
    img: "./assets/images/amulet.jpg",
    text: "Amulet",
    paragraph: `text about the amulet`
  },
  {
    img: "./assets/images/lucifer.gif",
    text: "Lucifer",
    paragraph: `text about Lucifer`
  },

]

let lossImageAndText = [
{
  img: "./assets/images/lost.gif",
    text: "Lost",
      paragraph: `Sam lost his shoe, and you lost this game!`
}
]