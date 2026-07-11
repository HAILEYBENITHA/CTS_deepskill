import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    // Create an array of Cart and initialize 5 items
    this.state = {
      items: [
        new Cart('Laptop', 55000),
        new Cart('Mobile Phone', 25000),
        new Cart('Head Phone', 2000),
        new Cart('Keyboard', 1200),
        new Cart('Mouse', 800)
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Online Shopping Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
