import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl"


const read_itineraries_from_city = createAsyncThunk(
    'read_itineraries_from_city',
    async(obj) => {
        try {
            let data = await axios (apiUrl + 'itineraries?city_id='+ obj.city_id) 
            console.log(data)
            return{ itineraries_from_city: data.data.response }
        } catch (error) {
            console.log(error)
            return { itineraries_from_city: [] }
        }
    }
)



const itinerary_actions = { read_itineraries_from_city }
export default itinerary_actions


/* import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";
//import { data } from "autoprefixer";

const fetchItinerariesByCityName = createAsyncThunk(
  "fetchItinerariesByCityName",
  async (obj) => {
    try {
      const response = await axios.get(apiUrl + "itineraries?city_id=" + obj.city_id);
      return {
        itineraries_from_city: response.data.response,
      };
    } catch (error) {
      console.log(error);
      return { 
        
        itineraries_from_city: [],
      };
    }
  }
);
/* 
export const fetchItineraries = createAsyncThunk(
  "itineraries/fetchItineraries",
  async (obj) => {
    try {
      const response = await axios.get(apiUrl + "itineraries?city_id=" + obj.city_id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
); 
 *//* 
const itinerary_actions = {
  fetchItinerariesByCityName
  //fetchItineraries,
};

export default itinerary_actions;
 */ 