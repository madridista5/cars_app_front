import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from './pages/Home/Home';
import {List} from './pages/List/List';
import {Car} from './pages/Car/Car';
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {Watch} from "./pages/Watch/Watch";
import {Info} from "./pages/Info/Info";
import {CarListResponse, UserLoginResponse} from 'types';
import {UserContext} from "./context/user.context";
import {SignOut} from "./pages/SignOut/SignOut";
import {CarsListContext} from './context/carsList.context';
import { AddCarForm } from './pages/AddCarForm/AddCarForm';
import {UsersCarsList} from "./pages/UsersCarsList/UsersCarsList";
import {AddImageForm} from "./pages/AddImageForm/AddImageForm";
import {Admin} from "./pages/Admin/Admin";

import './App.css';

export const App = () => {
    const [userData, setUserData] = useState({
        userData: {
            id: '',
            email: '',
            role: '',
            phoneNum: 0,
            address: '',
            lat: 0,
            lon: 0,
        },
        setUserData: () => {},
    });
    const [carsList, setCarsList] = useState<CarListResponse>([]);

    useEffect(() => {
        const data = localStorage.getItem('user');
        if (data !== null) {
            const userDataFromLS: UserLoginResponse = JSON.parse(data);
            setUserData({
                userData: {
                    ...userDataFromLS,
                },
                setUserData: () => {},
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{...userData}}>
            <CarsListContext.Provider value={{carsList, setCarsList}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cars" element={<List/>}/>
                        <Route path="/cars/:id" element={<Car/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/watch/" element={<Watch/>}/>
                        <Route path="/info" element={<Info/>}/>
                        <Route path="/signOut" element={<SignOut/>}/>
                        <Route path="/addCar" element={<AddCarForm/>}/>
                        <Route path="/usersCarsList" element={<UsersCarsList/>}/>
                        <Route path="/add/image" element={<AddImageForm/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                    </Routes>
                </BrowserRouter>
            </CarsListContext.Provider>
        </UserContext.Provider>
    );
};
