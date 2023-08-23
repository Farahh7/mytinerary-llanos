import React, { useState, useEffect } from 'react';
//import { getCities } from './api';
//import CityCard from './CityCard';
//import SearchBar from './SearchBar';

function Cities() {
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        getCities()
            .then(cities => {
                setCities(cities);
                setFilteredCities(cities);
            })
    }, []);

    const handleSearch = (query) => {
        const normalizedQuery = query.toLowerCase().trim();
        const results = cities.filter(city =>
            city.name.toLowerCase().startsWith(normalizedQuery)
        );
        setFilteredCities(results);
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />

            <div className="city-list">
                {filteredCities.length > 0 ? (
                    filteredCities.map(city => (
                        <CityCard
                            key={city.id}
                            name={city.name}
                            image={city.image}
                        />
                    ))
                ) : (
                    <p>No cities found :(</p>
                )}
            </div>
        </div>
    );
}

export default Cities;