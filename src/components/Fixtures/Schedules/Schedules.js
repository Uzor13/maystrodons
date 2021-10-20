import React, {useContext, Fragment} from 'react';
import Schedule from "./Schedule";
import {DataContext} from "../../../context/Data/DataContext";

const Schedules = () => {

    const {upcomingFixtures} = useContext(DataContext)

    return (
        <div className="schedules">
            {upcomingFixtures.map(fixture => (
                <Schedule data={fixture}/>
            ))}
        </div>
    );
};

export default Schedules;
