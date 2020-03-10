import React, { Component } from 'react';
import Loader from '../loader/loader';
import ErrorButton from '../error-button/error-button';

import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
    loading: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId
      || this.props.getData !== prevProps.getData
      || this.props.getImageUrl !== prevProps.getImageUrl) {
      this.setState({
        loading: true,
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((currentItem) => {
        this.setState({
          item: currentItem,
          image: getImageUrl(currentItem),
          loading: false,
        });
      })
  };

  render() {
    const { item, image, loading } = this.state;
    const spinner = loading ? <Loader /> : null;
    const showMessage = !item && !loading ? <Message/> : null;
    const card = item && !loading ? <Card item={item} image={image} children={this.props.children} /> : null;

    return (
      <div className="person-details card">
        {showMessage}
        {spinner}
        {card}
      </div>
    );
  }
}

const Card = (props) => {
  const { item, image } = props;

  return (
    <React.Fragment>
      <img className="person-image"
        src={image} alt="avatar" />
      <div className="card__body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(props.children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
      </div>
      <div className="card__btn">
        <ErrorButton />
      </div>
    </React.Fragment>
  )
}

const Message = () => {
  return <p>Select a item from a list</p>;
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