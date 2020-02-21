import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  constructor() {
    super();
    this.updatePlanet();
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

  updatePlanet() {
    let id = Math.floor(Math.random() * 25);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const ErrorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <article className="random-planet jumbotron rounded">
        {ErrorMessage}
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
    </React.Fragment>
  );
};