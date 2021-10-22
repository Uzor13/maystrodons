import React from 'react';
import Image from '../../assets/img/chris-mcintosh-EzWrW_39OcU-unsplash.jpg'

const NewsCard = () => {
    return (
        <div className="news-card">
            <img src={Image} alt=""/>
                <div className="news-card-text">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <a href="#">Read More</a>
                </div>
        </div>
    );
};

export default NewsCard;
