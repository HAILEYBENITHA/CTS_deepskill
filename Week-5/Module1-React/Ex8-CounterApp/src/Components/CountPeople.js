import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    // Store the entrycount and exitcount in state
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }

  // Increment the entry count by 1 when a person enters the mall
  UpdateEntry() {
    this.setState({ entrycount: this.state.entrycount + 1 });
  }

  // Increment the exit count by 1 when a person exits the mall
  UpdateExit() {
    this.setState({ exitcount: this.state.exitcount + 1 });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Mall</h1>
        <h2>Number of people entered: {this.state.entrycount}</h2>
        <h2>Number of people exited: {this.state.exitcount}</h2>
        <button className="login-btn" onClick={this.UpdateEntry}>
          Login
        </button>
        <button className="exit-btn" onClick={this.UpdateExit}>
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;
