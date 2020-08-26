import React, { useState } from 'react';
import Tickets from './Tickets';
import Search from './Search';

function Main() {
  const [inputValue, setInputValue] = useState('');
  function changeInputValue(value) {
    setInputValue(value);
  }
  return (
    <div className="Main">
      <Search setValue={changeInputValue} />
      <Tickets
        inputValue={inputValue}
      />
    </div>
  );
}

export default Main;
