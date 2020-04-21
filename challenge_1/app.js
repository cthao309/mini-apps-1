// ######################################################################
// Object to contain the logic for the game
// ######################################################################
let ticTacToeLogic = {
  // initialize the game
  initialize: function() {

    // invoke the for user prompt
    ticTacToeLogic.checkPlayerToGoFirst();

    document.getElementById('start').removeEventListener('click', ticTacToeLogic.initialize);

    // render the table
    ticTacToeLogic.renderTable();

    // render the score
    ticTacToeLogic.renderScore();
  },

  // check for invalid input to start the game
  checkPlayerToGoFirst: function() {
    let playerToGoFirst;
    playerToGoFirst = prompt('Which would go first, X or O?');

    let player = playerToGoFirst.toUpperCase();

    if(player !== 'X' && player !== 'O') {
      ticTacToeLogic.checkPlayerToGoFirst();
    } else {
      ticTacToeLogic.turn = player === 'X' ? ticTacToeLogic.turn : !ticTacToeLogic.turn;

      let playerToStartFirst = document.getElementById('playerStartingFirst');
      playerStartingFirst.innerText = `Player "${player}" is starting first`
      return;
    }

  },

  // table setting
  table:
  [
    '', '', '',
    '', '', '',
    '', '', '',
  ],

  // keeping track of wins
  score: {
    'X': 0,
    'O': 0
  },

  // method to render the socre
  renderScore: function() {
    let xScore = document.getElementById('xWin');
    xScore.innerText = ticTacToeLogic.score['X'];

    let oScore = document.getElementById('oWin');
    oScore.innerText = ticTacToeLogic.score['O'];
  },

  // keep track of turn -- default (turn = false, first player turn 'X')
  turn: true,

  // toggle turn
  toggleTurn: function() {

    let turn = !ticTacToeLogic.turn;

    ticTacToeLogic.turn = turn;

    if(turn) {
      return 'O';
    } else {
      return 'X'
    }
  },

  // render table
  renderTable: function() {
    // grab the table id from the dom
    let tableId = document.getElementById('board');

    let table = this.table;

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
      // append the squares onto the dom
      tableId.append(squareContainer);
    }

  },

  // computer turn - logic
  playerMove: function(e) {

    // grab the element being clicked
    let square = e.target;


    // grab it id
    let clickedSquareIndex = Number(e.target.id);

    // toggle between player
    let currentPlayer = ticTacToeLogic.toggleTurn();
    square.classList.add(currentPlayer)

    // remove the click event listener on the square once it has been clicked
    square.removeEventListener('click', ticTacToeLogic.playerMove);

    // append player move on the dom
    square.innerText = currentPlayer;

    if(currentPlayer === 'X') {
      // update the table for 'X' player
      ticTacToeLogic.table[clickedSquareIndex] = currentPlayer;
    } else {
      // update the table for 'O' player
      ticTacToeLogic.table[clickedSquareIndex] = currentPlayer;
    }

    // check for winning combination
    ticTacToeLogic.checkWinning(currentPlayer);
  },

  // method for checking winning combination
  checkWinning: function(player) {
    // winning combination
    // [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]

    let table = ticTacToeLogic.table;

    let case1 = (player === table[0] && player === table[1] && player === table[2]);
    let case2 = (player === table[3] && player === table[4] && player === table[5]);
    let case3 = (player === table[6] && player === table[7] && player === table[8]);
    let case4 = (player === table[0] && player === table[3] && player === table[6]);
    let case5 = (player === table[1] && player === table[4] && player === table[7]);
    let case6 = (player === table[2] && player === table[5] && player === table[8]);
    let case7 = (player === table[0] && player === table[4] && player === table[8]);
    let case8 = (player === table[2] && player === table[4] && player === table[6]);
    let case9 = table[0] !== "" && table[1] !== "" && table[2] !== "" && table[3] !== "" && table[4] !== "" && table[5] !== "" && table[6] !== "" && table[7] !== "" && table[8] !== "";

    if(case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8) {
      ticTacToeLogic.score[player]++;

      // grab the message element to display winning
      // add text of winning
      let message = document.getElementById('message');
      message.innerText = `We have a winner. ${player} wins.`;

      // grab the message from marquee
      // add text to direct the user on how to play the game
      let marquee = document.getElementsByTagName('marquee')[0];
      marquee.innerText = `To continue playing press on the reset button`;


      // loop to remove all the click event listener on the square once a winner is known
      let square = document.getElementsByClassName('square');
      for(let i = 0; i < square.length; i++) {
        square[i].removeEventListener('click', ticTacToeLogic.playerMove);
      }

      // render new score sheet
      ticTacToeLogic.renderScore();
    }

    if(case9) {
      // grab the message element to display winning
      // add text of winning
      let message = document.getElementById('message');
      message.innerText = `We have a tie.`;
    }
  },

  // method to clear the board game
  clearBoard: function() {
    // reset all the values in the table to empty string
    for(let i = 0; i < ticTacToeLogic.table.length; i++) {
      ticTacToeLogic.table[i] = '';
    }

    // toggle between player
    // display message whose turn to go first
    let player = ticTacToeLogic.turn ? 'X' : 'O';
    let playerToStartFirst = document.getElementById('playerStartingFirst');
    playerStartingFirst.innerText = `Player "${player}" is starting first`

    // grab the message element to display winning
    // add text of winning
    let message = document.getElementById('message');
    message.innerText = ``;

    // remove the old board
    let board = document.getElementById('board');
    board.remove();

    // create a new board
    let newBoard = document.createElement('div');
    newBoard.setAttribute('id', 'board');

    document.body.append(newBoard)

    // re-render the board
    ticTacToeLogic.renderTable();
  }
}

// ######################################################################
// Start the start logic
// add a click event listener on the start btn to initiate the game
// ######################################################################
let startBtn = document.getElementById('start');
startBtn.addEventListener('click', ticTacToeLogic.initialize);


// ######################################################################
// Reset the game logic
// ######################################################################
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', ticTacToeLogic.clearBoard)


// ######################################################################
// Clear game score logic
// ######################################################################
let clearScoreBtn = document.getElementById('clearScore');
clearScoreBtn.addEventListener('click', function() {
  window.location.reload();
})
