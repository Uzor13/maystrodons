import React from 'react';

const ScheduleDetail = ({data}) => {
    return (
        <div className="fixture-detail">
            <div className="d-flex flex-column align-items-center">
                <div className="team-logo">
                    {data.home_logo !== "" ?
                        <img src={data.home_logo} alt=""/>
                        : <i className="fas fa-basketball-ball"/>}

                </div>
                <p className="text-center">{data.home_team}</p>
            </div>
            <div>
                <h3>@</h3>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="team-logo">
                    {data.away_logo !== "" ?
                        <img src={data.away_logo} alt=""/>
                        : <i className="fas fa-basketball-ball"/>}

                </div>
                <p>{data.away_team}</p>
            </div>

        </div>
    );
};

export default ScheduleDetail;
