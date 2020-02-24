import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.setState({
        loading: true,
      });
      this.updatePerson();
    }
  }

  updatePerson() {
    let { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((currentPerson) => {
        this.setState({
          person: currentPerson,
          loading: false,
        });
      })
  };

  render() {

    const { person, loading } = this.state;
    const message = !this.state.person ? <Message /> : null;
    const spinner = loading ? <Loader /> : null;
    const content = (!loading && this.state.person)? <PersonView person={person}/> : null;

    return (
      <div className="person-details card">
        {message}
        {spinner}
        {content}
      </div>
    )
  }
};

const PersonView = (props) => {
  let {id, name, gender, birthYear, eyeColor} = props.person;

  return (
    <React.Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card__body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender:</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year:</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color:</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

const Message = () => {
  return <p className="person-details__message">Select a person from a list</p>
};