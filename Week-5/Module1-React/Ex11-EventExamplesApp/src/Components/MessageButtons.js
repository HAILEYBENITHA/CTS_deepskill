import React, { Component } from 'react';

// MessageButtons: button "Say Welcome" invokes a function which takes an
// argument, and a button uses the synthetic event onPress to display
// "I was clicked".
class MessageButtons extends Component {
  sayWelcome(message) {
    alert(message);
  }

  handlePress(event) {
    // 'event' is the React SyntheticEvent
    alert('I was clicked - ' + event.type);
  }

  render() {
    return (
      <div className="section">
        <h2>Message Buttons</h2>
        <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
        <button onClick={this.handlePress.bind(this)}>OnPress</button>
      </div>
    );
  }
}

export default MessageButtons;
