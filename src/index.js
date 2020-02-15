class SwapiService {
  _apiBase = 'https://swapi.co/api';

  async getResourse(url) {
    let res = await fetch(`${this._apiBase}${url}`);
  if (!res.ok) {
    throw new Error(`could not fetch ${url}, received ${res.status}`)
  }

  let body = await res.json();
  return body;
  }

  async getAllPeople() {
    let res = await this.getResourse(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }

  async getAllPlanets() {
    let res = await this.getResourse(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }

  async getAllStarhips() {
    let res = await this.getResourse(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }
}

const swapi = new SwapiService();
// swapi.getAllPeople().then((body) => {
//   body.forEach((item) => {
//     console.log(item.name);
//   });
// });

swapi.getPerson(3).then((body) => {
  console.log(body.name);
});