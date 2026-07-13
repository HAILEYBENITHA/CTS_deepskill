import React, { Component } from 'react';

// Counter component: Increment / Decrement buttons, the Increase button
// invokes multiple methods - increment the value and say a static hello.
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, message: '' };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  // Multiple methods invoked by the Increase button
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello() {
    this.setState({ message: 'Hello - counter increased!' });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="section">
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        {/* Increase button invokes multiple methods */}
        <button onClick={() => { this.increment(); this.sayHello(); }}>
          Increase
        </button>
        <button onClick={this.decrement}>Decrement</button>
        <p className="msg">{this.state.message}</p>
      </div>
    );
  }
}

export default Counter;
