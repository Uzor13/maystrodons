import React from 'react';
import Header from "./Header/Header";
import HeroContent from "./HeroContent";
import { HashLink as Link } from 'react-router-hash-link';
import HeroVideo from '../../assets/videos/Video.mov'
import Poster from '../../assets/img/august-phlieger-CREqtqgBFcU-unsplash.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <video loop poster={Poster} className="background-vid">
                <source src={HeroVideo}/>
            </video>
            <Header/>
            <HeroContent/>
            <Link smooth to="/#about" className="scroll">
                <p>EXPLORE</p>
                <i className="fas fa-arrow-down"/>
            </Link>
        </div>
    );
};

export default Hero;
