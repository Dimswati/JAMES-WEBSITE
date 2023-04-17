import axios from "axios"
import { api_token, api_url } from "../constants"

export const api = axios.create({
    baseURL: api_url,
    headers: {
        Authorization: `bearer ${api_token}`
    }
})

export const getProjectsPage = async() => {

}

