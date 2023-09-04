import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Itinerary from "../components/Itinerary"

import NotItineraries from "../components/NotItinerary"
import { useDispatch, useSelector } from "react-redux"
import city_actions from "../store/actions/cities"
import itinerary_actions from "../store/actions/itineraries"
const { read_city } = city_actions
const { read_itineraries_from_city } = itinerary_actions




export default function CityDetails() {
    
    const [show, setShow] = useState(false)
    const { city_id } = useParams()
    const dispatch = useDispatch()
    const city = useSelector(store => store.cities.city)
    const itineraries = useSelector(store => store.itineraries.itineraries_from_city)
    console.log(itineraries)



    useEffect(

        () => {
            dispatch(read_city({ id: city_id }));
            dispatch(read_itineraries_from_city({ city_id }))
        }, []
    )

    return (
        <div>
            
            <div className="w-full h-full bg-cover bg-center relative flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${city.photo})` }}>
            <div className="text-center text-white p-5 mt-10">
                <h1 className="text-6xl font-semibold mb-3 text-white text-shadow-md bg-black bg-opacity-80">
                    {city.city}
                </h1>
                <p
                    className={`text-black bg-white bg-opacity-50 text-lg mb-3 text-shadow-lg ${city.smalldescription && city.smalldescription.length > 100
                            ? "mt-6"
                            : "mt-3"
                        }`}
                >
                    {city.description}
                </p>
                
                <div className="flex h-[20px] items-end justify-center mt-32">
                    <div onClick={() => setShow(!show)} className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-[16px] text-center cursor-pointer w-[150px] h-13 p-1 mb-8">{show ? ('Close') : ('View Itineraries ↓')} </div>
                    
                </div>
            </div>
            <div className="py-8 px-4 sm:px-4">
                {show && (itineraries.length !== 0 ? (
                    itineraries.map(each => (
                        <Itinerary
                            admin_id={each.city_id.admin_id.name}
                            admin_photo={each.city_id.admin_id.photo}
                            key={each._id}
                            name={each.name}
                            price={each.price}
                            duration={each.duration}
                            tags={each.tags}
                            photo={each.photo}
                        />
                    ))
                ) : (
                    <NotItineraries />
                ))}
            </div>

        </div>
    )

 </div>)}
