import React, {SyntheticEvent, useState} from "react";
import {NavbarRoutes} from "../../components/NavbarRoutes/NavbarRoutes";
import {Footer} from "../../components/Footer/Footer";

import './AddCarForm.css';

export const AddCarForm = () => {
    const [newCar, setNewCar] = useState({
        bodyStyle: '',
        brand: '',
        model: '',
        price: 0,
        year: 0,
        distance: 0,
        fuelType: '',
        profilePhotoUrl: '',
    });

    const handleForm = (e: SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <NavbarRoutes/>

            <div className="app__bg app__wrapper section__padding">
                <div className="app__wrapper_info">
                    <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Dodaj ogłoszenie</h1>
                    <div className="app__wrapper-content">
                        <form className="login__wrapper" onSubmit={handleForm}>

                            {newCar.bodyStyle.length > 12 &&
                                <p className="p__opensans" style={{color: 'red'}}>Typ nadwozia nie może mieć więcej niż 12 znaków.</p>}
                            <input
                                type="text"
                                placeholder="Typ nadwozia"
                                onChange={e => setNewCar({
                                    ...newCar,
                                    bodyStyle: e.target.value,
                                })}
                                value={newCar.bodyStyle}
                            />

                            {newCar.brand.length > 255 &&
                                <p className="p__opensans" style={{color: 'red'}}>Marka samochodu nie może mieć więcej niż 255 znaków.</p>}
                            <input
                                type="text"
                                placeholder="Marka pojazdu"
                                onChange={e => setNewCar({
                                    ...newCar,
                                    brand: e.target.value,
                                })}
                                value={newCar.brand}
                            />

                            {newCar.model.length > 255 &&
                                <p className="p__opensans" style={{color: 'red'}}>Model samochodu nie może mieć więcej niż 255 znaków.</p>}
                            <input
                                type="text"
                                placeholder="Model pojazdu"
                                onChange={e => setNewCar({
                                    ...newCar,
                                    model: e.target.value,
                                })}
                                value={newCar.model}
                            />

                            <p className="p__opensans">Cena pojazdu:</p>
                            {newCar.price > 99999999999 &&
                                <p className="p__opensans" style={{color: 'red'}}>Cena pojazdu musi mieścić się w przedziale od 0 do 99999999999.</p>}
                            <input
                                type="number"
                                onChange={e => setNewCar({
                                    ...newCar,
                                    price: Number(e.target.value),
                                })}
                                value={newCar.price}
                            />

                            <p className="p__opensans">Rok produkcji pojazdu:</p>
                            {newCar.year > 9999 &&
                                <p className="p__opensans" style={{color: 'red'}}>Rok produkcji pojazdu musi mieścić się w przedziale od 0 do 9999.</p>}
                            <input
                                type="number"
                                onChange={e => setNewCar({
                                    ...newCar,
                                    year: Number(e.target.value),
                                })}
                                value={newCar.year}
                            />

                            <p className="p__opensans">Przebieg pojazdu:</p>
                            {newCar.distance > 99999999999 &&
                                <p className="p__opensans" style={{color: 'red'}}>Przebieg pojazdu musi mieścić się w przedziale od 0 do 99999999999.</p>}
                            <input
                                type="number"
                                onChange={e => setNewCar({
                                    ...newCar,
                                    distance: Number(e.target.value),
                                })}
                                value={newCar.distance}
                            />

                            {newCar.fuelType.length > 20 &&
                                <p className="p__opensans" style={{color: 'red'}}>Typ paliwa nie może mieć więcej niż 20 znaków.</p>}
                            <input
                                type="text"
                                placeholder="Typ paliwa"
                                onChange={e => setNewCar({
                                    ...newCar,
                                    fuelType: e.target.value,
                                })}
                                value={newCar.fuelType}
                            />

                            {newCar.profilePhotoUrl.length > 255 &&
                                <p className="p__opensans" style={{color: 'red'}}>Adres do zdjęcia profilowego nie może mieć więcej niż 255 znaków.</p>}
                            <input
                                type="text"
                                placeholder="Adres url do zdjęcia profilowego"
                                onChange={e => setNewCar({
                                    ...newCar,
                                    profilePhotoUrl: e.target.value,
                                })}
                                value={newCar.profilePhotoUrl}
                            />

                            <button type="submit" className="custom__button">Dodaj ogłoszenie</button>
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