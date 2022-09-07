import React from "react";
import {NavbarHome} from "../../components/NavbarHome/NavbarHome";
import {Header} from "../../components/Header/Header";
import {Video} from "../../components/Video/Video";
import {Awards} from "../../components/Awards/Awards";
import {Gallery} from "../../components/Gallery/Gallery";
import {Footer} from "../../components/Footer/Footer";

export const Home = () => {
    return (
        <>
            <NavbarHome/>
            <Header/>
            <Video/>
            <Gallery/>
            <Awards/>
            <Footer/>
        </>
    );
};