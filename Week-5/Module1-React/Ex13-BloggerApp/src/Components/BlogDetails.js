import React from 'react';

// Blog Details component - uses the map() function and keys.
function BlogDetails() {
  const blogs = [
    { id: 1, title: 'Getting Started with React', views: 1200 },
    { id: 2, title: 'Understanding Hooks', views: 2300 },
    { id: 3, title: 'Conditional Rendering in Depth', views: 980 }
  ];

  return (
    <div className="card">
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> - {blog.views} views
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
