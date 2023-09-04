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


