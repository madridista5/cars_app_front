import React, {useContext, useEffect, useState} from "react";
import {axiosData} from "../../utils/axiosData";
import {CarListResponse} from "types";
import {CarsListContext} from "../../context/carsList.context";

import './SearchForm.css';

export const SearchForm = () => {
    const [searchData, setSearchData] = useState({
        bodyStyle: '%',
        brand: '%',
        model: '%',
        priceStart: 0,
        priceEnd: 999999,
        yearStart: 0,
        yearEnd: 9999,
        fuelType: '%',
        distanceStart: 0,
        distanceEnd: 999999,
    });
    const {carsList, setCarsList} = useContext(CarsListContext);

    useEffect(() => {
        (async () => {
            const response = await axiosData.post('/cars/getSearchCars', searchData);
            const data: CarListResponse = response.data;
            setCarsList(data);
        })();
    }, [searchData]);

    const handleSelect = (key: string, value: string | number) => {
        setSearchData({
            ...searchData,
            [key]: value,
        });
    }

    const cleanFilters = () => {
        setSearchData({
            bodyStyle: '%',
            brand: '%',
            model: '%',
            priceStart: 0,
            priceEnd: 999999,
            yearStart: 0,
            yearEnd: 9999,
            fuelType: '%',
            distanceStart: 0,
            distanceEnd: 999999,
        });
    }

    return (
        <div className="app__wrapper_info">
            <div className="app__wrapper_form-container">
                <p className="p__cormorant" style={{textAlign: 'center'}}>Czego szukasz?</p>
                <form>
                    <select name="" id="" onChange={(e) => handleSelect('bodyStyle', e.target.value)}>
                        <option value="%">Typ nadwozia</option>
                        {
                            [...new Set(carsList.map(car => car.bodyStyle))]
                                .map((bodyStyle, index) => <option
                                    key={index}
                                    value={bodyStyle}
                                >{bodyStyle}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('brand', e.target.value)}>
                        <option value="%">Marka pojazdu</option>
                        {
                            [...new Set(carsList.map(car => car.brand))]
                                .map((brand, index) => <option
                                    key={index}
                                    value={brand}
                                >{brand}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('model', e.target.value)}>
                        <option value="%">Model</option>
                        {
                            [...new Set(carsList.map(car => car.model))]
                                .map((model, index) => <option
                                    key={index}
                                    value={model}
                                >{model}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('priceStart', e.target.value)}>
                        <option value={0}>Cena od</option>
                        {
                            [...new Set(carsList.map(car => car.price))]
                                .sort((a, b) => a - b)
                                .map((price, index) => <option
                                    key={index}
                                    value={price}
                                >{price}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('priceEnd', e.target.value)}>
                        <option value="">Cena do</option>
                        {
                            [...new Set(carsList.map(car => car.price))]
                                .sort((a, b) => a - b)
                                .map((price, index) => <option
                                    key={index}
                                    value={price}
                                >{price}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('yearStart', e.target.value)}>
                        <option value="">Rok produkcji od</option>
                        {
                            [...new Set(carsList.map(car => car.year))]
                                .sort((a, b) => a - b)
                                .map((year, index) => <option
                                    key={index}
                                    value={year}
                                >{year}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('yearEnd', e.target.value)}>
                        <option value="">Rok produkcji do</option>
                        {
                            [...new Set(carsList.map(car => car.year))]
                                .sort((a, b) => a - b)
                                .map((year, index) => <option
                                    key={index}
                                    value={year}
                                >{year}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('fuelType', e.target.value)}>
                        <option value="">Rodzaj paliwa</option>
                        {
                            [...new Set(carsList.map(car => car.fuelType))]
                                .map((fuelType, index) => <option
                                    key={index}
                                    value={fuelType}
                                >{fuelType}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('distanceStart', e.target.value)}>
                        <option value="">Przebieg od</option>
                        {
                            [...new Set(carsList.map(car => car.distance))]
                                .sort((a, b) => a - b)
                                .map((distance, index) => <option
                                    key={index}
                                    value={distance}
                                >{distance}</option>)
                        }
                    </select>

                    <select name="" id="" onChange={(e) => handleSelect('distanceEnd', e.target.value)}>
                        <option value="">Przebieg do</option>
                        {
                            [...new Set(carsList.map(car => car.distance))]
                                .sort((a, b) => a - b)
                                .map((distance, index) => <option
                                    key={index}
                                    value={distance}
                                >{distance}</option>)
                        }
                    </select>

                    {/*<button type="submit" className="custom__button" style={{marginTop: '1rem', width: '100%'}}>Szukaj*/}
                    {/*</button>*/}

                    <button
                        className="custom__button"
                        style={{marginTop: '1rem', width: '100%'}}
                        onClick={cleanFilters}
                    >Wyczyść filtry</button>
                </form>
            </div>
        </div>
    );
};