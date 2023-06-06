import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quote() {
  const [quotes, setQuotes] = useState([{}]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    axios.get('/quotes')
      .then((res) => {
        setQuotes(res.data);
        setIndex(Math.floor(Math.random() * res.data.length));
      })
      .catch((err) => console.log(err));
  }, []);

  const clickHandler = () => {
    quotes.splice(index, 1);
    setQuotes([...quotes]);
    setIndex(Math.floor(Math.random() * quotes.length));
  };
  return (
    <>
      <span>{quotes[index].quote}</span>
      <span>{quotes[index].author}</span>
      <span>{quotes[index].philosophy}</span>
      <button type="button" onClick={() => clickHandler()}>Next</button>
    </>
  );
}
