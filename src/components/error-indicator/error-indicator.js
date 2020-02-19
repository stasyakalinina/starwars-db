import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <section className="error">
      <img src={icon} alt="error icon"/>
      <h3>Boom!</h3>
      <p>Something has gone terribly wrong</p>
      <p>(but we already sent droids to fix it)</p>
    </section>
  );
};

export default ErrorIndicator;