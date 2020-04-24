import React from 'react';
import Square from './Square.jsx';


class Board  extends React.Component {
  constructor(props) {
    super(props);

    this.state ={

    }
  }

  render() {
    let board = this.props.board.map((rowItem, row) => {
      return <tr>
          {rowItem.map((colItem, col) => {
            return <Square
                      key={row+col}
                      row={row}
                      col={col} />
              })
          }
        </tr>
      })
    return (
      <div className="board">
        Board Game
        {board}
      </div>
    )
  }
}

export default Board;