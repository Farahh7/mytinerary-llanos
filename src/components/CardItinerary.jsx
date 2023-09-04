import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import itinerary_actions from "../store/actions/itineraries";
import CardCityDetail from "../components/CardCityDetail";

const { fetchItinerariesByCityName } = itinerary_actions;

export default function CardItinerary({ src, alt, text }) {
  const [like, setLike] = useState(false);
  const count = 0;
  const [show, setShow] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const itineraries_from_city = useSelector(store => store.itineraries.itineraries_from_city);

  useEffect(() => {
    dispatch(fetchItinerariesByCityName({ city_id: id }));
  }, [dispatch, id]);

  return (
    <div className="w-2/3 flex flex-col p-6 m-6 bg-white">
      <h1 className="m-2 text-[20px] font-semibold text-center">{text}</h1>
      <img src={photo} alt={alt} className="h-fit" />
      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row flex-start">
          {like ? (
            <svg
              onClick={() => setLike(!like)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6 cursor-pointer"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            <svg
              onClick={() => setLike(!like)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
          <span className="ml-2">{like && count + 1}</span>
        </div>
        {show ? (
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      {show && (
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
            {/* {itineraries_from_city.map((itinerary) => (
              <div key={itinerary.id}>
                <p>User: {itinerary.user}</p>
                <p>Hashtags: {itinerary.hashtags ? itinerary.hashtags.join(", ") : "No hashtags"}</p>
                <p>Duration: {itinerary.duration}</p>
                <p>Price: {itinerary.price}</p>
              </div>
            ))} */}
          </div>
        </div>
      )}
    </div>
  );
}

/* import { useState } from "react"
import ItineraryView from "./ItineraryView"


export default function CardItinerary({ src, alt, text }) {
    const [like, setLike] = useState(false)
    const count = 0
    const [show, setShow] = useState(false)
    return (
        <div className="w-2/3 flex flex-col p-6 m-6 bg-white">
            <h1 className="m-2 text-[20px] font-semibold text-center">{text}</h1>
            <img src={src} alt={alt} className="h-fit"/>
            <div className="flex flex-row justify-between my-4">
                <div className="flex flex-row flex-start">
                    {like ?
                        (<svg onClick={() => setLike(!like)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" strokeWidth={1.5}
                        stroke="red"className="w-6 h-6 cursor-pointer">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                        ) : (
                        <svg onClick={() => setLike(!like)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        )
                    }
                    <span className="ml-2">
                        {like && count+1 }
                    </span>
                </div>
                {show ?
                    (<svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer">
                    <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                    </svg>
                    ) : 
                    (<svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)
                }
            </div>
            {show && <ItineraryView/>}
        </div>
    )
    } */