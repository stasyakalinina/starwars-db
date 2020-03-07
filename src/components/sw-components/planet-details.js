import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PlanetDetails = ({itemId, swapiService}) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImgUrl={getPlanetImage}>
        <Record field="population" label="Population" />
        <Record field="rotation" label="Rotation" />
        <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);