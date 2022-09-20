import React from "react";

import './SingleCarGallery.css';

interface Props {
    carId: string;
}

export const SingleCarGallery = ({carId}: Props) => {
    return (
        <div className="car__wrapper-section_gallery">Car Id: {carId}</div>
    );
};