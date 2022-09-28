import {createContext} from "react";
import { UserLoginResponse } from "types";

interface CarsListContextType {
    userData: UserLoginResponse;
    setUserData: (e: UserLoginResponse) => void;
}

export const UserContext = createContext<CarsListContextType>({
    userData: {
        id: '',
        email: '',
        role: '',
        phoneNum: 0,
        address: '',
        lat: 0,
        lon: 0,
    },
    setUserData(e: UserLoginResponse): void {},
});