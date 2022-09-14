import React, {SyntheticEvent} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Link} from "react-router-dom";
import {useHandleEmailAndPass} from "../../hooks/useHandleEmailAndPass";

export const Register = () => {
    const [handleEmailAndPass, setState] = useHandleEmailAndPass({
        email: '',
        password: '',
        isEmailCorrect: true,
        isPasswordCorrect: true,
    });

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
    }

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg app__wrapper section__padding">
                <div className="app__wrapper_info">
                    <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Rejestracja</h1>
                    <div className="app__wrapper-content">
                        <form className="login__wrapper" onSubmit={handleForm}>
                            {!handleEmailAndPass.isEmailCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Email musi zawierać znak @</p>}
                            <input
                                type="text"
                                placeholder="email"
                                onChange={e => setState(e.target.value)}
                                value={handleEmailAndPass.email}
                            />
                            {!handleEmailAndPass.isPasswordCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Hasło musi zawierać conajmniej 8
                                    znaków</p>}
                            <input
                                type="password"
                                placeholder="hasło"
                                onChange={e => setState(undefined, e.target.value)}
                                value={handleEmailAndPass.password}
                            />
                            <input
                                type="number"
                                placeholder="numer telefonu"
                            />
                            <p className="p__opensans">Wpisz adres w następujący sposób: NazwaMiasta, NazwaUlicy numer</p>
                            <input
                                type="text"
                                placeholder="np. Kłodzko, Noworudzka 1"
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