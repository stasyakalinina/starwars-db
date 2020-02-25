import React, {Component} from 'react';
import './app.css'

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {

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
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  };
}