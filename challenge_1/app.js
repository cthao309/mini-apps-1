// object to contain the logic for the game
let ticTacToeLogic = {
  // table setting
  table:
  [
    "", "", "",
    "", "", "",
    "", "", "",
  ],

  // initialize table
  initialize: function() {
    // grab the table id from the dom
    let tableId = document.getElementById('game_table');

    let table = this.table;
    console.log('table => ', table)

    // loop through the table array to generate the table
    for(let i = 0; i < table.length; i++) {
      let node = document.createElement('div');

      // add a class to the node
      node.classList.add('square');

      // append the squares onto the dom
      tableId.append(node);
    }
  },

  // computer turn - logic
  aiMove: function() {
    let squares = document.getElementsByClassName('square');
    let randomMove = Math.floor(Math.random() * squares.length);
    console.log('square => ', squares)
    console.log('random => ', randomMove)
  },

  // logic to append move to the dom
  appendToDom: function(index, turn) {

  }
}

// initialize the tic-tac-toe game
ticTacToeLogic.initialize();

// grab the start btn
let startBtn = document.getElementById('start');

// add a click event listener on the start btn to initiate the game
startBtn.addEventListener('click', function(e) {
  console.log('hello tic tac toe. Game is staring...');



  // invoke aiMove
  ticTacToeLogic.aiMove();
});

