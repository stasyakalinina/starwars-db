import React, {Component} from 'react';
import { PlanetList, PlanetDetails } from '../sw-components';
import RowSection from '../row-section/row-section';

export default class PlanetPage extends Component {

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
      <RowSection leftBlock={<PlanetList onItemSelected={this.onItemSelected} />} rightBlock={<PlanetDetails itemId={selectedItem} />} />
    );
  }
}