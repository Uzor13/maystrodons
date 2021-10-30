import React, {Fragment, useContext} from 'react';
import PlayerCard from "./PlayerCard";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {DataContext} from "../../context/Data/DataContext";
import Loader from "react-loader-spinner";


const PlayerCards = () => {

    const {playersData, loading} = useContext(DataContext)


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

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{
                height: '100%'
            }}>
                <Loader
                    type="Puff"
                    color="#991B1B"
                    height={100}
                    width={100}
                />
            </div>

        );
    }

    return (
        <Slider className="player-cards" {...settings}>
            {playersData.map(player => (
                <PlayerCard data={player}/>
            ))}
        </Slider>
    );
};

export default PlayerCards;
