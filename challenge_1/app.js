// object to contain the logic for the game
let ticTacToeLogic = {
  // initialize the game
  initialize: function() {
    ticTacToeLogic.renderTable();
  },

  // table setting
  table:
  [
    "", "", "",
    "", "", "",
    "", "", "",
  ],

  // keep track of turn -- default (turn = false, first player turn 'X')
  turn: false,

  // toggle turn
  toggleTurn: function() {

    let turn = !ticTacToeLogic.turn;

    ticTacToeLogic.turn = turn;

    console.log('from toggleTurn ', turn)

    if(turn) {
      return 'X';
    } else {
      return 'O'
    }
  },

  // render table
  renderTable: function() {
    // grab the table id from the dom
    let tableId = document.getElementById('game_table');

    // clear the game table
    let squares = document.getElementsByClassName('square');

    let table = this.table;

    console.log('table => ', table)

    // loop through the table array to generate the table
    for(let i = 0; i < table.length; i++) {
      // create the element node
      let squareContainer = document.createElement('button');

      // create the text node
      let textNode = document.createTextNode(table[i]);

      // add a class "square"
      squareContainer.classList.add('square');

      // append the text node to the element node
      squareContainer.append(textNode);

      // add a class to the node
      squareContainer.setAttribute('id', i);

      squareContainer.addEventListener('click', ticTacToeLogic.playerMove);
          // cb()
      // append the squares onto the dom
      tableId.append(squareContainer);
    }

  },

  // computer turn - logic
  playerMove: function(e) {

    console.log('this (playerMove) => ', this, this)
    console.log('this (this.playerMove) => ', this.playerMove)

    console.log('move => ', e.target, e.target.id);

    // grab the element being clicked
    let square = e.target;

    // grab it id
    let clickedSquareIndex = Number(e.target.id);

    // toggle between player
    let currentPlayer = ticTacToeLogic.toggleTurn();

    console.log('turn => ', currentPlayer)

    // remove the click event listener on the square once it has been clicked
    square.removeEventListener('click', ticTacToeLogic.playerMove);

    // append player move on the dom
    square.innerText = currentPlayer;

    if(currentPlayer === 'X') {
      // update the table for "X" player
      ticTacToeLogic.table[clickedSquareIndex] = currentPlayer;
    } else {
      // update the table for "O" player
      ticTacToeLogic.table[clickedSquareIndex] = currentPlayer;
    }

    console.log('table => ', ticTacToeLogic.table)

    // check for winning combination
    ticTacToeLogic.checkWinning(currentPlayer);
  },

  // method for checking winning combination
  checkWinning: function(player) {
    console.log('checkWinning => ', player)

    // winning combination
    // [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]

    let table = ticTacToeLogic.table;

    console.log(player === 'X')

    let case1 = (player === table[0] && player === table[1] && player === table[2]);
    let case2 = (player === table[2] && player === table[3] && player === table[4]);
    let case3 = (player === table[6] && player === table[7] && player === table[8]);
    let case4 = (player === table[0] && player === table[3] && player === table[6]);
    let case5 = (player === table[1] && player === table[4] && player === table[7]);
    let case6 = (player === table[2] && player === table[5] && player === table[8]);
    let case7 = (player === table[0] && player === table[4] && player === table[8]);
    let case8 = (player === table[2] && player === table[4] && player === table[6]);

    if(case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8) {
      // alert(`We have a winner: ${player} wins`)
      let message = document.getElementById('message');

      message.innerText = `We have a winner. ${player} wins.`;
      let square = document.getElementsByClassName('square');

      for(let i = 0; i < square.length; i++) {
        square[i].removeEventListener('click', ticTacToeLogic.playerMove);
      }
    }
  }
}


// grab the start btn
let startBtn = document.getElementById('start');

// add a click event listener on the start btn to initiate the game
startBtn.addEventListener('click', function(e) {
  console.log('hello tic tac toe. Game is staring...');

  // initialize the tic-tac-toe game
  ticTacToeLogic.initialize();
});


// reset the game
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
  window.location.reload();
})
