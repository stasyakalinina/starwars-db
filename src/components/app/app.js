import React, {Component} from 'react';
import './app.css'
import SwapiService from '../../services/swapi-service';
import MockSwapiService from '../../services/mock-swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorBoundry from '../error-boundry/error-boundry';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import PersonDetails from '../sw-components/person-details';
import PlanetDetails from '../sw-components/planet-details';
import StarshipDetails from '../sw-components/starship-details';
import ItemDetails, {Record} from '../item-details/item-details';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';

export default class App extends Component {
  swapiService = new MockSwapiService();

  state = {
    hasError: false,

  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onServiceChange = () => {
    console.log('Change context value');
  }

  render() {

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    // const personDetails = (
    //   <ItemDetails
    //     itemId={11}
    //     getData={getPerson}
    //     getImgUrl={getPersonImage}>
    //       <Record field="gender" label="Gender" />
    //       <Record field="eyeColor" label="Eye Color" />
    //   </ItemDetails>
    // );

    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={5}
    //     getData={getStarship}
    //     getImgUrl={getStarshipImage}>
    //       <Record field="model" label="Model" />
    //       <Record field="length" label="Lenght" />
    //       <Record field="costInCredits" label="Cost" />
    //   </ItemDetails>
    // );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header onServiceChange={this.onServiceChange} />
            {/* <RandomPlanet /> */}
            {/* <PeoplePage /> */}
            {/* <RowSection leftBlock={personDetails} rightBlock={starshipDetails} /> */}
            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            <PersonList />

            <PlanetList />

            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
}