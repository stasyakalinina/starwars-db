import React from 'react';
import {withData, withSwapiService, withChildFunction, compose} from '../hoc-helpers';
import ItemList from '../item-list/item-list';

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

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetsMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderNameModel)
  )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};