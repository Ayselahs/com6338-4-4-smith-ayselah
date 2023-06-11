// list of words for the game
var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];
// retrieve the variables from their respective IDs from HTML file
var wordToGuessEl = document.getElementById('word-to-guess');
var previousWordEl = document.getElementById('previous-word');
var incorrectLettersEl = document.getElementById('incorrect-letters');
var remainingGuessesEl = document.getElementById('remaining-guesses');
var winEl = document.getElementById('wins');
var loseEl = document.getElementById('losses');

// Reset variables every game
var displayArr = [];
var incorrectArr = [];
var correctArr = [];
var previousWord = "";
var remainingGuesses = 10;
var wordToGuess;

// Track variables every game
var wins = 0;
var losses = 0;
remainingGuessesEl.textContent = `${remainingGuesses}`;
startGame();


function startGame() {
  wordToGuess = words[Math.floor(Math.random() * words.length)];
  console.log(wordToGuess);
  correctArr = [];
  incorrectArr = [];
  displayArr = [];
  remainingGuesses = 10;

 wordPick();

}


// Keyboard access
document.body.onkeyup = function(e) {
  var key = e.key.toLowerCase();
  console.log(key);
  if (!/^[a-zA-Z]+$/.test(key)) return;
  // Check if the key pressed is in the wordToGuess
  if (wordToGuess.includes(key) && correctArr.indexOf(key) === -1) {
    correctArr.push(key);
  } else if (!wordToGuess.includes(key) && correctArr.indexOf(key)  === -1) {
    incorrectArr.push(key);
    remainingGuesses--;
  }
  // Check if the user has won or lost
 wordPick();

  if (displayArr === wordToGuess) {
    wins++;
    winEl.textContent = wins;
    previousWordEl.textContent = `${wordToGuess}`;
    startGame();
  }
  if (remainingGuesses === 0) {
    losses++;
    loseEl.textContent = losses;
    previousWordEl.textContent = `${wordToGuess}`;
    startGame();
  }
}

function wordPick() {
  displayArr = '';
  for (var i = 0; i < wordToGuess.length; i++) {
    if (correctArr.indexOf(wordToGuess[i]) > -1) {
      displayArr += wordToGuess[i];
    } else {
      displayArr += '_';
    }
  }
  remainingGuessesEl.textContent = `${remainingGuesses}`;
  incorrectLettersEl.textContent = `${incorrectArr}`;
  wordToGuessEl.textContent = `${displayArr}`;
}









