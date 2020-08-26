import React, { useState } from 'react';

function Info({ ticketLength, hiddenCounter, onClick }) {
  const [counter, setCounter] = useState(0);
  counter !== hiddenCounter && setCounter(hiddenCounter);

  return (
    <div className="Info">
      <span className="result">
        {`showing ${ticketLength} results`}
      </span>
      <span
        className="result"
        style={{ display: counter === 0 && 'none' }}
      >
        <span id="hideTicketsCounter">
          {counter}
        </span>
        <span> hidden tickets </span>
        <button
          id="restoreHideTickets"
          className="restoreHiddenTickets"
          onClick={() => onClick()}
        >
          {' '}
          Restore
        </button>
      </span>
    </div>
  );
}

export default Info;
