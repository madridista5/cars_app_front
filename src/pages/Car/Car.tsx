import React, {useEffect, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import {SingleCarGallery} from "../../components/SingleCarGallery/SingleCarGallery";

import './Car.css';
import {SingleCarData} from "../../components/SingleCarData/SingleCarData";
import {SingleCarDetails} from "../../components/SingleCarDetails/SingleCarDetails";
import {SingleCarMap} from "../../components/SingleCarMap/SingleCarMap";

export const Car = () => {
    const [carId, setCarId] = useState<string>('');

    useEffect(() => {
        const carId = window.location.pathname.split('/')[2];
        setCarId(carId);
    }, []);

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg car__wrapper section__padding">
                <div className="car__wrapper-section">
                    <SingleCarGallery carId={carId}/>
                    <SingleCarData carId={carId}/>
                </div>
                <div className="car__wrapper-section">
                    <SingleCarDetails carId={carId}/>
                    <SingleCarMap carId={carId}/>
                </div>
            </div>

            <Footer/>
        </>
    );
};