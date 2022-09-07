import React from "react";
import {SingleAward} from "./SingleAward";
import {awards} from "../../constants/data";

import './Awards.css';

export const Awards = () => {
    return (
        <div className="app__bg app__wrapper section__padding" id="awards">
            <div className="app__wrapper_info">
                <h1 className="headtext__cormorant">Nasze nagrody</h1>
                <div className="app__laurels_awards">
                    {awards.map(award => <SingleAward key={award.title} title={award.title} subtitle={award.subtitle}/>)}
                </div>
            </div>
            <div className="app__wrapper_img" style={{position: 'relative'}}>
                <img src={require('../../assets/award.jpg')} alt="award"/>
            </div>
        </div>
    );
};