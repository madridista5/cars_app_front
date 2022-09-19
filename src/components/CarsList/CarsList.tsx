import React, {useContext, useEffect} from "react";
import {CarsListContext} from "../../context/carsList.context";
import {SingleCarViewOnTheList} from "../SingleCarViewOnTheList/SingleCarViewOnTheList";

import './CarsList.css';

export const CarsList = () => {
    const {carsList} = useContext(CarsListContext);

    useEffect(() => {
        console.log(carsList);
    }, [carsList]);

    return (
        <div className="app__wrapper_info">
            <div className="cars__container">
            {
                carsList.map(car => (
                    <SingleCarViewOnTheList key={car.id} car={car}/>
                ))
            }
            </div>
        </div>
    );
}