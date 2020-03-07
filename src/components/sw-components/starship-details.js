import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const StarshipDetails = ({itemId, swapiService }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={swapiService.getStarship}
      getImgUrl={swapiService.getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="length" label="Lenght" />
        <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export default withSwapiService(StarshipDetails);