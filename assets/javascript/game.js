// only allow letters to be pressed, not numbers
document.onkeyup = (event) => {
  if (event.keyCode <= 90 && event.keyCode >= 65) {
    //  run function to determine if the letter is part of the word
  } else {
    alert(`You can only choose letters in this game!`)
  }
}

// make an array (object?) of words computer can choose from
const computerChoices = [`Sam Winchester`, `Dean Winchester`, `Crowley`, `Castiel`, `pie`, `angels and demons`, `devils trap`, `leviathan`, `Impala`, `Enochian`]

const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

console.log(computerGuess)

// document.onkeyup = e => {

//   // Randomly chooses a choice from the options array. This is the Computer's guess.


//   // Only run the following code block if the user presses "r" or "p" or "s".
//   if (computerChoices.indexOf(e.key) !== -1) {
//     if (e.key === computerGuess) {
//       ties++
//     } else {
//       switch (e.key) {
//         case 'r':
//           computerGuess === 'p' ? losses++ : wins++
//           break
//         case 'p':
//           computerGuess === 's' ? losses++ : wins++
//           break
//         case 's':
//           computerGuess === 'r' ? losses++ : wins++
//           break
//         default:
//           break
//       }
//     }

// compare user input to letters in word, fill in if there, decrease number of guesses remaining if not there

// if word completed before guesses = 0, show corresponding image, increase wins by one; if not completed, show fail image and reset guesses, word, and increase losses by one

// make sure you can't input the same letter more than once

// kj