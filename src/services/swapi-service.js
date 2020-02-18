export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  async getResourse(url) {
    let res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    let res = await this.getResourse(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResourse(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    let res = await this.getResourse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResourse(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarhips() {
    let res = await this.getResourse(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResourse(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  _extractID(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractID(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformPerson(person) {
    return {
      id: this._extractID(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }

  _transformStarship(starship) {
    return {
      id: this._extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    }
  }
}

// const swapi = new SwapiService();
// swapi.getAllPeople().then((body) => {
//   body.forEach((item) => {
//     console.log(item.name);
//   });
// });

// swapi.getPerson(3).then((body) => {
//   console.log(body.name);
// });