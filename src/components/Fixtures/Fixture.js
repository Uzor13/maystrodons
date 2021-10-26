import React from 'react';
import FixtureLogo from "./FixtureLogo";
import FixtureDate from "./FixtureDate";
import FixtureDetail from "./FixtureDetail";
import FixtureVenue from "./FixtureVenue";

const Fixture = ({data}) => {
    return (
        <div className="fixture" key={data.id}>
            <FixtureDate data={data}/>
            <FixtureDetail data={data}/>
            <FixtureVenue data={data}/>
        </div>
    );
};

export default Fixture;
