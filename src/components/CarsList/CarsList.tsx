import React, {useContext, useEffect} from "react";

import './CarsList.css';
import {CarsListContext} from "../../context/carsList.context";

export const CarsList = () => {
    const {carsList} = useContext(CarsListContext);

    useEffect(() => {
        console.log(carsList);
    }, [carsList]);

    return (
        <div className="app__wrapper_info">
            <p className="p__cormorant">Lista samochodów</p>
        </div>
    );
}