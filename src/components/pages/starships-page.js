import React, {Component} from 'react';
import { StarshipList, StarshipDetails } from '../sw-components';
import RowSection from '../row-section/row-section';

export default class StarshipsPage extends Component {

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
      <RowSection leftBlock={<StarshipList onItemSelected={this.onItemSelected} />} rightBlock={<StarshipDetails itemId={selectedItem} />} />
    );
  }
}