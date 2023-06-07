import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Book({ book }) {
  const [saveButton, setSaveButton] = useState('save');
  const [showInfo, setShowInfo] = useState(false);
  const [infoButton, setInfoButton] = useState('more-info');

  const clickHandler = () => {
    axios.post('/reading-list', { ...book })
      .then(() => {
        setSaveButton('saved');
      })
      .catch((err) => console.log(err));
  };
  const moreInfoClickHandler = (currentButton) => {
    setShowInfo(!showInfo);
    if (currentButton === 'more-info') {
      setInfoButton('less-info');
    } else {
      setInfoButton('more-info');
    }
  };
  return (
    <div className="book-container">
      <img src={book.images.thumbnail} alt="book cover" />
      <span>{book.title}</span>
      <span>{book.authors.join(', ')}</span>
      {showInfo && <span>{book.description}</span>}
      <Button name={infoButton} clickHandler={moreInfoClickHandler} />
      <Button name={saveButton} clickHandler={clickHandler} />
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
    description: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {},
};
