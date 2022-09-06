import React, {useState} from "react";
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import { Link } from "react-router-dom";

import './NavbarHome.css';

export const NavbarHome = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <div className="app__navbar">
            <div className="app__navbar-title">
                <p className="p__opensans">Cars App</p>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#awards">Nagrody</a></li>
                <li className="p__opensans"><a href="#gallery">Galeria</a></li>
            </ul>
            <div className="app__navbar-login">
                <Link to="/login" className="p__opensans">Logowanie / Rejestracja</Link>
                <div/>
                <Link to="/watch/userId" className="p__opensans">Obserwowane</Link>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close"
                                                 onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><a href="#home">Home</a></li>
                            <li className="p__opensans"><a href="#awards">Nagrody</a></li>
                            <li className="p__opensans"><a href="#gallery">Galeria</a></li>
                            <li className="p__opensans"><Link to="/login">Logowanie /
                                Rejestracja</Link></li>
                            <li className="p__opensans"><Link to="/signOut">Wyloguj</Link></li>
                            <li className="p__opensans"><Link to="/watch/userId">Obserwowane</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};