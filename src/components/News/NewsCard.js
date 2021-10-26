import React from 'react';
import {Link} from "react-router-dom";

const NewsCard = ({data}) => {
    return (
        <div className="news-card">
            <img src={data.image_url} alt=""/>
            <div className="news-card-text">
                <h2>{data.title}</h2>
                <Link to="/">Read More</Link>
            </div>
        </div>
    );
};

export default NewsCard;
