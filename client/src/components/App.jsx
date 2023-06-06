import React, { useState } from 'react';
import Quote from './Quote';
import Button from './Button';
import ReadingList from './ReadingList';

export default function App() {
  const [view, setView] = useState('home');
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
