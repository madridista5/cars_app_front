import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from './pages/Home/Home';
import {List} from './pages/List/List';
import {Car} from './pages/Car/Car';
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {Watch} from "./pages/Watch/Watch";
import {Info} from "./pages/Info/Info";
import {UserLoginResponse} from 'types';
import {UserContext} from "./context/user.context";

import './App.css';

export const App = () => {
    const [userData, setUserData] = useState<UserLoginResponse>({
        id: '',
        email: '',
        role: '',
        phoneNum: 0,
        address: '',
        lat: 0,
        lon: 0,
    });

    useEffect(() => {
        const data = localStorage.getItem('user');
        if (data !== null) {
            const userDataFromLS: UserLoginResponse = JSON.parse(data);
            setUserData({
                ...userDataFromLS,
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{...userData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cars" element={<List/>}/>
                    <Route path="/cars/:id" element={<Car/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/watch/:userId" element={<Watch/>}/>
                    <Route path="/info" element={<Info/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
};
