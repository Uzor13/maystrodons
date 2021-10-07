import React from 'react';
import Slider from "react-slick";
import PlayerCards from "./PlayerCards";

const Players = () => {
    return (
        <div className="players-section">
            <h1 className="title">MEET THE TEAM</h1>
            <PlayerCards/>
        </div>
    );
};

export default Players;
