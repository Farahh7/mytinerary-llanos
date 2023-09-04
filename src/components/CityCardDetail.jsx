import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import itinerary_actions from '../store/actions/itineraries'
import CardItineraries from "./CardItinerary"

const { read_itineraries_from_city } = itinerary_actions


export default function CityCardDetail({ city }) {
    const [showItineraries, setShowItineraries] = useState(false);
    const itineraries_from_city = useSelector(
        (store) => store.itineraries.itineraries_from_city
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (showItineraries) {
            dispatch(read_itineraries_from_city({ city_id: city.id }));
        }
    }, [dispatch, showItineraries, city.id]);


    return (
        <div className="flex flex-col items-center mb-10">
            <div className="text-center text-white p-5 mt-10">
            <h1 className="text-6xl font-semibold mb-3 text-white text-shadow-md bg-black bg-opacity-80">
                {city.city}
            </h1>
            <p className={`text-black bg-white bg-opacity-50 text-lg mb-3  text-shadow-lg ${city.smalldescription && city.smalldescription.length > 100 ? 'mt-6' : 'mt-3'}`}>
                {city.description}
            </p>
            <p>{`Los detalles de ${city.city} están en construcción 💔`}</p>
        </div>
    

            <button onClick={() => setShow(!show)} className="bg-indigo-500 px-4 py-2 my-8 rounded-lg text-slate-200 font-semibold hover:bg-indigo-700 hover:text-white">
                { show ? ('Hide itineraries') : ('View itineraries') }
            </button>
            { show && itineraries_from_city.map((each, index) => 
                <CardItineraries
                    key={index}
                    src={each.photo}
                    alt={each.city_id}
                    text={each.name}
                />
            )}
        </div>
    )
            }