import React from "react";
import { CarEntity } from "types";

import './SingleCarViewOnTheList.css';

interface Props {
    car: CarEntity,
}

export const SingleCarViewOnTheList = ({car}: Props) => {
    return (
        <div className="car__container">Single Car, Brand: {car.brand} Model: {car.model}</div>
    );
};