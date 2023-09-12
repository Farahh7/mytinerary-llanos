import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_activities_from_itinerary = createAsyncThunk(
    'read_activities_from_itinerary',
    async(obj) => {
        try {
            let data = await axios(apiUrl+'activities?itinerary_id='+obj.itinerary_id)
            console.log(data)
            return {
                activities_from_itinerary: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                activities_from_itinerary: []
            }
        }
    }
)

const activity_actions = { read_activities_from_itinerary }
export default activity_actions