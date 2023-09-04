import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_user = createAsyncThunk(
    'read_user',
    async({userId})=>{
        try {
            let data = await axios(apiUrl+'users/'+userId)
            console.log(data)
            return{
                user: data.data.response
            }
        } catch (error) {
            console.log(error)
            return{
                users: []
            }
        }
    }
)

const user_actions = {read_user}
export default user_actions