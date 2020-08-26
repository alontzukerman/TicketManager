import React from 'react';

function Search({ setValue }) {
  return (
    <div className="Search">
      <input
        id="searchInput"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
