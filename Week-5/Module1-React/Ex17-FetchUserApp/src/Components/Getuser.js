import React, { Component } from 'react';

// Getuser: a class component that fetches user details from the REST API in
// the asynchronous componentDidMount() lifecycle method and displays the
// title, first name and image.
class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }

  componentDidMount() {
    // Invoke the URL using the fetch method
    fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => {
        const result = data.results[0];
        this.setState({
          user: {
            title: result.name.title,
            firstName: result.name.first,
            image: result.picture.large
          },
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <div>Loading user...</div>;
    }

    if (!user) {
      return <div>Unable to load user.</div>;
    }

    return (
      <div className="user-card">
        <img src={user.image} alt={user.firstName} />
        <h2>
          {user.title} {user.firstName}
        </h2>
        <p>Title: {user.title}</p>
        <p>First Name: {user.firstName}</p>
      </div>
    );
  }
}

export default Getuser;
