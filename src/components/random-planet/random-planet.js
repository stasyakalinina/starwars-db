import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {}
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState( {planet} );
  }

  updatePlanet() {
    let id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
  }

  render() {
    let { planet: { id, name, population, rotationPeriod, diameter} } = this.state;

    return (
      <article className="random-planet jumbotron rounded">
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
      </article>
    );
  }
}