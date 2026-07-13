import React, { Component } from 'react';

// CurrencyConvertor: convert Indian Rupees to Euro when the Convert button is
// clicked. Handles the click event of the button to invoke handleSubmit and
// perform the conversion.
class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { rupees: 0, euros: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // Handle the click event of the Convert button
  handleSubmit(event) {
    // prevent default form submission behaviour
    event.preventDefault();
    const rate = 0.011; // 1 INR ~= 0.011 EUR (illustrative)
    const converted = parseFloat(this.state.rupees) * rate;
    this.setState({ euros: converted.toFixed(2) });
  }

  render() {
    return (
      <div className="section">
        <h2>Currency Convertor (INR to EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Indian Rupees:
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Convert</button>
        </form>
        <p className="msg">Euros: {this.state.euros}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
