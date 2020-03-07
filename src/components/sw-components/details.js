import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={swapiService.getPerson}
              getImgUrl={swapiService.getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>

  );
};

const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={swapiService.getPlanet}
              getImgUrl={swapiService.getPlanetImage}>
                <Record field="population" label="Population" />
                <Record field="rotation" label="Rotation" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        (swapiService) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={swapiService.getStarship}
              getImgUrl={swapiService.getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Lenght" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}