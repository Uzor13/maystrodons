import React from 'react'
import './App.css';
import Nav from "./components/Hero/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import News from "./components/News/News";
import Players from "./components/Players/Players";
import CTA from "./components/CTA/CTA";

function App() {
    return (
        <>
            <Nav/>
            <div className="grid-container">
                <Hero/>
                <About/>
                <News/>
                <CTA/>
                <Players/>
            </div>
        </>
    );
}

export default App;
