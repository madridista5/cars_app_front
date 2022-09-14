import React from "react";

import {useLocation} from "react-router-dom";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";

interface StateLocation {
    data: string,
}

export const Info = () => {
    const location = useLocation();
    const myState = location.state as StateLocation;

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg app__wrapper section__padding">

                <div className="app__wrapper_info">
                    <p className="p__opensans">{myState.data}</p>
                </div>

                <div className="app__wrapper_img">
                    <div className="app__wrapper_img-background">
                        <div className="app__wrapper_img-background_overlay"/>
                    </div>
                </div>

            </div>
        </>
    );
};