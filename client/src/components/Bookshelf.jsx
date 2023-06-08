import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

export default function Bookshelf() {
  const [bookshelf, setBookshelf] = useState([]);
  useEffect(() => {
    axios.get('/bookshelf')
      .then((response) => setBookshelf([...response.data]))
      .catch((err) => console.log(err));
  }, []);
  const thoughtsClickHandler = () => {
    console.log('add some thoughts placeholder');
    // add functionality to add thoughts journal entry about the book.
    // should update incoming funcionality in reading list where you can leave notes
    // better yet, add a currently reading section, maybe call it my nightstand
  };
  return (
    <>
      <h1 className="bookshelf">My Bookshelf</h1>
      <div className="bookshelf-container">
        {bookshelf.map((book) => (
          <Book book={book} key={book.id} button="Thoughts" clickHandler={thoughtsClickHandler} />
        ))}
      </div>
    </>
  );
}
