// only allow letters to be pressed, not numbers
const noNumbersHere = () => {
  document.onkeyup = (event) => {
    if (event.keyCode <= 57 && event.keyCode >= 48) {
      alert(`You can only choose letters in this game!`)
    } else {
      //  run function to determine if the letter is part of the word
    }
  }
}

// make an array (object?) of words computer can choose from
const computerChoices = [`Sam Winchester`, `Dean Winchester`, `Crowley`, `Castiel`, `pie`, `angels and demons`, `devils trap`, `leviathan`, `Impala`, `Enochian`]

const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

console.log(computerGuess)

let w = 0
let l = 0
let g = 12

// compare user input to letters in word, fill in if there, decrease number of guesses remaining if not there

document.onkeyup = e => {
  noNumbersHere()
  // if (computerChoices.indexOf(e.key) !== -1) {
  //   if (e.key === computerGuess) {
  //     ties++
  //   } else {
  //     switch (e.key) {
  //       case 'r':
  //         computerGuess === 'p' ? losses++ : wins++
  //         break
  //       case 'p':
  //         computerGuess === 's' ? losses++ : wins++
  //         break
  //       case 's':
  //         computerGuess === 'r' ? losses++ : wins++
  //         break
  //       default:
  //         break
  //     }
  //   }
  // }
}

// if word completed before guesses = 0, show corresponding image, increase wins by one, pick another word; if not completed, show fail image and reset guesses, word, and increase losses by one

// make sure you can't input the same letter more than once