import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SwapiService from '../../services/swapi-service';
import MockSwapiService from '../../services/mock-swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorBoundry from '../error-boundry/error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';

import './app.css'
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService:  new SwapiService(),
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  onServiceChange = () => {
    this.setState((state) => {
      const Service = state.swapiService instanceof SwapiService ? MockSwapiService : SwapiService;

      return {
        swapiService: new Service(),
      }
    })
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="container">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Route path='/' exact={true} render={() => <h2 className="app-title">Welcome to StarDB</h2>} />
              <Route path='/people' component={PeoplePage} />
              <Route path='/planets' component={PlanetsPage} />
              <Route path='/starships' exact component={StarshipsPage } />
              <Route path='/starships/:id' render={(props) => {
                console.log(props);
                let { id } = props.match.params;
                return <StarshipDetails itemId={id}/>
              }} />

            </div>
            </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
}