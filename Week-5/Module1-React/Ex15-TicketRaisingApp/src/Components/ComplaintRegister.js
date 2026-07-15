import React, { Component } from 'react';

// ComplaintRegister: a controlled React form with a textbox (employee name)
// and a textarea (complaint). The handleSubmit event generates a reference
// number shown in an alert box.
class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      complaint: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleComplaintChange = this.handleComplaintChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ employeeName: event.target.value });
  }

  handleComplaintChange(event) {
    this.setState({ complaint: event.target.value });
  }

  handleSubmit(event) {
    // prevent the default form submission / page reload
    event.preventDefault();

    // generate a reference number for further follow-ups
    const referenceNumber =
      'REF-' + Math.floor(100000 + Math.random() * 900000);

    alert(
      'Complaint registered successfully!\nReference Number: ' +
        referenceNumber
    );

    // reset the form
    this.setState({ employeeName: '', complaint: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Raise a Complaint</h2>

        <label>
          Employee Name:
          <input
            type="text"
            value={this.state.employeeName}
            onChange={this.handleNameChange}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Complaint:
          <textarea
            rows="5"
            value={this.state.complaint}
            onChange={this.handleComplaintChange}
            placeholder="Describe your complaint"
          />
        </label>

        <button type="submit">Submit Complaint</button>
      </form>
    );
  }
}

export default ComplaintRegister;
