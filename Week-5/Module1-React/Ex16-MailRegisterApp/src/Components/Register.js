import React, { Component } from 'react';

// Register component: form accepting name, email and password, validated via
// event handlers (onChange) and the form submit (onSubmit).
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {},
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Validate a single field (used on change - event handler)
  validateField(name, value) {
    const errors = { ...this.state.errors };
    switch (name) {
      case 'name':
        if (value.length < 5) {
          errors.name = 'Name should have at least 5 characters';
        } else {
          delete errors.name;
        }
        break;
      case 'email':
        if (!value.includes('@') || !value.includes('.')) {
          errors.email = 'Email should contain @ and .';
        } else {
          delete errors.email;
        }
        break;
      case 'password':
        if (value.length < 8) {
          errors.password = 'Password should have at least 8 characters';
        } else {
          delete errors.password;
        }
        break;
      default:
        break;
    }
    return errors;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const errors = this.validateField(name, value);
    this.setState({ errors, message: '' });
  }

  // Validate all fields (used on submit - event submit)
  handleSubmit(event) {
    event.preventDefault();

    let errors = {};
    errors = this.validateField('name', this.state.name);
    errors = this.validateField('email', this.state.email);
    errors = this.validateField('password', this.state.password);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ message: 'Registration successful!' });
    } else {
      this.setState({ message: '' });
    }
  }

  render() {
    const { name, email, password, errors, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Mail Register</h2>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        {errors.name && <div className="error">{errors.name}</div>}

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        {errors.email && <div className="error">{errors.email}</div>}

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Register</button>

        {message && <div className="success">{message}</div>}
      </form>
    );
  }
}

export default Register;
