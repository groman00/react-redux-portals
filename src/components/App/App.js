import React, { Component } from 'react';
import CartItems from '../../containers/cart/CartItems';
import AddToCart from '../../containers/cart/AddToCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToCart/>
        <CartItems/>
      </div>
    );
  }
}

export default App;
