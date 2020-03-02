import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader/loader';
import ErrorButton from '../error-button/error-button';

import './item-details.css';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true,
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((currentItem) => {
        this.setState({
          item: currentItem,
          image: getImgUrl(currentItem),
          loading: false,
        });
      })
  };

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <p>Select a item from a list</p>;
    }

    return (
      <div className="person-details card">
        <img className="person-image"
        src={image} alt="avatar" />
        <div className="card__body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child, index) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      <div className="card__btn">
        <ErrorButton />
      </div>
      </div>
    );
  }
}


const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
};
export { Record };