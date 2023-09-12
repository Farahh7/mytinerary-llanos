/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import activity_actions from "../store/actions/activities"

const { read_activities_from_itinerary } = activity_actions

export default function activities({ id_itinerary }) {
    const dispatch = useDispatch()
    const [activities, setActivities] = useState([])
    
    useEffect(
        () => {
            dispatch(read_activities_from_itinerary({itinerary_id: id_itinerary}))
                .then(response => setActivities(response.payload.activities_from_itinerary))
                .catch(err => console.log(err))
        },
        []
    )
    return(
        <>
            <div className="w-full flex justify-between mb-5">
                {activities?.map(each =>
                    <div key={each._id} className="w-1/3 flex flex-col items-center p-2 m-3 bg-indigo-50 rounded-xl">
                    <img src={each.photo} alt={each._id} className="w-full h-32 object-cover rounded-xl" />
                    <h1 className="text-[14px] my-1 mb-4">{each.name}</h1>
                </div> 
                )}
            </div>
            <div className="flex flex-col items-center">
                
            </div>
        </>
    )
}


