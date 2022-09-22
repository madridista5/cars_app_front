import React, {useEffect, useState} from "react";
import { SingleCarResponse } from "types";
import {axiosData} from "../../utils/axiosData";

import './SingleCarDetails.css';

interface Props {
    carId: string;
}

export const SingleCarDetails = ({carId}: Props) => {
    const [car, setCar] = useState<SingleCarResponse>({
        id: '',
        brand: '',
        model: '',
        fuelType: '',
        city: '',
        distance: 0,
        year: 0,
        profilePhotoUrl: '',
        price: 0,
        bodyStyle: '',
        userId: '',
    });

    useEffect(() => {
        (async () => {
            if(carId) {
                const resCar = await axiosData(`/cars/getOneCar/${carId}`);
                const car: SingleCarResponse = resCar.data;
                setCar(car);
            }
        })();
    }, [carId]);

    return (
        <div className="car__wrapper-section_car-details">
            <div className="car__wrapper-details">Szczegóły</div>
            <div className="car__wrapper-section_car-column">
                <div className="section_car-column_properties">
                    <div>Marka pojazdu:</div>
                    <div>Model pojazdu:</div>
                    <div>Rok produkcji:</div>
                    <div>Przebieg:</div>
                    <div>Rodzaj paliwa:</div>
                    <div>Typ nadwozia:</div>
                </div>
                <div className="section_car-column_values">
                    <div>{car.brand}</div>
                    <div>{car.model}</div>
                    <div>{car.year}</div>
                    <div>{car.distance}</div>
                    <div>{car.fuelType}</div>
                    <div>{car.bodyStyle}</div>
                </div>
            </div>
        </div>
    );
}