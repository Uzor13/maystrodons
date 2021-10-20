import React from 'react';

const ScheduleDate = ({data}) => {
    return (
        <div className="fixture-date">
            <p>{data.date}</p>
        </div>
    );
};

export default ScheduleDate;
