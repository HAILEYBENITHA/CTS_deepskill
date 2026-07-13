import React, { Component } from 'react';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

// Conditional rendering: guest vs logged-in user.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    // Element variables for conditional rendering
    let page;
    if (isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (
      <div className="App">
        <h1>Ticket Booking App</h1>

        {/* Login and Logout buttons display different pages accordingly */}
        {isLoggedIn ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}

        {/* Conditional rendering - show only the relevant page */}
        {page}
      </div>
    );
  }
}

export default App;
