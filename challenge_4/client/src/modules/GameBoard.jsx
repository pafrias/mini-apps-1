import BoardRow from './BoardRow.jsx';

var GameBoard = props => (
  <table>
    <tbody>
      {props.tiles.map(tile => {
        <BoardRow />
      })}
    </tbody>
  </table>
);

export default GameBoard;