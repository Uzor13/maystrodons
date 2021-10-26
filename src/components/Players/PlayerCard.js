import React from 'react';

const PlayerCard = ({data}) => {

    return (
        <div className="news-card" style={{width: "90%"}} key={data.id}>
            <img src={data.image} alt=""/>
            <div className="news-card-text">
                <div>
                    <h1 style={{fontSize: "22px"}}>{data.first_name}</h1>
                    <p>{data.position}</p>
                </div>
                <div className="card-text__number">
                    <h2>{data.player_number}</h2>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
