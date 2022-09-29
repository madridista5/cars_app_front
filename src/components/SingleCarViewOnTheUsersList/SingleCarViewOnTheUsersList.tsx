import React, {useState} from "react";
import { CarEntity } from "types";
import {Link, useNavigate} from "react-router-dom";
import {IoLocationOutline} from "react-icons/io5";

interface Props {
    car: CarEntity,
}

export const SingleCarViewOnTheUsersList = ({car}: Props) => {
    const [addImageInfo] = useState({
        carId: car.id,
        userId: car.userId,
    });
    const navigate = useNavigate();

    const handleWatchClick = () => {
        navigate('/add/image', {
            state: {
                carId: addImageInfo.carId,
                userId: addImageInfo.userId,
            },
        });
    }
    return (
        <div className="single__car">
            <div className="single__car-picture">
                <Link to={`/cars/${car.id}`}><img src={`${car.profilePhotoUrl}`} alt="car"/></Link>
            </div>
            <div className="single__car-details">
                <div className="single__car-details_brand_model">
                    <div className="single__car-details_title">
                        <Link to={`/cars/${car.id}`}>{car.brand} {car.model}</Link>
                    </div>
                    <div className="single__car-details_price">{car.price} PLN</div>
                </div>
                <div>{car.year} · {car.distance} km · {car.fuelType}</div>
                <div className="single__car-details_city">
                    <div><IoLocationOutline/> {car.city}</div>
                    <button className="custom__button" onClick={handleWatchClick}>Dodaj zdjęcie</button>
                </div>
            </div>
        </div>
    );
};