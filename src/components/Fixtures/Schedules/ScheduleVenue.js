import React from 'react';

const ScheduleVenue = ({data}) => {
    return (
        <div className="fixture-venue">
            <p>{data.venue}</p>
        </div>
    );
};

export default ScheduleVenue;
