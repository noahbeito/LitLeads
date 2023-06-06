import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book }) {
  return (
    <div>
      <span>{book.title}</span>
      <span>{book.authors.join(', ')}</span>
      <img src={book.images.thumbnail} alt={book.title} />
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.shape({
      smallThumbnail: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }),
};

Book.defaultProps = {
  book: {},
};
