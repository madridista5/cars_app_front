import React from "react";

import './Header.css';
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <h1 className="app__header-h1">Cars App</h1>
                <p className="p__opensans" style={{margin: '2rem 0'}}>Z aplikacją Cars App znajdziesz idalny samochód dla siebie lub będziesz mógł sprzedać własny.</p>
                <Link to="/cars"><button type="button" className="custom__button">Otwórz aplikację</button></Link>
            </div>
            <div className="app__wrapper_img">
                <div className="app__wrapper_img-background"/>
            </div>
        </div>
    );
};