import React, {SyntheticEvent, useState} from "react";
import {Footer} from "../../components/Footer/Footer";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {useLocation, useNavigate} from "react-router-dom";
import {axiosData} from "../../utils/axiosData";

interface StateLocation {
    carId: string,
    userId: string,
}

export const AddImageForm = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const location = useLocation();
    const state = location.state as StateLocation;
    const navigate = useNavigate();

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
        (async () => {
            const res = await axiosData.post(`/images/add/${state.userId}/${state.carId}`, {
                url: imageUrl,
            });
            const data: string = res.data;
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
                    <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Dodaj zdjęcie pojazdu</h1>
                    <div className="app__wrapper-content">
                        <form className="login__wrapper" onSubmit={handleForm}>
                            {imageUrl.length > 255 &&
                                <p className="p__opensans" style={{color: 'red'}}>Adres url do zdjęcia pojazdu nie może mieć więcej niż 255 znaków.</p>}
                            <input
                                type="text"
                                placeholder="adres url do zdjęcia"
                                onChange={e => setImageUrl(e.target.value)}
                                value={imageUrl}
                            />
                            <button type="submit" className="custom__button">Dodaj</button>
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
    )
}