import React, {Component} from 'react';
import './random-planet.css';

export default class RandomPlanet extends Component {

  render() {
    return (
      <article className="random-planet jumbotron rounded">
        <img
            src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
            className="random-planet__img"
            alt="planet"/>
        <div className="random-planet__content">
          <h2>Planet Name:</h2>
          <ul className="random-planet__list">
            <li className="random-planet__item">
              <span className="term">Population:</span>
              <span>123125</span>
            </li>
            <li className="random-planet__item">
              <span className="term">Rotation Period:</span>
              <span>42</span>
            </li>
            <li className="random-planet__item">
              <span className="term">Diameter:</span>
              <span>120</span>
            </li>
          </ul>
        </div>
      </article>
    );
  }
}