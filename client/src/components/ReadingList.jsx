import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

export default function ReadingList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('/reading-list')
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const shelveClickHandler = (book) => {
    axios.put('/bookshelf', { book })
      .then(() => axios.delete('/reading-list', { book }))
      .then(() => axios.get('/reading-list'))
      .then((response) => setList(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1 className="reading-list">My Reading List</h1>
      <div className="reading-list-container">
        {list.map((entry) => (
          <Book book={entry} key={entry.id} button="shelve" clickHandler={shelveClickHandler} />
        ))}
      </div>
    </>
  );
}
