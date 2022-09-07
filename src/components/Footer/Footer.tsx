import React from "react";

import './Footer.css';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

export const Footer = () => {
    return (
        <div className="app__footer section__padding">
            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Znajdź nas</h1>
                    <p className="p__opensans"><FiFacebook/> Facebook</p>
                    <p className="p__opensans"><FiTwitter/> Twitter</p>
                    <p className="p__opensans"><FiInstagram/> Instagram</p>
                </div>

                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Cars App</h1>
                    <p className="p__opensans">Pomoc</p>
                    <p className="p__opensans">Kontakt</p>
                    <p className="p__opensans">Reklama</p>
                </div>

                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Przydatne informacje</h1>
                    <p className="p__opensans">Cenniki dla klientów indywidualnych</p>
                    <p className="p__opensans">Cenniki dla klientów biznesowych</p>
                    <p className="p__opensans">Testy samochodów</p>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans">2022 Cars App. All rights reserved.</p>
            </div>
        </div>
    );
};