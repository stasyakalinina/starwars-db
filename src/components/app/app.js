import React, {Component} from 'react';
import './app.css'

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class App extends Component {

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  };


  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <section className="app-people">
          <ItemList onItemSelected={this.onPersonSelected}/>
          <PersonDetails personId={this.state.selectedPerson}/>
        </section>
      </div>
    );
  };
}