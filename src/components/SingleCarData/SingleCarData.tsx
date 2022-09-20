import React, {useEffect, useState} from "react";
import {axiosData} from "../../utils/axiosData";
import { SingleCarResponse, UserLoginResponse } from "types";
import {IoLocationOutline} from "react-icons/io5";
import {MdEmail} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";

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

    return (
        <div className="car__wrapper-section_car-data">
            <div className="single__car-data_brand">{car.brand} {car.model}</div>
            <div>{car.year} · {car.distance} · {car.fuelType}</div>
            <div className="single__car-data_price">{car.price} PLN</div>
            <button className="single__car-data_btn-email"><MdEmail/> {user.email}</button>
            <button className="single__car-data_btn-phone"><AiFillPhone/> {user.phoneNum}</button>
            <div><IoLocationOutline/> {car.city}</div>
        </div>
    );
}