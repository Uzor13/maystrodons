import React from 'react';
import Spinner from "./Spinner";

const HeroContent = () => {
    return (
        <div className="hero-content">
            <div className="hero-content__text">
                <h1>THE MAYSTRODONS ARE HERE</h1>
            </div>
            <Spinner/>
        </div>
    );
};

export default HeroContent;
