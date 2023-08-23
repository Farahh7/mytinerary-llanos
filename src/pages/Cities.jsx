import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import apiUrl from '../apiUrl'
import CardCity from '../components/CardCity'
import ErrorCardCity from '../components/ErrorCardCity'
import { useParams } from "react-router-dom"


export default function Cities() {
    const [cities, setCities] = useState([])
    const [reEffect, setReEffect] = useState(true)
    const [error, setError] = useState(false)
    const text = useRef()


    useEffect(() => {
        axios(apiUrl + 'cities')
            .then((res) => {
                const searchText = text.current.value.trim().toLowerCase();
                const filteredCities = res.data.response.filter((city) => {
                    const cityName = city.city.toLowerCase();
                    return cityName.startsWith(searchText);
                });

                if (filteredCities.length === 0) {
                    setError(true);
                } else {
                    setError(false);
                    setCities(filteredCities);
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            });
    }, [reEffect]);

    function handleFilter() {
        setReEffect(!reEffect);
    }

    return (
        <div className='w-full flex flex-col items-center mb-[200px]'>
        <div className="bg-cover bg-center h-[50vh]  w-full flex items-center justify-center text-white text-center" 
        style={{ backgroundImage: `url('/src/assets/viajes.jpg')` }}>
            <div>
                <h1 className="text-4xl font-bold mb-2">Cities</h1>
                <p className="text-lg">Collection of the most beautiful places and experiences</p>
            </div>
        </div>
            <div className="flex items-center border-b-2 border-blue-500 py-1 mt-5">
                <input className='appearence-none bg-white border-none w-full text-black-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    ref={text}
                    type="text"
                    name="text"
                    id="text"
                    onChange={handleFilter}
                    placeholder=' 🔍︎ Search your city ...'

                />

            </div>
            {
                error ? <ErrorCardCity /> :
                    <div className='grid grid-cols-1 gap-3 mt-2 mx-[80px]
                md:grid-cols-2 md:gap-7
                lg:grid-cols-3 lg:gap-10
                2xl:grid-cols-4'>
                        {cities.map(each =>
                            <CardCity
                                key={each._id}
                                src={each.photo}
                                alt={each._id}
                                text={each.city}
                                textCountry={each.country}
                                id={each._id}
                            />
                        )
                        }
                    </div>
            }
        </div >
    )
}