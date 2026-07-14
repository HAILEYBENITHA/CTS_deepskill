import React from 'react';

// Book Details component - uses the map() function and keys to render a list.
function BookDetails() {
  const books = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
    { id: 3, title: 'Refactoring', author: 'Martin Fowler' }
  ];

  return (
    <div className="card">
      <h2>Book Details</h2>
      <ul>
        {/* map() to render multiple components, key for stable identity */}
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
