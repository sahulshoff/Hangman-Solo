const functions = require("./script.js");

test("the wordPicker is not blank", () => {
	expect(functions.wordPicker()).not.toBeFalsy();
});

// test("if a letter is in the chosen word", () => {
// 	word = ["d", "e", "v", "e", "l", "o", "p", "e", "r"];
// 	chosenLetters = "e";
// 	output = functions.displayRightLetters(word, chosenLetters);
// 	outcome = "e";
// 	expect(output).toBe(outcome);
// });

test("Does the game update the numeber of attempts", () => {
	input1 = ["y"];
	word = ["v", "i", "s"];

	output = functions.guessLetter(word, input1);
	outcome = 4;
	expect(output).toBe(outcome);
});
