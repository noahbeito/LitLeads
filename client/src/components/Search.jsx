import React, { useState } from 'react';
import axios from 'axios';
import Book from './Book';
import Button from './Button';

export default function Search() {
  const [books, setBooks] = useState([]);

  const onSearchHandler = () => {
    axios.get('/books')
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="Search">Search Icon</h1>
      <input type="text" />
      <Button name="Search" clickHandler={onSearchHandler} />
      {
        books.map((book) => (
          <Book book={book} key={book.id} />
        ))
      }
    </>
  );
}
