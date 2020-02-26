import React from 'react';
import './row-section.css';

const RowSection = (props) => {
  return (
    <section className="row-section">
      {props.leftBlock}
      {props.rightBlock}
    </section>
  );
};

export default RowSection;