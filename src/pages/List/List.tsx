import React from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import {SearchForm} from "../../components/SearchForm/SearchForm";

export const List = () => {
    return (
        <>
            <NavbarRoutes/>
            <SearchForm/>
            <Footer/>
        </>
    );
};