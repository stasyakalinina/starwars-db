import React, {Component} from 'react';
import { PersonList, PersonDetails } from '../sw-components';
import RowSection from '../row-section/row-section';

export default class PeoplePage extends Component {

  state = {
    selectedItem: null,
  }

  onItemSelected = (currentItem) => {
    this.setState({
      selectedItem: currentItem,
    })
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <RowSection leftBlock={<PersonList onItemSelected={this.onItemSelected} />} rightBlock={<PersonDetails itemId={selectedItem} />} />
    );
  }
}