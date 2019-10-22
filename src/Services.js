import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faAt } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section id="services" className="section section__services">
      <h3 className="section--title">Services</h3>

      <div>
        <FontAwesomeIcon
          icon={faMobileAlt}
          className="section__services--icon"
        />

        <FontAwesomeIcon
          icon={faAccessibleIcon}
          className="section__services--icon"
        />
        {/* <FontAwesomeIcon icon={faNode} className="section__services--icon" /> */}
      </div>
    </section>
  );
}

export default Services;
