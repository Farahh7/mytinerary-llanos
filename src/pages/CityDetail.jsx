import axios from "axios"
import { useEffect, useState } from "react"
import apiUrl from '../apiUrl'
import { useParams } from "react-router-dom"
import { Link as Anchor } from 'react-router-dom'

export default function CityDetail() {
    const [city, setCity] = useState({})
    const { id } = useParams()


    useEffect(() => {
        axios(apiUrl + 'cities/' + id)
            .then(res => {
                if (res.data && res.data.response) {
                    setCity(res.data.response)
                }
            })
            .catch(err => console.log(err))
    }, [])
    console.log(city)

    return (
        <div className="w-full h-screen flex items-start justify-center bg-white">
            <div
                className="w-full h-full bg-cover bg-center relative flex flex-col items-center justify-center"
                style={{ backgroundImage: `url(${city.photo})` }}
            >

                {Object.keys(city).length > 0 && (
                    <div className="text-center text-white p-5 mt-10 ">
                        <h1 className="text-6xl font-semibold mb-3 text-white text-shadow-md bg-black bg-opacity-80">
                            {city.city}
                        </h1>
                        <p className={`text-black bg-white bg-opacity-50 text-lg mb-3  text-shadow-lg ${city.smalldescription.length > 100 ? 'mt-6' : 'mt-3'}`}>
                            {city.description}
                        </p>
                        <p>{`Details of ${city.city} is under construction 💔`}  </p>
                        

                    </div>
                )}
                <Anchor to={'/cities/'}>
                    <button className="bg-black px-3 py-1 rounded-xl text-white cursor-pointer hover:bg-[#282472] mt-4">
                        Back to city
                    </button>
                </Anchor>
            </div>
        </div>
    );

}