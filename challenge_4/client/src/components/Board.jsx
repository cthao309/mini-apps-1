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
      return (<tr key={row}>
          {rowItem.map((colItem, col) => {
            return <Square
                      key={`${row}${col}`}
                      row={row}
                      col={col}
                      handleClickSquare={this.props.handleClickSquare}
                      player={colItem}
                    />
              })
          }
        </tr>)
      });
    return (
      <table className="board">
        <tbody>
          {board}
        </tbody>
      </table>
    )
  }
}

export default Board;