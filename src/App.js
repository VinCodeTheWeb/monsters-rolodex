import React, { useState, useEffect } from 'react';

import CardLists from './components/CardLists/card-lists.component';
import SearchBox from './components/SearchBox/search-box.component';

import { MonsterContext } from './components/Context/monsters-context';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    
  }, []);
  
  const filterMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  
  return (
    <MonsterContext.Provider value={{ searchField, setSearchField }}>
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" />
        <CardLists monsters={filterMonsters} />
      </div>
    </MonsterContext.Provider>
  );
};

export default App;
