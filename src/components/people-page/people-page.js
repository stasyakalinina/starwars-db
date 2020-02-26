import React, {Component} from 'react';
import SwapiService from "../../services/swapi-service";
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import RowSection from '../row-section/row-section';
import ErrorBoundry from '../error-boundry/error-boundry';

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

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {
          (item) => `${item.name} (${item.birthYear})`
        }
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails personId={this.state.selectedPerson}/>
      </ErrorBoundry>
    )

    return (
      <RowSection leftBlock={itemList} rightBlock={personDetails}/>
    )
  }
};
