import React, { useState } from "react";
import CardItineraries from "./CardItinerary" // Asumiendo que este es el componente CardItineraries que estás utilizando

export default function CardCityDetail({ city, itineraries_from_city }) {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center text-white p-5 mt-10">
      <h1 className="text-6xl font-semibold mb-3 text-white text-shadow-md bg-black bg-opacity-80">
        {city.city}
      </h1>
      <p
        className={`text-black bg-white bg-opacity-50 text-lg mb-3 text-shadow-lg ${
          city.smalldescription && city.smalldescription.length > 100
            ? "mt-6"
            : "mt-3"
        }`}
      >
        {city.description}
      </p>
      <p>{`Hi!! ${city.city} is under construction 💔`}</p>

      <button
        onClick={() => setShow(!show)}
        className="bg-indigo-500 px-4 py-2 my-8 rounded-lg text-slate-200 font-semibold hover:bg-indigo-700 hover:text-white"
      >
        {show ? "Hide itineraries" : "View itineraries"}
      </button>

      {show && itineraries_from_city && itineraries_from_city.map((each, index) => (
    <CardItineraries
      key={index}
      src={each.photo}
      alt={each.city_id}
      text={each.name}
      like={each.like} // Asegúrate de que cada itinerario tenga una propiedad "like"
      count={each.count} // Asegúrate de que cada itinerario tenga una propiedad "count"
    />
  ))}

    </div>    )}