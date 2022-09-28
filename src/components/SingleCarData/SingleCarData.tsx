import React, {useEffect, useState} from "react";
import {axiosData} from "../../utils/axiosData";
import { SingleCarResponse, UserLoginResponse } from "types";
import {IoLocationOutline} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

import './SingleCarData.css';

interface Props {
    carId: string;
}

export const SingleCarData = ({carId}: Props) => {
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
    const [user, setUser] = useState<UserLoginResponse>({
        id: '',
        address: '',
        phoneNum: 0,
        role: '',
        email: '',
        lat: 0,
        lon: 0,
    });
    const [showEmail, setShowEmail] = useState<boolean>(false);
    const [showNumber, setShowNumber] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClick = (value: 'email' | 'number') => {
        value === 'email' ? setShowEmail(!showEmail) : setShowNumber(!showNumber);
    }

    useEffect(() => {
        (async () => {
            if(carId) {
                const resCar = await axiosData(`/cars/getOneCar/${carId}`);
                const car: SingleCarResponse = resCar.data;
                setCar(car);
                const resUser = await axiosData(`/users/getOneUser/${car.userId}`);
                const user: UserLoginResponse = resUser.data;
                setUser(user);
            }
        })();
    }, [carId]);

    const handleWatchClick = async () => {
        const res = await axiosData.post(`/watch/add/${car.userId}`, {
            userId: car.userId,
            carId: car.id,
        });
        const data: string = res.data;
        navigate('/info', {
            state: {data},
        });
    }

    return (
        <div className="car__wrapper-section_car-data">
            <div className="single__car-data_brand">{car.brand} {car.model}</div>
            <div>{car.year} · {car.distance} · {car.fuelType}</div>
            <div className="single__car-data_price">{car.price} PLN</div>
            <button className="single__car-data_btn-email" onClick={() => handleClick('email')}>
                <MdEmail/> {showEmail ? `${user.email}` : 'kontakt ze sprzedającym'}
            </button>
            <button className="single__car-data_btn-phone" onClick={() => handleClick('number')}>
                <AiFillPhone/> {showNumber ? `${user.phoneNum}` : 'Wyświetl numer'}
            </button>
            <button className="custom__button" onClick={handleWatchClick}>Obserwuj</button>
            <div className="single__car-data_city"><IoLocationOutline/> {car.city}</div>
        </div>
    );
}