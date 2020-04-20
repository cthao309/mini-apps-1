// object to contain the logic for the game
let ticTacToeLogic = {
  // initialize the game
  initialize: function() {
    this.renderTable();
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

      // append the squares onto the dom
      tableId.append(squareContainer);

      tableId.addEventListener('click', this.playerMove);
    }

  },

  // computer turn - logic
  playerMove: function(e) {

    console.log('move => ', e.target, e.target.id);
    let square = e.target;
    let clickedSquareIndex = Number(e.target.id);

    let currentPlayer = ticTacToeLogic.toggleTurn();

    console.log('turn => ', currentPlayer)

    square.removeEventListener('click', this.playerMove);

    square.innerText = currentPlayer;

    if(currentPlayer === 'X') {
      ticTacToeLogic.table[clickedSquareIndex] = currentPlayer;
    } else {
      ticTacToeLogic.table[clickedSquareIndex] = currentPlayer;
    }

    console.log('table => ', this.table)

  },

  // logic to append move to the dom
  appendToDom: function(index, turn) {
    this.table[index] = turn;

    console.log('table => ', this.table)
    this.renderTable();
  },
}

// initialize the tic-tac-toe game
ticTacToeLogic.initialize();

// grab the start btn
let startBtn = document.getElementById('start');

// add a click event listener on the start btn to initiate the game
startBtn.addEventListener('click', function(e) {
  console.log('hello tic tac toe. Game is staring...');



  // invoke aiMove
});


// ticTacToeLogic.playerMove();

// reset the game
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
  window.location.reload();
})
