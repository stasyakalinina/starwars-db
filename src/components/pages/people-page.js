import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonList, PersonDetails } from '../sw-components';
import RowSection from '../row-section/row-section';

const PeoplePage = ({ history, match }) => {

  const { id } = match.params;
  console.log(match);
  return (
    <RowSection
    leftBlock={<PersonList onItemSelected={(id) => history.push(id)} />}
    rightBlock={<PersonDetails itemId={id} />} />
  );
};

export default withRouter(PeoplePage);