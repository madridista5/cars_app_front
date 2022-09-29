import React, {useContext} from "react";
import { CarEntity } from "types";
import {Link, useNavigate} from "react-router-dom";
import {IoLocationOutline} from "react-icons/io5";
import {axiosData} from "../../utils/axiosData";
import {UserContext} from "../../context/user.context";

interface Props {
    car: CarEntity,
}

export const SingleCarViewOnTheWatchList = ({car}: Props) => {
    const {userData} = useContext(UserContext);
    const navigate = useNavigate();

    const handleStopWatchClick = async () => {
        const resDeleteWatch = await axiosData.delete(`/watch/delete/${userData.id}/${car.id}`);
        const data: string = resDeleteWatch.data;
        navigate('/info', {
            state: {data},
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
                </div>
                <div>
                    <button className="custom__button" onClick={handleStopWatchClick}>Usuń z obserwowanych</button>
                </div>
            </div>
        </div>
    );
};