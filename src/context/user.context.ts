import {createContext} from "react";

export const UserContext = createContext({
    id: '',
    email: '',
    role: '',
    phoneNum: 0,
    address: '',
    lat: 0,
    lon: 0,
});