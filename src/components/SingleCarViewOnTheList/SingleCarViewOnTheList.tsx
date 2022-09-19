import React from "react";
import { CarEntity } from "types";

import './SingleCarViewOnTheList.css';

interface Props {
    car: CarEntity,
}

export const SingleCarViewOnTheList = ({car}: Props) => {

    const handleImgClick = () => {

    }

    const handleWatchClick = () => {

    }
    return (
        <div className="single__car">
            <div className="single__car-picture" onClick={handleImgClick}>
                <img src={`${car.profilePhotoUrl}`} alt="car"/>
            </div>
            <div className="single__car-details">
                <div className="single__car-details_brand_model">
                    <div>{car.brand} {car.model}</div>
                    <div className="single__car-details_price">{car.price} PLN</div>
                </div>
                <div>{car.year} · {car.distance} km · {car.fuelType}</div>
                <div className="single__car-details_city">{car.city}<button className="custom__button" onClick={handleWatchClick}>Obserwuj</button></div>
            </div>
        </div>
    );
};