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
  return (
    <div>
      <h1>My Reading List</h1>
      {list.map((entry) => (
        <Book book={entry} key={entry.id} />
      ))}
    </div>
  );
}
