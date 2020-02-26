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

    const { item, loading, image } = this.state;
    const message = !this.state.item ? <Message /> : null;
    const spinner = loading ? <Loader /> : null;
    const content = (!loading && this.state.item)? <ItemView item={item} image={image}/> : null;

    return (
      <div className="person-details card">
        {message}
        {spinner}
        {content}
      </div>
    )
  }
};

const ItemView = (props) => {
  let { image, item } = props;
  console.log(image);

  return (
    <React.Fragment>
      <img className="person-image"
        src={image} alt="avatar" />

      <div className="card__body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender:</span>
            <span>{item.gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year:</span>
            <span>{item.birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color:</span>
            <span>{item.eyeColor}</span>
          </li>
        </ul>
      </div>
      <div className="card__btn">
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};

const Message = () => {
  return <p className="person-details__message">Select a person from a list</p>
};