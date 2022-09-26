import React, {useContext, useEffect, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import {SingleCarViewOnTheList} from "../../components/SingleCarViewOnTheList/SingleCarViewOnTheList";
import {UserContext} from "../../context/user.context";
import {axiosData} from "../../utils/axiosData";
import { CarListResponse } from "types";
import {useNavigate} from "react-router-dom";

export const UsersCarsList = () => {
    const [usersCarsList, setUsersCarsList] = useState<CarListResponse>([]);
    const {id} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if(!id) {
                navigate('/info', {
                    state: {data: 'Aby zobaczyć swoje ogłoszenia musisz najpierw się zalogować.'},
                });
                return;
            }
            const response = await axiosData.get(`/cars/getUsersCars/${id}`);
            const data: CarListResponse = response.data;
            setUsersCarsList(data);
        })();
    }, []);

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg list__wrapper section__padding">
                <h1 className="headtext__cormorant" style={{marginRight: '3rem'}}>Moje ogłoszenia</h1>

                <div className="app__wrapper_info">
                    <div className="cars__container">
                        {
                            usersCarsList.map(car => (
                                <SingleCarViewOnTheList key={car.id} car={car}/>
                            ))
                        }
                    </div>
                </div>

            </div>

            <Footer/>
        </>
    );
};