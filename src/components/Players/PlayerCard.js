import React from 'react';
import {motion} from "framer-motion";

const PlayerCard = ({data}) => {

    return (
        <motion.div className="news-card" key={data._id} whileHover={{scale: 1.1}}>
            <img src={data.image} alt=""/>
            <div className="news-card-text">
                <div>
                    <h1 style={{fontSize: "22px"}}>{data.last_name} {" "} {data.first_name}</h1>
                    <p>{data.position}</p>
                </div>
                <div className="card-text__number">
                    <h2>{data.player_number}</h2>
                </div>
            </div>
        </motion.div>
    );
};

export default PlayerCard;
