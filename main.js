function player(name, symbol) {
	return {name, symbol};
}

function cell() {
	let cell = Array.from({length : 3}, () => Array.from({length : 3}, () => 0));
	let isEmpty = () => {};
	return { isEmpty };
}

function board() {}

function gameController () {
	let playerName = [...document.querySelectorAll(input[name = 'playerName']).value];
	let playerSymbol = [...document.querySelectorAll(input[name = 'playerSymbol']).value];
	
	let playerOne = player(playerName[0], playerSymbol[0]);
	let playerTwo = player(playerName[1], playerSymbol[1]);
	console.log(playerOne, playerTwo);
}

function winnerChecker() {
	
}

function gameRenderer() {}