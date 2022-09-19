import React from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";

import './Car.css';

export const Car = () => {
    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg car__wrapper section__padding">
                car
            </div>

            <Footer/>
        </>
    );
};