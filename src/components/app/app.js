import React, {Component} from 'react';
import './app.css'
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import RowSection from '../row-section/row-section';

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

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImgUrl={getPersonImage} />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImgUrl={getStarshipImage} />
    );

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        {/* <PeoplePage /> */}
        <RowSection leftBlock={personDetails} rightBlock={starshipDetails} />
      </div>
    );
  };
}