let letterGuessed;
let tries;
let word;

const wordList = [
	"vis",
	"toeter",
	"developer",
	"telefoon",
	"moeder",
	"snoer",
	"geeuw"
];

// This code here selects a random word
const wordPicker = () => {
	let word = wordList[Math.floor(Math.random() * wordList.length)];
	console.log("wat ben ik?", word);
	return word;
};

const wordGuessed = function(word, chosenLetters) {
	// remove all letters from word that are already guessed
	// We can do this with a for loop to.
	let remaining = word.filter(function(letter) {
		// If the letter is guessed return true (we want to remove that right away)
		return !chosenLetters.includes(letter);
	});
	// If we have letters left, right?
	return remaining.length === 0;
};

//Settings for beginning of the game.

function beginTheGame() {
	gameOver = false;
	document.querySelector(".win").style.display = "none";
	document.querySelector(".lose").style.display = "none";
	document.querySelector("input").value = "";

	word = wordPicker(wordList).split("");
	document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;

	tries = 0;
	document.querySelector(".lives span").innerHTML = 5;

	chosenLetters = [];
	displayRightLetters(word, chosenLetters);
	displayWrongLetters(word, chosenLetters);
}

const winTheGame = function() {
	document.querySelector(".win").style.display = "block";
	gameOver = true;
};

const loseGame = function() {
	document.querySelector(".lose").style.display = "block";
	gameOver = true;
};

const endGame = () => {
	if (tries >= 5) {
		loseGame();
	} else if (wordGuessed(word, chosenLetters)) {
		winTheGame();
	}
};

const displayWrongLetters = function(word, chosenLetters) {
	let wrongLetter = chosenLetters.filter(function(letter) {
		return !word.includes(letter);
	});
	document.querySelector(".wrong_guessed_letters").innerHTML = wrongLetter.join(
		" "
	);
};

const displayRightLetters = function(word) {
	let rightLetter = word.map(letter => {
		if (chosenLetters.includes(letter)) {
			return letter;
		} else {
			return "_";
		}
	});
	document.querySelector(".the_word").innerHTML = rightLetter.join(" ");
};

// const updateTriesDisplay = function(tries) {
// 	document.querySelector(".lives span").innerHTML = 5 - tries;
// };

// const guessLetter = function() {
// 	const letterGuessed = document.querySelector("input").value;
// 	document.querySelector("input").value = "";

// 	//const alreadyChosen = () => {
// 	if (chosenLetters.includes(letterGuessed) || letterGuessed === "") {
// 		return;
// 	}
// 	//};
// 	//alreadyChosen();

// 	//const keepTrackOfTries = () => {
// 	if (!word.includes(letterGuessed));
// 	{
// 		tries++;
// 		updateTriesDisplay(tries);
// 	}
// 	//keepTrackOfTries();

// 	chosenLetters.push(letterGuessed);

// 	displayRightLetters(word, chosenLetters);
// 	displayWrongLetters(word, chosenLetters);
// 	endGame();
// };

const guessLetter = function() {
	const letterGuessed = document.querySelector("input").value;
	document.querySelector("input").value = "";

	if (chosenLetters.includes(letterGuessed) || letterGuessed === "") {
		return;
	}

	if (!word.includes(letterGuessed)) {
		tries++;
		document.querySelector(".lives span").innerHTML = 5 - tries;
	}

	chosenLetters.push(letterGuessed);
	displayRightLetters(word, chosenLetters);
	displayWrongLetters(word, chosenLetters);

	endGame();
};

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector(".guess").addEventListener("click", guessLetter);
	document.querySelector(".restart").addEventListener("click", beginTheGame);
	beginTheGame();
});

const functions = {
	wordPicker,
	guessLetter,
	displayRightLetters
};

module.exports = functions;
