import React from 'react';
import FixtureLogo from "./FixtureLogo";

const FixtureDetail = ({data}) => {
    return (
        <div className="fixture-detail">
            <div className="fixture-score">
                <p>{data.homeTeam_Score}</p>
            </div>
            <div className="team-logo">
                {data.home_logo !== "" ?
                    <img src={data.home_logo} alt=""/>
                    : <i className="fas fa-basketball-ball"/>}

            </div>
            <div>
                <h3>FINAL</h3>
            </div>
            <div className="team-logo">
                {data.away_logo !== "" ?
                    <img src={data.away_logo} alt=""/>
                    : <i className="fas fa-basketball-ball"/>}

            </div>
            <div className="fixture-score">
                <p>{data.awayTeam_score}</p>
            </div>
        </div>
    );
};

export default FixtureDetail;
