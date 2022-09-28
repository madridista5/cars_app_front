import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiFillCloseCircle} from "react-icons/ai";
import {UserContext} from "../../context/user.context";

import './NavbarRoutes.css';

export const NavbarRoutes = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const userData = useContext(UserContext);

    return (
        <div className="app__navbar">
            <div className="app__navbar-title">
                <p className="p__opensans"><Link to="/cars">Cars App</Link></p>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><Link to="/">Home</Link></li>
                {userData.id && <>
                    <li className="p__opensans"><Link to="/addCar">Dodaj ogłoszenie</Link></li>
                    <li className="p__opensans"><Link to="/usersCarsList">Moje ogłoszenia</Link></li>
                </>
                }
            </ul>
            <div className="app__navbar-login">
                {userData.id === ''
                    ? <Link to="/login" className="p__opensans">Logowanie / Rejestracja</Link>
                    : <Link to="/signOut" className="p__opensans" onClick={() => userData.id = ''}>Wyloguj</Link>
                }
                <div/>
                <Link to="/watch" className="p__opensans">Obserwowane</Link>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center">
                        <AiFillCloseCircle fontSize={27} className="overlay__close"
                                           onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><Link to="/">Home</Link></li>
                            {userData.id && <>
                                <li className="p__opensans"><Link to="/addCar">Dodaj ogłoszenie</Link></li>
                                <li className="p__opensans"><Link to="/usersCarsList">Moje ogłoszenia</Link></li>
                            </>
                            }
                            { userData.id !== ''
                                ? <li className="p__opensans"><Link to="/signOut" onClick={() => userData.id = ''}>Wyloguj</Link></li>
                                : <li className="p__opensans"><Link to="/login">Logowanie /
                                    Rejestracja</Link></li>
                            }
                            <li className="p__opensans"><Link to="/watch">Obserwowane</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}