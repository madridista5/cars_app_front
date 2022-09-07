import React, {useRef} from "react";
import {BsArrowRightShort, BsArrowLeftShort, BsInstagram} from 'react-icons/bs';
import {galleryImages} from "../../constants/data";

import './Gallery.css';

export const Gallery = () => {
  const scrollRef = useRef<HTMLHeadingElement>(null);

  const handleScroll = (direction: string) => {
    const {current} = scrollRef;

    if (direction === 'left' && current !== null) {
      current.scrollLeft -= 300;
    } else if (current !== null) {
      current.scrollLeft += 300;
    }
  };

  return (
      <div className="app__gallery flex__center section__padding" id="gallery">

        <div className="app__gallery-content">
          <h1 className="headtext__cormorant">Galeria</h1>
        </div>

        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {galleryImages.map((image, index) => (
                <div className="app__gallery-images_card flex__center" key={index}>
                  <img src={require(`../../assets/car${index + 1}.jpg`)} alt="gallery_image"/>
                  <BsInstagram className="gallery__image-icon"/>
                </div>
            ))}
          </div>
          <div className="app__gallery-images_arrow">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => handleScroll('left')}/>
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => handleScroll('right')}/>
          </div>
        </div>
      </div>
  );
};