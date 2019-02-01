class Tile {
  constructor(num) {
    this.value = num;
    this.active = true; //for button click
    this.counter = 0;
    this.tokenStyle = {
      height:'30px',
      width:'30px',
      borderRadius: '15px',
      backgroundColor: 'white'
    };

    this.style = {
      height: '40px',
      width: '40px',
      backgroundColor: 'white',
      border: '1px solid black'
    }
  }
}

export default Tile;