import React from 'react';

var BoardRow = props => (
  <tr>
    {props.row.map(tile => {
      return(
        <td className="tile" style={tile.style} id={tile.value}>
          <div
            value={tile.value}
            style={tile.tokenStyle}
            onClick={(e) => {
              // console.log(e.target);
              if (tile.active) {
                props.action(e, tile.value)
              }
            }}>
            </div>
        </td>)
    })}
  </tr>
)

export default BoardRow;