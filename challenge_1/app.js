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

  // object to keep track of which square has been used
  trackMove: {},

  // render table
  renderTable: function() {
    // grab the table id from the dom
    let tableId = document.getElementById('game_table');

    let table = this.table;
    console.log('table => ', table)

    // loop through the table array to generate the table
    for(let i = 0; i < table.length; i++) {
      // create the element node
      let node = document.createElement('div');

      // create the text node
      let textNode = document.createTextNode(table[i]);

      // append the text node to the element node
      node.append(textNode);

      // add a class to the node
      node.classList.add('square');

      // append the squares onto the dom
      tableId.append(node);
    }

  },

  // computer turn - logic
  aiMove: function() {
    let randomMove = Math.floor(Math.random() * this.table.length);
    console.log('computer turn => ', randomMove)

    if(!this.trackMove[randomMove] && Object.keys(this.trackMove).length <= this.table.length) {
      this.trackMove[randomMove] = true
    } else {
      this.aiMove();
    }

    console.log('tracker => ', this.trackMove)
    this.appendToDom(randomMove, 'X');
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
  ticTacToeLogic.aiMove();
});

