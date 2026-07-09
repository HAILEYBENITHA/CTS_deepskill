import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    // Initialize the component state with an empty list of posts
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetch the posts using the Fetch API and store them in state
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Lifecycle hook - called after the component is mounted
  componentDidMount() {
    this.loadPosts();
  }

  // Lifecycle hook - catches errors thrown in the component tree
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert('An error occurred while rendering the posts: ' + error);
  }

  render() {
    return (
      <div>
        <h1>List of Blog Posts</h1>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
