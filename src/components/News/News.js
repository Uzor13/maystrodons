import React from 'react';
import NewsHeader from "./NewsHeader";
import NewsCards from "./NewsCards";

const News = () => {
    return (
        <section className="news-section">
            <NewsHeader/>
            <NewsCards/>
        </section>
    );
};

export default News;
