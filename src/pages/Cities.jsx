import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    axios.get("URL_DE_LA_API_AQUI")
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  useEffect(() => {
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().startsWith(normalizedSearchTerm)
    );
    setFilteredCities(filtered);
  }, [searchTerm, cities]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Explore Cities</h1>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border p-2 mb-4"
      />
      {filteredCities.length === 0 ? (
        <p>No cities match your search.</p>
      ) : (
        <ul className="grid grid-cols-3 gap-4">
          {filteredCities.map((city) => (
            <li key={city.id} className="border p-4">
              <Link to={`/city/${city.id}`}>
                <img src={city.photo} alt={city.name} className="w-full h-32 object-cover mb-2" />
                <p className="font-semibold">{city.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cities;
