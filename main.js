const squares = document.querySelectorAll('.square');
let player = 'X';
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function () {
    if (this.textContent === '') {
      this.textContent = player;
      this.style.backgroundColor = 'lightblue';
      checkWinner();
      player = (player === 'X') ? 'O' : 'X';
    }
  });

  squares[i].addEventListener('mouseover', function () {
    this.style.backgroundColor = 'lightgray';
  });

  squares[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = '';
  });
}

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (squares[a].textContent === player && squares[b].textContent === player && squares[c].textContent === player) {
      alert(player + ' wins!');
      resetBoard();
      return;
    }
  }
  
}

function resetBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].style.backgroundColor = '';
  }
}
