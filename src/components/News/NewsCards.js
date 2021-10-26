import React from 'react';
import NewsCard from "./NewsCard";

const NewsCards = ({data}) => {
    return (
        <div className="news-cards">
            {data && data.map(data => (
                <NewsCard data={data}/>
            ))}

        </div>
    );
};

export default NewsCards;
