import React from 'react';
import Header from "./Header/Header";
import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <div className="hero">
            <Header/>
            <HeroContent/>
        </div>
    );
};

export default Hero;
