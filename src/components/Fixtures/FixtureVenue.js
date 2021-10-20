import React from 'react';

const FixtureVenue = ({data}) => {
    return (
        <div className="fixture-venue">
            <p>{data.venue}</p>
        </div>
    );
};

export default FixtureVenue;
