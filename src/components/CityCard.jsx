import React from 'react';
import { Link } from 'react-router-dom';

function CityCard({ name, image }) {
    return (
        <Link to={`/city/${name}`} className="city-card">
            <h2>{name}</h2>
            <img src={image} alt={name} />
        </Link>
    );
}

export default CityCard;

import React from 'react';

const CityDetails = ({ cityName }) => {
  return (
    <div>
      <h1>{cityName}</h1>
      <img src={`path-to-your-images/${cityName.toLowerCase()}.jpg`} alt={cityName} />
      <p>Under construction</p>
    </div>
  );
};

export default CityDetails;
