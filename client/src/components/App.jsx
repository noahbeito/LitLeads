import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';
import Button from './Button';
import ReadingList from './ReadingList';

export default function App() {
  const [view, setView] = useState('home');

  // Triggers Server to git Quote API and save quote to DB
  useEffect(() => {
    axios.get('/more-quotes');
  }, []);

  const clickHandler = (toView) => {
    setView(toView);
  };

  if (view === 'home') {
    return (
      <div id="App">
        <Button name="reading-list" clickHandler={clickHandler} />
        <Quote />
      </div>
    );
  }
  if (view === 'reading-list') {
    return (
      <div id="App">
        <Button name="home" clickHandler={clickHandler} />
        <ReadingList />
      </div>
    );
  }
}
