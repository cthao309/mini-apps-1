import React from 'react';

const Square = (props) => {
  let classes = ['player'];
  classes.push(props.player);
  return (
    <td className='square'
      onClick={() => props.handleClickSquare(props.row, props.col)}
      data-row={props.row}
      data-col={props.col} >
      <div className={props.player}> </div>
    </td>
  )
}

export default Square;