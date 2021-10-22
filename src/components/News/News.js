import React from 'react';
import NewsHeader from "./NewsHeader";
import NewsCards from "./NewsCards";

const News = () => {
    return (
        <section className="news-section" id="news">
            <NewsHeader/>
            <NewsCards/>
        </section>
    );
};

export default News;
