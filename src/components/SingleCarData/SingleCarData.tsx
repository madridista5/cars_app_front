import React from "react";

import './SingleCarData.css';

interface Props {
    carId: string;
}

export const SingleCarData = ({carId}: Props) => {
    return (
        <div className="car__wrapper-section_car-data">Car Id: {carId}</div>
    );
}