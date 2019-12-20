import React from 'react';

import Cards from '../Cards/cards.component';

import './card-lists.styles.css';

const CardLists = ({ monsters }) => (
  <div className="card-lists">
    {monsters.map((monster) => <Cards key={monster.id} monster={monster} />)}
  </div>
);

export { CardLists as default };
