import React, {useContext} from 'react';
import PlayerCard from "./PlayerCard";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {DataContext} from "../../context/Data/DataContext";

const PlayerCards = () => {

    const {playerData} = useContext(DataContext)


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <Slider style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 1fr)",
            gridTemplateRows: "1fr",
            gap: "1rem",
            marginTop: "2rem",
            width: "100%",
        }} {...settings}>
            {playerData.map(player => (
                <PlayerCard data={player}/>
            ))}
        </Slider>
    );
};

export default PlayerCards;
