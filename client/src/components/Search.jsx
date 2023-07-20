import React, { useState } from 'react';
import axios from 'axios';
import Book from './Book';

export default function Search() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');

  const onSearchHandler = () => {
    console.log('----', searchText);
    axios.get('/books', {
      params: {
        author: 'unknown',
        quote: searchText,
      },
    })
      .then((res) => {
        console.log(res, res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="Search">Search Icon</h1>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button type="submit" onClick={() => onSearchHandler()}>Search</button>
      <div className="search-books-container">
        {
          books.map((book) => (
            <Book book={book} key={book.id} />
          ))
        }
      </div>
    </>
  );
}
