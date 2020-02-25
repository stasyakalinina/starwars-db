import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorButton from '../error-button/error-button';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <article className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </article>
    );
  }
}

const PlanetView = (props) => {
  const { id, name, population, rotationPeriod, diameter } = props.planet;

  return (
    <React.Fragment>
      <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          className="random-planet__img"
          alt="planet"/>
      <div className="random-planet__content">
        <h2>{name}</h2>
        <ul className="random-planet__list">
          <li className="random-planet__item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="random-planet__item">
            <span className="term">Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="random-planet__item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
      <div className="random-planet__btns">
          <ErrorButton />
      </div>
    </React.Fragment>
  );
};