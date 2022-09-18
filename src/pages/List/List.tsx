import React from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import {SearchForm} from "../../components/SearchForm/SearchForm";
import {CarsList} from "../../components/CarsList/CarsList";

export const List = () => {
    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg app__wrapper section__padding">
                <SearchForm/>
                <CarsList/>
            </div>

            <Footer/>
        </>
    );
};