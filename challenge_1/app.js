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

  // winning combination
  winComb: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
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

    console.log('child => ', squares)
    // tableId.removeChild();

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

    let square = e.target;
    let clickedSquareIndex = Number(e.target.id);

    let currentPlayer = ticTacToeLogic.toggleTurn();

    console.log('turn => ', currentPlayer)

    square.removeEventListener('click', ticTacToeLogic.playerMove);


    square.innerText = currentPlayer;

    if(currentPlayer === 'X') {
      ticTacToeLogic.table[clickedSquareIndex] = currentPlayer;
    } else {
      ticTacToeLogic.table[clickedSquareIndex] = currentPlayer;
    }

    console.log('table => ', ticTacToeLogic.table)

  }
}

// initialize the tic-tac-toe game
ticTacToeLogic.initialize();

// grab the start btn
let startBtn = document.getElementById('start');

// add a click event listener on the start btn to initiate the game
startBtn.addEventListener('click', function(e) {
  console.log('hello tic tac toe. Game is staring...');

});


// reset the game
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
  window.location.reload();
})
