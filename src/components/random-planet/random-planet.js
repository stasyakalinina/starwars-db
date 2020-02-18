import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    let id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter,
        })
      })
  }

  render() {
    let { id, name, population, rotationPeriod, diameter } = this.state;

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