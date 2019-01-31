var products = [
  {
    name: 'Redi-Whip whipping cream',
    price: 6.99,
    image: "https://www.reddiwip.com/sites/g/files/qyyrlu181/files/images/products/original-30716.png"
  },
  {
    name: 'Handcuffs',
    price: 12.99,
    image: "https://images-na.ssl-images-amazon.com/images/I/61i2nQFgKkL._SX466_.jpg"
  },
  {
    name: 'Tide Laundry Detergent',
    price: 9.69,
    image: "https://pics.drugstore.com/prodimg/588151/900.jpg"
  }
]

var shoppingCart = [
  {
    name: 'handcuffs',
    producer: 'Loving&Co',
    price: 12.99,
    quantity: 1
  },
  {
    name: 'whipped cream',
    producer: "Redi-Whip",
    price: 6.99,
    quantity: 4
  },
  {
    name: 'laundry detergent 64oz',
    producer: 'Tide',
    price: 9.69,
    quantity: 2
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      costumer: {
        contact: {},
        shipping: {},
        financial: {}
      },
      stillShopping: false,
      shoppingCart: shoppingCart,
      products: products
    };
    this.checkOut = this.checkOut.bind(this);
    this.updateCostumer = this.updateCostumer.bind(this);
  }

  render() {
    return (
      <div>
        <Header stillShopping={this.state.stillShopping} cartSize={this.state.shoppingCart.length} checkOut={this.checkOut}/>
        {this.state.stillShopping ? 
        <Main products={this.state.products}/> :
        <CheckOut costumer={this.state.costumer} handler={this.updateCostumer}/>
        }
      </div>
    );
  }

  checkOut() {
    this.setState(state => {
      if (state.stillShopping) {
        return {stillShopping: false}
      } else {
        return {stillShopping: true}
      }
    })
  }

  updateCostumer(field, info) {
    this.setState(state => {
      var contact = state.contact;
      contact[field] = info;
      return { contact : contact }
    })
  }
}

var Header = props => (
  <header>
    <div className="jumbotron">
      <h3>Welcome to...</h3>
      <h1>Glamazon Prime</h1>
    </div>
    <div className="checkout">
      {props.stillShopping ? 
      <button onClick={() => props.checkOut()} className="checkout">
        <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-01-512.png"/>
      </button>
      : <div className="checkout">checking out...</div>}
    </div>
  </header>
);

var Main = props => (
  <main className="shopping">
    {props.products.map(product => {
      return <Product product={product} handler={props.handler}/>
    })}
  </main>
);

var Product = props => (
  <div className="product">
    <img src={props.product.image}/>
    <div>{props.product.name}</div>
    <div>${props.product.price}</div>
  </div>
)

var CheckOut = props => (
  <main className="checkout">
    <Form1 handler={props.handler} contact={props.costumer.contact}/>
    <Form2 handler={props.handler} display={props.costumer.contact} shipping={props.costumer.shipping}/>
    <Form3 handler={props.handler} display={props.costumer.shipping} financial={props.costumer.financial}/>
  </main>
);

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    if (this.state.display) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input name='first_name' type='text' placeholder='First Name' onChange={this.handleChange}/>
          <input name='last_name' type='text' placeholder='Last Name' onChange={this.handleChange}/>
          <input name='email' type='email' placeholder='you@probablygmail.com' onChange={this.handleChange}/>
          <input name='password' type='password' placeholder='password' onChange={this.handleChange}/>
          <button type="submit" value="submit"/>
        </form>
      );
    } else {
      return (
        <div>
          <p>Contact Info:</p>
          <p>{this.state.first_name}</p>
          <p>{this.state.last_name}</p>
          <p>{this.state.email}</p>
          <p>***********</p>
        </div>
      )
    }
    
  }
  
  handleChange(event) {
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(() => {
      return state
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handler('contact', this.state);
  }

} 

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: (props.display === undefined),
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    if (this.state.display) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input name='address1' type='text' placeholder='Address' onChange={this.handleChange}/>
          <input name='address2' type='text' placeholder='(opt)' onChange={this.handleChange}/>
          <input name='city' type='text' placeholder='City' onChange={this.handleChange}/>
          <input name='state' type='text' placeholder='State' onChange={this.handleChange}/>
          <input name='zip' type='text' placeholder='Zip Code' onChange={this.handleChange}/>
          <button type="submit" value="submit"/>
        </form>
      );
    } else {
      return (
        <div>
          <p>Shipping Address:</p>
          {(this.state.address2.length > 0) ?
          <div className="address"><p>{this.state.address1}</p> <p>{this.state.address2}</p></div> : 
          <p>{this.state.address1}</p>
          }
          <p>{this.state.city}</p>
          <p>{this.state.state}</p>
          <p>{this.state.zip}</p>
        </div>
      )
    }
    
  }
  
  handleChange(event) {
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(() => {
      return state
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handler('contact', this.state);
  }

} 

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: (props.display === undefined),
      cc_number: '',
      exp_date: '',
      zip: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    if (this.state.display) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input name='cc_number' type='number' placeholder='Credit Card Number' onChange={this.handleChange}/>
          <input name='exp_date' type='text' placeholder='Exp Date' onChange={this.handleChange}/>
          <input name='zip' type='email' placeholder='Zip Code' onChange={this.handleChange}/>
          <button type="submit" value="submit"/>
        </form>
      );
    } else {
      return <div></div>;
    }
  }
  
  handleChange(event) {
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(() => {
      return state
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handler('contact', this.state);
  }

} 



ReactDOM.render(<App />, document.getElementById('app'));

