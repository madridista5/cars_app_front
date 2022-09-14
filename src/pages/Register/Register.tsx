import React, {SyntheticEvent, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Link, useNavigate} from "react-router-dom";
import {geocode} from "../../utils/geocoding";
import {axiosData} from "../../utils/axiosData";

export const Register = () => {
    const [registerData, setRegisterData] = useState({
        email: '',
        pwd: '',
        phoneNum: 0,
        address: '',
        isEmailCorrect: true,
        isPasswordCorrect: true,
        isPhoneNumCorrect: true,
    });
    const navigate = useNavigate();

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!(registerData.email.split('').includes('@'))) {
            setRegisterData({
                ...registerData,
                isEmailCorrect: false,
            });
            return;
        } else {
            setRegisterData({
                ...registerData,
                isEmailCorrect: true,
            });
        }

        if (registerData.pwd.length < 8) {
            setRegisterData({
                ...registerData,
                isPasswordCorrect: false,
            });
            return;
        } else {
            setRegisterData({
                ...registerData,
                isPasswordCorrect: true,
            });
        }

        if(registerData.phoneNum > 999999999) {
            setRegisterData({
                ...registerData,
                isPhoneNumCorrect: false,
            });
        } else {
            setRegisterData({
                ...registerData,
                isPhoneNumCorrect: true,
            });
        }

        (async () => {
            const {lat, lon} = await geocode(registerData.address);
            const {data} = await axiosData.post('/auth/register', {
                email: registerData.email,
                pwd: registerData.pwd,
                phoneNum: registerData.phoneNum,
                address: registerData.address,
                lat,
                lon,
            });
            navigate('/info', {
                state: {data},
            });
        })();
    }

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg app__wrapper section__padding">
                <div className="app__wrapper_info">
                    <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Rejestracja</h1>
                    <div className="app__wrapper-content">
                        <form className="login__wrapper" onSubmit={handleForm}>
                            {!registerData.isEmailCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Email musi zawierać znak @</p>}
                            <input
                                type="text"
                                placeholder="email"
                                onChange={e => setRegisterData({
                                    ...registerData,
                                    email: e.target.value,
                                })}
                                value={registerData.email}
                            />
                            {!registerData.isPasswordCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Hasło musi zawierać conajmniej 8
                                    znaków</p>}
                            <input
                                type="password"
                                placeholder="hasło"
                                onChange={e => setRegisterData({
                                    ...registerData,
                                    pwd: e.target.value,
                                })}
                                value={registerData.pwd}
                            />
                            <p className="p__opensans">Numer telefonu:</p>
                            {!registerData.isPhoneNumCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Numer telefonu może mieć maksymalnie 9 cyfr</p>}
                            <input
                                type="number"
                                placeholder="numer telefonu"
                                onChange={e => setRegisterData({
                                    ...registerData,
                                    phoneNum: Number(e.target.value),
                                })}
                                value={registerData.phoneNum}
                            />
                            <p className="p__opensans">Wpisz adres w następujący sposób: NazwaMiasta, NazwaUlicy
                                numer</p>
                            <input
                                type="text"
                                placeholder="np. Kłodzko, Noworudzka 1"
                                onChange={e => setRegisterData({
                                    ...registerData,
                                    address: e.target.value,
                                })}
                                value={registerData.address}
                            />
                            <button type="submit" className="custom__button">Zarejestruj</button>
                            <p className="p__opensans register-btn"><Link to="/login">Logowanie</Link></p>
                        </form>
                    </div>
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