import React, { useContext } from 'react';

import { MonsterContext } from '../Context/monsters-context';
import './search-box.styles.css';

const SearchBox = ({ placeholder }) => {
  const { searchField, setSearchField } = useContext(MonsterContext);
  return (
    <input
      type="search"
      placeholder={placeholder}
      value={searchField}
      onChange={(e) => setSearchField(e.target.value)}
    />
  );
};

export { SearchBox as default };
