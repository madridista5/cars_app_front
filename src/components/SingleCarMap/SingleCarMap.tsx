import React, {useEffect, useState} from "react";
import {SingleCarResponse, UserLoginResponse } from "types";
import {axiosData} from "../../utils/axiosData";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

import './SingleCarMap.css';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';

interface Props {
    carId: string;
}

export const SingleCarMap = ({carId}: Props) => {
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
                const resUser = await axiosData(`/users/getOneUser/${car.userId}`);
                const user: UserLoginResponse = resUser.data;
                setUser(user);
            }
        })();
    }, [carId]);

    return (
        <div className="car__wrapper-section_map">
            <MapContainer center={[51.8341211, 19.6163938]} zoom={6}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                        <Marker key={user.id} position={[user.lat, user.lon]}>
                            <Popup>
                                <h2>{user.address}</h2>
                            </Popup>
                        </Marker>
                }
            </MapContainer>
        </div>
    );
}