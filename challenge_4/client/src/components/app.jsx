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
      ]
    }
  }

  render() {
    return (
      <div className="board_container">
        <Message />
        <Board
          board={this.state.board}
        />

      </div>
    )
  }
}

export default App;

