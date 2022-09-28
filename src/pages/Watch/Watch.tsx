import React, {useContext, useEffect, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";
import {SingleCarViewOnTheUsersList} from "../../components/SingleCarViewOnTheUsersList/SingleCarViewOnTheUsersList";
import {UserContext} from "../../context/user.context";
import {useNavigate} from "react-router-dom";
import {axiosData} from "../../utils/axiosData";
import {CarListResponse, SingleCarResponse, WatchRecordResponse} from "types";

export const Watch = () => {
    const [usersCarsList, setUsersCarsList] = useState<CarListResponse>([]);
    const {userData} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (!userData.id) {
                navigate('/info', {
                    state: {data: 'Aby zobaczyć "obserwowane" musisz najpierw się zalogować.'},
                });
                return;
            }
            const responseWatch = await axiosData.get(`/watch/allWatch/${userData.id}`);
            const data: WatchRecordResponse = responseWatch.data;
            if (data.length === 0) {
                navigate('/info', {
                    state: {data: 'Nie masz żadnych ogłoszeń w "obserwowanych".'},
                });
                return;
            }
            const cars = [];
            for (let i = 0; i < data.length; i++) {
                const carResponse = await axiosData.get(`/cars/getOneCar/${data[i].carId}`);
                const car: SingleCarResponse = carResponse.data;
                cars.push(car);
            }
            setUsersCarsList(cars);
        })();
    }, []);

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg list__wrapper section__padding">
                <h1 className="headtext__cormorant" style={{marginRight: '3rem'}}>Obserwowane</h1>

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