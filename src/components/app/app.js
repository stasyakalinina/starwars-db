import React, {Component} from 'react';
import './app.css'
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        {/* <section className="app-section">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem={(item) => `${item.name} (${item.diameter})`}/>
          <PersonDetails personId={this.state.selectedPerson}/>
        </section>
        <section className="app-section">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarhips}
            renderItem={(item) => `${item.name} (${item.model})`}/>
          <PersonDetails personId={this.state.selectedPerson}/>
        </section> */}
      </div>
    );
  };
}