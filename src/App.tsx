import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { List } from './pages/List/List';
import { Car } from './pages/Car/Car';
import {Login} from "./pages/Login/Login";
import {Register} from "./pages/Register/Register";
import {Watch} from "./pages/Watch/Watch";

import './App.css';

export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cars" element={<List/>}/>
          <Route path="/cars/:id" element={<Car/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/watch/:userId" element={<Watch/>}/>
        </Routes>
      </BrowserRouter>
  );
};
