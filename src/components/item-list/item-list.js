import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';
import './item-list.css';

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((people) => {
        this.setState({
          peopleList: people,
        });
      });
  }

  renderItems(arr) {
    return arr.map((person) => {
      return (
        <li
          className="list-group-item"
          key={person.id}
          onClick={() => this.props.onItemSelected(person.id)}>
          {person.name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state

    if (!peopleList) {
      return <Loader />
    }

    let items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}