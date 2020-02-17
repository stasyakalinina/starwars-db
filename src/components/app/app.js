import React from 'react';
import './app.css'

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

const App = () => {
  return(
    <div className="container">
      <Header />
      <RandomPlanet />
      <section className="app-people">
        <ItemList />
        <PersonDetails />
      </section>
    </div>
  );
};

export default App;