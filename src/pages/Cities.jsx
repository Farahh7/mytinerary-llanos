
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { read_cities, read_carousel } from '../store/actions/cities.js';
import CardCity from '../components/CardCity';
import ErrorCardCity from '../components/ErrorCardCity';

export default function Cities() {
    const cities = useSelector((store) => store.cities.cities);
    const [reEffect, setReEffect] = useState(true);
    const text = useRef();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        dispatch(read_cities({ text: text.current?.value }));
        dispatch(read_carousel());
    }, [reEffect]);

    useEffect(() => {
        setFilteredCities(cities); // Actualiza las ciudades filtradas con todas las ciudades al principio
    }, [cities]);

    function handleFilter() {
        const searchText = text.current.value.toLowerCase();

        // Filtrar las ciudades basado en el texto de búsqueda
        const newFilteredCities = cities.filter((city) =>
            city.city.toLowerCase().includes(searchText)
        );

        // Actualizar el estado de ciudades filtradas y error
        if (newFilteredCities.length === 0) {
            setError(true);
        } else {
            setError(false);
        }

        setFilteredCities(newFilteredCities);

    }

    return (
        <div className='w-full flex flex-col items-center mb-[200px]'>

            <div className="bg-cover bg-center h-[30vh]  w-full flex items-center justify-center text-white text-center"
                style={{ backgroundImage: `url('/src/assets/viajes.jpg')` }}>
                <div>
                    <h1 className="bg-black bg-opacity-30
                    text-4xl font-bold mb-2">CITIES</h1>
                    <p className="text-lg bg-black bg-opacity-30">Collection of the most beautiful places and experiences</p>
                </div>
            </div>
            <div className="flex items-center border-b-2 border-blue-500 py-1 mt-5">
            
            <input
                className='appearence-none bg-white border-none w-full text-black-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                ref={text}
                type='text'
                name='text'
                id='text'
                onChange={handleFilter}
                placeholder='🔍︎ Search your city ....'
            />
            </div>
            <div className="mt-8">
            {error ? (
                <ErrorCardCity />
            ) : (
                
                <div
                    className='grid grid-cols-1 gap-3 mt-2 mx-[80px] md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-10 2xl:grid-cols-4'
                >
                    {filteredCities.map((each) => (
                        <CardCity
                            key={each._id}
                            src={each.photo}
                            alt={each._id}
                            text={each.city}
                            textCountry={each.country}
                            id={each._id}
                        />
                    ))}
                    
                </div>
            )}
        </div>
        </div>
    );
}
