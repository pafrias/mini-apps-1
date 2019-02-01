import React from 'react';

var BoardRow = props => (
  <tr>
    {props.row.map(tile => {
      return(
        <td id={tile.value}>HI
          <div onClick={() => {props.action}}></div>
        </td>)
    })}
  </tr>
  
)

export default BoardRow;