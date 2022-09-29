import React, {useEffect, useState} from "react";
import { ImageRecordResponse } from "types";
import {axiosData} from "../../utils/axiosData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark} from "@fortawesome/free-solid-svg-icons";

import './SingleCarGallery.css';

interface Props {
    carId: string;
}

export const SingleCarGallery = ({carId}: Props) => {
    const [images, setImages] = useState<ImageRecordResponse>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [slideNumber, setSlideNumber] = useState<number>(0);

    useEffect(() => {
        (async () => {
            if(carId !== '') {
                const res = await axiosData(`/images/getImages/${carId}`);
                const images: ImageRecordResponse = res.data;
                setImages(images);
            }
        })();
    }, [carId]);

    const handleOpen = (index: number) => {
        setSlideNumber(index);
        setOpen(true);
    };

    const handleMove = (direction: 'L' | 'R') => {
        if(images.length > 0) {
            let newSliderNumber;

            if(direction === 'L') {
                newSliderNumber = slideNumber === 0 ? images.length - 1 : slideNumber-1;
            } else {
                newSliderNumber = (slideNumber === images.length - 1) ? 0 : slideNumber+1;
            }
            setSlideNumber(newSliderNumber);
        }
    }

    return (
        <>
            {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>
                <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="arrow"
                    onClick={() => handleMove('L')}
                />
                <div className="sliderWrapper">
                    {images && <img
                        src={images[slideNumber].url} alt="photo"
                        className="sliderImg"
                    />}
                </div>
                <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="arrow"
                    onClick={() => handleMove('R')}
                />
            </div>}
            <div className="car__wrapper-section_gallery">
                {
                    images.map((image, index) => (
                        <div key={image.id} className="car__photo__wrapper">
                            <img
                                src={image.url}
                                alt="car_photo"
                                className="car__photo-img"
                                onClick={() => handleOpen(index)}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};