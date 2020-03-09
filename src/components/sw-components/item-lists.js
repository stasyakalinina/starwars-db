import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers/with-data';
import ItemList from '../item-list/item-list';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    )
  }
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameModel = ({ name, model }) => <span>{name} ({model})</span>;

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets);

const StarshipList = withData(
  withChildFunction(ItemList, renderNameModel),
  getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};