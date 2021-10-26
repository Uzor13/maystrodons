import React from 'react';
import {Link} from "react-router-dom";

const NewsHeader = () => {
    return (
        <div className="news-header">
            <h1 className="title">NEWS</h1>
            <Link to="/news">
                <p><i className="far fa-newspaper"/> View all the stories</p>
            </Link>
        </div>
    );
};

export default NewsHeader;
