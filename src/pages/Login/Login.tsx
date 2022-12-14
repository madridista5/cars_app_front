import React, {SyntheticEvent, useContext} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Link, useNavigate} from "react-router-dom";
import {useHandleEmailAndPass} from "../../hooks/useHandleEmailAndPass";
import {axiosData} from "../../utils/axiosData";
import {UserLoginResponse} from "types";
import {UserContext} from "../../context/user.context";

import './Login.css';
import {Footer} from "../../components/Footer/Footer";

export const Login = () => {
    const [handleEmailAndPass, setState] = useHandleEmailAndPass({
        email: '',
        password: '',
        isEmailCorrect: true,
        isPasswordCorrect: true,
    });
    const {setUserData} = useContext(UserContext);
    const navigate = useNavigate();

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!(handleEmailAndPass.email.split('').includes('@'))) {
            setState(undefined, undefined, false);
            return;
        } else {
            setState(undefined, undefined, true);
        }

        if (handleEmailAndPass.password.length < 8) {
            setState(undefined, undefined, undefined, false);
            return;
        } else {
            setState(undefined, undefined, undefined, true);
        }

        (async () => {
            const res = await axiosData.post('/auth/login', {
                email: handleEmailAndPass.email,
                pwd: handleEmailAndPass.password,
            });
            const data: UserLoginResponse = res.data;
            if (data.id) {
                localStorage.setItem('user', JSON.stringify(data));
                setUserData({
                    id: data.id,
                    email: data.email,
                    role: data.role,
                    phoneNum: data.phoneNum,
                    address: data.address,
                    lat: data.lat,
                    lon: data.lon,
                });
            }
            navigate('/info', {
                state: {data: data.info},
            });
            window.location.reload();
        })();
    }

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg app__wrapper section__padding">
                <div className="app__wrapper_info">
                    <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Logowanie</h1>
                    <div className="app__wrapper-content">
                        <form className="login__wrapper" onSubmit={handleForm}>
                            {!handleEmailAndPass.isEmailCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Email musi zawiera?? znak @</p>}
                            <input
                                type="text"
                                placeholder="email"
                                onChange={e => setState(e.target.value)}
                                value={handleEmailAndPass.email}
                            />
                            {!handleEmailAndPass.isPasswordCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Has??o musi zawiera?? conajmniej 8
                                    znak??w</p>}
                            <input
                                type="password"
                                placeholder="has??o"
                                onChange={e => setState(undefined, e.target.value)}
                                value={handleEmailAndPass.password}
                            />
                            <button type="submit" className="custom__button">Zaloguj</button>
                            <p className="p__opensans register-btn"><Link to="/register">Rejestracja</Link></p>
                        </form>
                    </div>
                </div>
                <div className="app__wrapper_img">
                    <div className="app__wrapper_img-background">
                        <div className="app__wrapper_img-background_overlay"/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
};