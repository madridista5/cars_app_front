import axios from "axios";
import {apiUrl} from "../config/api";

export const axiosData = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-type': 'application/json',
    },
    withCredentials: true,
});