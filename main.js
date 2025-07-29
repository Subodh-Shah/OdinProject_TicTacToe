const playerForm = document.getElementById('playerForm');
const board = document.getElementById('boardContainer');
const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('status');
const resetButton = document.getElementById('resetBtn');

const player = {
	'X' : '' ,
	'O' : '' 
};

let currentPlayer = 'X';

playerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	player.X = document.querySelector('input[name="playerX"]').value || 'X';
	player.O = document.querySelector('input[name="playerO"]').value || 'O';
	board.style.display = 'flex';
	playerForm.style.display = 'none';
	gameStatus.textContent = `Player ${player[currentPlayer]}'s turn`;
})

resetButton.addEventListener('click', () => {
	cells.forEach(c => {
		c.textContent = '';
		c.style.pointerEvents = 'auto';
	});
	currentPlayer = 'X';
	gameStatus.textContent = `Player ${player[currentPlayer]}'s turn`;
})

for (let cell of cells) {
	cell.addEventListener('click', () => {
		if (cell.textContent!='') return;
		
		else {
			cell.textContent = currentPlayer;
			if(checkWinner()){
				cells.forEach(c => c.style.pointerEvents = 'none'); // Disable further moves
			}
			else{
				currentPlayer = currentPlayer === 'X' ? 'O' : 'X' ;
				gameStatus.textContent = `Player ${player[currentPlayer]}'s turn`;
			}
		} ;
	})
}


function checkWinner() {
	let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	for (let winCondition of winConditions) {
		let win = winCondition.every((e) => cells[e].textContent === currentPlayer);
		if(win) {
			gameStatus.textContent = `Player ${player[currentPlayer]} has won`;
			return true;
		}
	}
	return false;
}
