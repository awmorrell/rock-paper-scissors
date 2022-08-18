let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); /* DOM variable */
const computerScore_span = document.getElementById("computer-score"); /* DOM variable */
const scoreBoard_div = document.querySelector(".score-board"); /* DOM variable */
const result_p = document.querySelector(".result > p"); /* DOM variable */
const rock_div = document.getElementById("Rock"); /* DOM variable */
const paper_div = document.getElementById("Paper"); /* DOM variable */
const scissors_div = document.getElementById("Scissors"); /* DOM variable */
const compSelects = document.getElementById("comp-selects"); /* DOM variable */
	
	/* We have now cached the DOM. We've created variables out of all of the 
		DOM values and they are all stored for future use. Now we dont have to
		use document.getElementById every single time we need to access these DOM
		values, which saves us a ton of processing power and memory, keeps the
		program smooth and ungunked */

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];                                       /* Math.random() is a built in object.method that generates random                 */
	const randomNum = (Math.floor(Math.random() * 3));                                   /* numbers between 0 and 1. Adding '* 3' makes it between 0 and 3                  */
	return choices[randomNum]; /* randomly returns [0], [1], or [2] of const choices */  /* Math.floor is another object/method that rounds the random #'s to whole numbers */
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore + " ";
	result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win.";
	compSelects.innerHTML = "Computer chooses " + computerChoice + ".";
}

function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = " " + computerScore;
	result_p.innerHTML = computerChoice + " beats " + userChoice + ". You lose.";
	compSelects.innerHTML = "Computer chooses " + computerChoice + ".";
}

function draw(userChoice, computerChoice) {
	result_p.innerHTML = userChoice + " matches " + computerChoice + ". Draw.";
	compSelects.innerHTML = "Computer chooses " + computerChoice + ".";
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
			win(userChoice, computerChoice);
			break;
		case "RockPaper":
		case "PaperScissors":
		case "ScissorsRock":
			lose(userChoice, computerChoice);
			break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
			draw(userChoice, computerChoice);
	}
	dissMessage();
}

function main() {
	rock_div.addEventListener('click', function() {
		game("Rock");
	})

	paper_div.addEventListener('click', function() {
		game("Paper");
	})

	scissors_div.addEventListener('click', function() {
		game("Scissors");
	})
}

function dissMessage() {
	if(computerScore > userScore) {
		actionMessage.innerHTML = "Yikes...";
	} else {
		actionMessage.innerHTML = "Make your move.";
	}
}

main();


