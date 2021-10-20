import React, {useContext} from 'react';
import Fixture from "./Fixture";
import Schedules from "./Schedules/Schedules";
import {DataContext} from "../../context/Data/DataContext";

const Fixtures = () => {

    const {fixtures} = useContext(DataContext)

    return (
        <section className="fixtures-section">
            <h1 className="title">FIXTURES</h1>
            {fixtures.map(fixture => (
                <Fixture data={fixture}/>
            ))}
            <h1 className="title" style={{marginTop: "1.5rem"}}>GAME SCHEDULES</h1>
            <Schedules/>
        </section>
    );
};

export default Fixtures;
