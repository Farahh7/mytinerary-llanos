import React, { useState, useEffect } from 'react';
import CityCard from './CityCard'; // Componente para mostrar la información de cada ciudad

const Cities = () => {
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Simular la llamada a la API para obtener las ciudades (15 ciudades de ejemplo)
        const fetchCities = async () => {
            try {
                const response = await fetch('URL_DE_LA_API'); // Reemplaza con la URL de la API real
                const data = await response.json();
                setCities(data);
                setFilteredCities(data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();
        setSearchTerm(searchTerm);

        if (searchTerm === '') {
            setFilteredCities(cities);
        } else {
            const filtered = cities.filter(city =>
                city.name.toLowerCase().startsWith(searchTerm)
            );
            setFilteredCities(filtered);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search cities..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {filteredCities.length === 0 ? (
                <p>No cities found</p>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {filteredCities.map(city => (
                        <CityCard key={city.id} city={city} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cities;
