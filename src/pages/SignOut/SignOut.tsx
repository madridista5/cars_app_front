import React, {useContext, useEffect} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {UserContext} from "../../context/user.context";
import {axiosData} from "../../utils/axiosData";
import {Footer} from "../../components/Footer/Footer";

export const SignOut = () => {
    const {setUserData} = useContext(UserContext);

    useEffect(() => {
        setUserData({
            id: '',
            email: '',
            role: '',
            phoneNum: 0,
            address: '',
            lat: 0,
            lon: 0,
        });
        localStorage.clear();

        (async () => {
            await axiosData.get('/auth/logout');
        })();
    }, []);

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg app__wrapper section__padding">

                <div className="app__wrapper_info">
                    <p className="p__opensans">Zostałeś/Zostałaś wylogowany/a.</p>
                </div>

                <div className="app__wrapper_img">
                    <div className="app__wrapper_img-background">
                        <div className="app__wrapper_img-background_overlay"/>
                    </div>
                </div>

            </div>

            <Footer/>
        </>
    )
}