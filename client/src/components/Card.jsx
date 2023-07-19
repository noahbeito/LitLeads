import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ book }) {
  return (
    <div className="book-container">
      <img src={book.images.thumbnail} alt="book cover" />
      <span>{book.title}</span>
      <span>
        -
        {book.authors.join(', ')}
        -
      </span>
    </div>
  );
}

// Card.propTypes = {
//   book: PropTypes.shape({
//     images: PropTypes.object,
//   }).isRequired,
// }