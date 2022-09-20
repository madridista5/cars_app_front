import React from "react";

import './SingleCarDetails.css';

interface Props {
    carId: string;
}

export const SingleCarDetails = ({carId}: Props) => {
    return (
        <div className="car__wrapper-section_car-details">Car Id: {carId}</div>
    );
}