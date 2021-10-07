import React from 'react';
import Image from '../../assets/img/chris-mcintosh-EzWrW_39OcU-unsplash.jpg'

const PlayerCard = () => {
    return (
        <div className="card">
            <img src={Image} alt=""/>
                <div className="card-text">
                    <div>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <div className="divider"/>
                        <p>Forward</p>
                    </div>
                    <div className="card-text__number">
                        <h2>12</h2>
                    </div>
                </div>
        </div>
    );
};

export default PlayerCard;
