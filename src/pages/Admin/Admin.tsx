import React, {useEffect, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import { CarListResponse } from "types";
import {axiosData} from "../../utils/axiosData";
import {SingleCarViewOnTheAdminList} from "../../components/SingleCarViewOnTheAdminList/SingleCarViewOnTheAdminList";

export const Admin = () => {
    const [carsList, setCarsList] = useState<CarListResponse>([]);

    useEffect(() => {
        (async () => {
            const resCars = await axiosData('/cars/getAllCars');
            const cars: CarListResponse = resCars.data;
            setCarsList(cars);
        })();
    }, []);

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg list__wrapper section__padding">
                <div className="app__wrapper_info">
                    <h1 className="headtext__cormorant" style={{marginRight: '3rem'}}>Admin</h1>
                    <p className="p__opensans">Jako administrator możesz usunąć ogłoszenia użytkowników, którzy złamali regulamin. Pamiętaj, że tej operacji nie można cofnąć !</p>
                </div>
                <div className="app__wrapper_info">
                    <div className="cars__container">
                        {
                            carsList.map(car => (
                                <SingleCarViewOnTheAdminList key={car.id} car={car}/>
                            ))
                        }
                    </div>
                </div>

            </div>

            <Footer/>
        </>
    );
}