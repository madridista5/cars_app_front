import React, {SyntheticEvent, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Link} from "react-router-dom";

export const Register = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isEmailCorrect, setIsEmailCorrect] = useState<boolean>(true);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(true);

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!email.split('').includes('@')) {
            setIsEmailCorrect(false);
            return;
        } else {
            setIsEmailCorrect(true);
        }

        if (password.length < 8) {
            setIsPasswordCorrect(false);
            return;
        } else {
            setIsPasswordCorrect(true);
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
                            {!isEmailCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Email musi zawierać znak @</p>}
                            <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}
                                   value={email}/>
                            {!isPasswordCorrect &&
                                <p className="p__opensans" style={{color: 'red'}}>Hasło musi zawierać conajmniej 8
                                    znaków</p>}
                            <input type="password" placeholder="hasło" onChange={e => setPassword(e.target.value)}
                                   value={password}/>
                            <button type="submit" className="custom__button">Zaloguj</button>
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