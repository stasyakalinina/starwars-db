import React, {Component} from 'react';
import SwapiService from "../../services/swapi-service";
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import RowSection from '../row-section/row-section';

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
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

    const itemList = (
      <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}
          renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
        />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    )

    return (
      <RowSection leftBlock={itemList} rightBlock={personDetails}/>
    )
  }
};