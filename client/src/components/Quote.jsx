import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Book from './Book';
import Button from './Button';

export default function Quote() {
  const [quotes, setQuotes] = useState([{}]);
  const [index, setIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const [showBooks, setShowBooks] = useState(false);

  useEffect(() => {
    axios.get('/quotes')
      .then((res) => {
        setQuotes(res.data);
        setIndex(Math.floor(Math.random() * res.data.length));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('/books', {
      params: {
        author: quotes[index].author,
      },
    })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, [index]);

  const nextClickHandler = () => {
    quotes.splice(index, 1);
    setQuotes([...quotes]);
    setIndex(Math.floor(Math.random() * quotes.length));
    setShowBooks(false);
  };

  const booksClickHandler = () => {
    setShowBooks(!showBooks);
  };

  return (
    <div className="quote-container">
      <span>{quotes[index].quote}</span>
      <span>{quotes[index].author}</span>
      <span>{quotes[index].philosophy}</span>
      <Button name="Next" clickHandler={nextClickHandler} />
      <Button name="Books" clickHandler={booksClickHandler} />
      {showBooks
      && (
        <div className="book-list">
          {books.map((book) => <Book book={book} key={book.id} />)}
        </div>
      )}
    </div>
  );
}
