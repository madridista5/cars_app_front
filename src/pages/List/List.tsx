import React from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import {SearchForm} from "../../components/SearchForm/SearchForm";

export const List = () => {
    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg app__wrapper section__padding">
                <SearchForm/>

                <div className="app__wrapper_info">
                    <p className="p__cormorant">Lista samochodów</p>
                </div>
            </div>

            <Footer/>
        </>
    );
};