import React from 'react';
import Board from './Board.jsx';
import Message from './Message.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      board: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
      ],
      turn: false,
      player: ''
    }
  }

  handleClickSquare(row, col) {
    console.log('clicked on square => ', row, col);

    let turn = !this.state.turn;
    let player = turn ? 'X' : 'O';

    let board = this.state.board;
    // board[row][col] = player;
    console.log('player => ', player)
    let counter = board.length -1;

    while(counter >= 0) {
      console.log('row: ', counter, ' col: ', col)
      if(board[counter][col] === '') {
        board[counter][col] = player;
        this.setState({ board });
        counter = -1;
      } else  {
        counter--;
      }
    }

    // toggle the turn
    this.setState({ turn, player })

    console.log('state => ', this.state)
  }

  render() {
    return (
      <div className="board_container">
        <Message />
        <Board
          board={this.state.board}
          handleClickSquare={this.handleClickSquare.bind(this)}
          player={this.state.player}
        />

      </div>
    )
  }
}

export default App;

