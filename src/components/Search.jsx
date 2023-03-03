import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function Search({ searchFood }) {
  const [name, setName] = useState('');

  const handleSearchName = (e) => {
    setName(e.target.value);
    if (e.target.value !== '') {
      searchFood(e.target.value);
    }
  };

  return (
    <div>
      <Divider>Search</Divider>
      <div className="searchBar">
        <label htmlFor="nameInput">Name</label>
        <Input
          value={name}
          onChange={handleSearchName}
          type="text"
          name="nameInput"
        />
      </div>
    </div>
  );
}

export default Search;
