import React, { Component } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

// bloggerapp: 3 components shown using as many conditional rendering
// techniques as possible.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { view: 'book' };
    this.setView = this.setView.bind(this);
  }

  setView(view) {
    this.setState({ view });
  }

  render() {
    const { view } = this.state;

    // Technique 1: if / else with element variables
    let content;
    if (view === 'book') {
      content = <BookDetails />;
    } else if (view === 'blog') {
      content = <BlogDetails />;
    } else {
      content = <CourseDetails />;
    }

    // Technique 2: logical && (CourseDetails shown ONLY when view==='course')
    const courseSection = view === 'course' && <CourseDetails />;

    // Technique 3: ternary operator for the heading
    const heading = (
      <h1>{view === 'book' ? 'Book Section' : 'Other Section'}</h1>
    );

    return (
      <div className="App">
        <h1>Blogger App</h1>

        <nav>
          <button onClick={() => this.setView('book')}>Books</button>
          <button onClick={() => this.setView('blog')}>Blogs</button>
          <button onClick={() => this.setView('course')}>Courses</button>
        </nav>

        {/* if/else element variable */}
        {content}

        {/* logical && */}
        {courseSection}

        {/* ternary */}
        {heading}
      </div>
    );
  }
}

export default App;
