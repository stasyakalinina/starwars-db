import React from 'react';
import {withData, withSwapiService} from '../hoc-helpers';
import ItemList from '../item-list/item-list';

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

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  }
}

const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  }
}

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  }
}


const PersonList = withSwapiService(
  withData( withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetList = withSwapiService(
  withData( withChildFunction(ItemList, renderName)), mapPlanetsMethodsToProps);

const StarshipList = withSwapiService(
  withData( withChildFunction(ItemList, renderNameModel)), mapStarshipsMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};