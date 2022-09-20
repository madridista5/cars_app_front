import React, {useEffect, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import {SingleCarGallery} from "../../components/SingleCarGallery/SingleCarGallery";

import './Car.css';

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
                    <div style={{color: 'white'}}>Dane</div>
                </div>
                <div className="car__wrapper-section">
                    <div style={{color: 'white'}}>Szczegóły</div>
                    <div style={{color: 'white'}}>Mapa</div>
                </div>
            </div>

            <Footer/>
        </>
    );
};