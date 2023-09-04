import React, { useEffect, useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { fetchItinerariesByCityName } from '../store/actions/itineraries'
//import itinerary_actions from '../store/actions/itineraries';
//const {fetchItinerariesByCityName} =itinerary_actions

export default function ItineraryView() {
  //const dispatch = useDispatch();
  const itinerariesFromCity = useSelector(store => store.itineraries.itineraries_from_city);

  const cityId = ''; // Define el ID de la ciudad aquí

  useEffect(() => {
    dispatch(fetchItinerariesByCityName({ city_id: cityId }))
      .then(action => {
        console.log('Action:', action); // Verifica la acción devuelta por la acción asincrónica
        console.log('Itineraries:', itinerariesFromCity); // Verifica el estado de itinerarios en el store
      })
      .catch(error => {
        console.error('Error fetching itineraries:', error);
      });
  }, [dispatch, cityId, itinerariesFromCity]);

  return (
    <div className="flex flex-col m-3 p-3">
      <div className="flex justify-around">
        <div>
          <h1>User</h1>
        </div>
        <div>
          <h1>Hashtags</h1>
        </div>
        <div>
          <h1>Duration</h1>
        </div>
        <div>
          <h1>Price</h1>
        </div>
      </div>
      <div>
        <h1>Activities</h1>
        {itinerariesFromCity.map((itinerary) => (
          <div key={itinerary.id}>
            <p>User: {itinerary.user}</p>
            <p>Hashtags: {itinerary.hashtags ? itinerary.hashtags.join(', ') : 'No hashtags'}</p>
            <p>Duration: {itinerary.duration}</p>
            <p>Price: {itinerary.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
