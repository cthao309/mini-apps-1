import React from 'react';

const Square = (props) => {
  return (
    <td className="square" data-row={props.row} data-col={props.col}>
      <div>Square</div>
    </td>
  )
}

export default Square;