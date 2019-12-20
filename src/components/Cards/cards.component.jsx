import React from 'react';

import './cards.styles.css';

const Cards = ({ monster }) => (
  <div className="cards-container">
    <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);

export { Cards as default };
