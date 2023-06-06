import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Book({ book }) {
  const [button, setButton] = useState('save');
  const clickHandler = () => {
    axios.post('/reading-list', { ...book })
      .then(() => {
        setButton('saved');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="book-container">
      <img src={book.images.thumbnail} alt={book.title} />
      <span>{book.title}</span>
      <span>{book.authors.join(', ')}</span>
      <button type="button">More Info</button>
      <Button name={button} clickHandler={clickHandler} />
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
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
