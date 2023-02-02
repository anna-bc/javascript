const $wordInput = document.getElementById("wordInput");
const $wordSubmitBtn = document.getElementById("wordSubmit");
const $wordForm = document.getElementById("word");
const $alphabetTable = document.getElementById("alphabet");
const $round = document.querySelector(".round");
const $winnerWrapper = document.querySelector(".winnerWrapper");

$gameScreen = document.querySelector(".gameScreen");

let word = "";
let currentWord = [];
let triedLetters = [];
let roundCount = 0;
let maxRounds = 10;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let winner = false;

$wordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  word = $wordInput.value.toLowerCase();
  $wordInput.value = "";
  $wordForm.classList.add("notVisible");
  console.log(word);

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == " ") {
      currentWord.push(" ");
    } else {
      currentWord.push("_");
    }
  }
  console.log(currentWord);
  displayLetters();
  generateAlphabetTable();
});

/**
 * Displays the searched word with either letters or _
 */
function displayLetters() {
  document.querySelectorAll(".box").forEach((e) => e.remove());
  for (i in currentWord) {
    let $box = document.createElement("div");
    $box.classList.add("box");
    if (currentWord[i] !== "_") {
      $box.innerText = currentWord[i];
      $box.classList.add("box--noLetter");
    } else {
      $box.classList.add("box--letter");
    }

    $gameScreen.appendChild($box);
  }
}
/**
 * Checks if the given letter is in the searched word.
 * @param {*} letter
 */
function checkLetter(letter) {
  if (word.includes(letter)) {
    return true;
  }
  return false;
}

/**
 * Generates an Alphabet Table, where each Letter has an EventListener for the click event. 
 * On each Click it checks if the selected letter is in the searched word, adds the letter to the currentWord state and
 * checks the win condition.
 */
function generateAlphabetTable() {
  console.log("generating Alphabet Table");
  for (i in alphabet) {
    const letter = alphabet.charAt(i);
    let $cell = document.createElement("div");
    $cell.classList.add("alphabet__item");
    $cell.classList.add(`alphabet__item--${letter}`);
    $cell.innerText = letter;
    $alphabetTable.appendChild($cell);

    $cell.addEventListener("click", (e) => {
        if (winner) {
            return;
        }
      if (roundCount >= maxRounds) {
        $winnerWrapper.innerHTML = "You have lost!";
        $winnerWrapper.classList.add("lost");
        return;
      }
      if (triedLetters.indexOf(letter) >= 0) return;
      roundCount++;
      $round.innerText = `Guess ${roundCount} of ${maxRounds}`;
      let checked = checkLetter(letter.toLowerCase());
      console.log(checked);
      console.log(letter.toLowerCase());
      $cell.classList.add("alphabet__item--tried");
      if (checked) {
        triedLetters.push(letter);
        console.log(triedLetters);
        for (i in word) {
          if (word.charAt(i) == letter.toLowerCase()) {
            currentWord[i] = letter.toLowerCase();
          }
        }
        displayLetters();
      }
      winner = checkWinCondition();
        if(winner) {
            $winnerWrapper.innerHTML = "You have won!";
            $winnerWrapper.classList.add("won");
            return;
        }
        if(!winner && (roundCount >= maxRounds)) {
            $winnerWrapper.innerHTML = "You have lost!";
            $winnerWrapper.classList.add("lost");
            return;
        }
    });
  }
}

/**
 * Checks for the win condition. Id the currentWord state does not include a _, it means that the player has won.
 * @returns 
 */
function checkWinCondition() {
    if (currentWord.includes('_')) return false;
    return true;
}
