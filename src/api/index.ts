import axios from 'axios';
import {IUser} from "@/interfaces";

const api = axios.create({
    baseURL: 'https://dev-api.gettonote.com/api/v1'
})


// TODO : Implement a timeout/expire function for token
export const setAuthToken = (token: string) => {
    if (token) {
        localStorage.setItem('token', token)
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};

const registerEndpoint = '/user/register'
const loginEndpoint = '/user/login'
const profileEndpoint = '/user/profile'
const logoutEndpoint = '/user/logout'


export const registerUser = async ({first_name, last_name, email, password, role = 'User'}: IUser) => {
    const response = await api.post(registerEndpoint,
        {
            first_name,
            last_name,
            email,
            password,
            role
        })
    console.log(role)
    return response.data
}

export const loginUser = async ({password, email}: IUser) => {
    const response = await api.post(loginEndpoint,
        {
            email,
            password,
            entry_point: 'User'
        })
    return response.data
}


export const getUserProfile = async () => {
    const response = await api.get(profileEndpoint)
    return response.data
}

export const logoutUser = async () => {
    const response = await api.post(logoutEndpoint)
    return response.data
}


