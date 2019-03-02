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

// compare user input to letters in word, fill in if there, decrease number of guesses remaining if not there

// if word completed before guesses = 0, show corresponding image, increase wins by one; if not completed, show fail image and reset guesses, word, and increase losses by one

// make sure you can't input the same letter more than once

// kj