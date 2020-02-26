import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';
import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((items) => {
        this.setState({
          itemList: items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderItems(arr) {
    return arr.map((item) => {

      const label = this.props.renderItem(item);
      return (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}>
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state

    if (!itemList) {
      return <Loader />
    }

    let items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}