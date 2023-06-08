import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';
import Button from './Button';
import ReadingList from './ReadingList';
import Bookshelf from './Bookshelf';

export default function App() {
  const [view, setView] = useState('Home');

  // Triggers Server to git Quote API and save quote to DB
  useEffect(() => {
    axios.get('/more-quotes');
  }, []);

  const clickHandler = (toView) => {
    setView(toView);
  };

  if (view === 'Home') {
    return (
      <div id="App">
        <Button name="Home" clickHandler={clickHandler} />
        <Button name="Reading List" clickHandler={clickHandler} />
        <Button name="Bookshelf" clickHandler={clickHandler} />
        <Quote />
      </div>
    );
  }
  if (view === 'Reading List') {
    return (
      <div id="App">
        <Button name="Home" clickHandler={clickHandler} />
        <Button name="Reading List" clickHandler={clickHandler} />
        <Button name="Bookshelf" clickHandler={clickHandler} />
        <ReadingList />
      </div>
    );
  }
  if (view === 'Bookshelf') {
    return (
      <div id="App">
        <Button name="Home" clickHandler={clickHandler} />
        <Button name="Reading List" clickHandler={clickHandler} />
        <Button name="Bookshelf" clickHandler={clickHandler} />
        <Bookshelf />
      </div>
    );
  }
}
