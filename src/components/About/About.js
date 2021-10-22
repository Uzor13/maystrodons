import React from 'react';
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
    return (
        <section className="about-section" id="about">
            <h1 className="title">WHAT WE ARE ABOUT</h1>
            <div className="about-section__content">
                <AboutImage/>
                <AboutContent/>
            </div>
        </section>
    );
};

export default About;
