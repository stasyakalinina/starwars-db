import React from 'react';
import {withData} from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';
import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected } = props;
  const renderLabel = props.children;

  let items = data.map((item) => {
    let label = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={item.id}
        onClick={() => onItemSelected(item.id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);