import React, {useContext, useEffect, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import {UserContext} from "../../context/user.context";
import {axiosData} from "../../utils/axiosData";
import { CarListResponse } from "types";
import {useNavigate} from "react-router-dom";
import {SingleCarViewOnTheUsersList} from "../../components/SingleCarViewOnTheUsersList/SingleCarViewOnTheUsersList";

export const UsersCarsList = () => {
    const [usersCarsList, setUsersCarsList] = useState<CarListResponse>([]);
    const {userData} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if(!userData.id) {
                navigate('/info', {
                    state: {data: 'Aby zobaczyć swoje ogłoszenia musisz najpierw się zalogować.'},
                });
                return;
            }
            const response = await axiosData.get(`/cars/getUsersCars/${userData.id}`);
            const data: CarListResponse = response.data;
            if(data.length === 0) {
                navigate('/info', {
                    state: {data: 'Nie masz żadnych ogłoszeń.'},
                });
                return;
            }
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
                                <SingleCarViewOnTheUsersList key={car.id} car={car}/>
                            ))
                        }
                    </div>
                </div>

            </div>

            <Footer/>
        </>
    );
};