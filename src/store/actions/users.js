import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";


const read_users = createAsyncThunk(
    'read_users',
    async() => {
        try {
            let data = await axios(apiUrl+'users')
            //console.log(data)
            return {
                users: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
    users: []
            }
        }
    }
)

const signin = createAsyncThunk(
    'signin',
    async(obj) => {
        try {
            let data = await axios.post(apiUrl+'auth/signin', obj.data)
            //console.log(data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
                //se configuran los dos errores (uno de JOI y otro del middleware de autenticacion)
                //el del middleware lo convierto en array
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async() => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/token', null, authorization)
            //console.log(data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: ''
            }
        }
    }
)

const logout = createAsyncThunk(
    'logout',
    async() => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/signout', null, authorization)
            //console.log(data)
            localStorage.removeItem('token')
            return {
                user: {},
                token: ''
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: ''
            }
        }
    }
)

const user_actions = { read_users, signin, signin_token, logout }

export default user_actions