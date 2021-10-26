import React, {Fragment, useContext} from 'react';
import NewsHeader from "./NewsHeader";
import NewsCards from "./NewsCards";
import {DataContext} from "../../context/Data/DataContext";

const News = () => {

    const {news} = useContext(DataContext)

    return (
        <Fragment>
            { news.length > 0 ?
                <section className="news-section" id="news">
                <NewsHeader/>
                <NewsCards data={news}/>
            </section> : null}

        </Fragment>

    );
};

export default News;
