
import React from 'react';

function CityPage({name, image}) {
  return (
    <div className="city-page">
      <h1>{name}</h1>
      <img src={image} alt={name} />

      <p>Under construction</p>
    </div>
  );
}

export default CityPage;