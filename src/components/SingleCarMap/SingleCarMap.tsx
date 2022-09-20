import React from "react";

import './SingleCarMap.css';

interface Props {
    carId: string;
}

export const SingleCarMap = ({carId}: Props) => {
    return (
        <div className="car__wrapper-section_car-map">Car Id: {carId}</div>
    );
}