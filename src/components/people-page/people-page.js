import React, {Component} from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';

export default class PeoplePage extends Component {

  state = {
    selectedPerson: null,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
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
      <section className="app-people">
        <ItemList onItemSelected={this.onPersonSelected}/>
        <PersonDetails personId={this.state.selectedPerson}/>
      </section>
    );
  }
}