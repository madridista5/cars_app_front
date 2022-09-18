import { CarListResponse } from "types";
import {createContext} from "react";

interface CarsListContextType {
    carsList: CarListResponse;
    setCarsList: (e: CarListResponse) => void;
}

export const CarsListContext = createContext<CarsListContextType>({
    carsList: [{
        bodyStyle: '%',
        brand: '%',
        model: '%',
        price: 0,
        year: 0,
        fuelType: '%',
        distance: 0,
        userId: '',
    }],
    setCarsList(e): void {
    },
});