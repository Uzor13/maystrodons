import React, {Fragment, useContext} from 'react';
import Fixture from "./Fixture";
import Schedules from "./Schedules/Schedules";
import {DataContext} from "../../context/Data/DataContext";
import Loader from "react-loader-spinner";

const Fixtures = () => {

    const {fixtures, upcomingFixtures, loading} = useContext(DataContext)

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{
                height: '100%'
            }}>
                <Loader
                    type="Puff"
                    color="#991B1B"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>

        );
    }

    return (
        <Fragment>
            <section className="fixtures-section">
                {fixtures.length > 0 ?
                    <>
                        <h1 className="title">FIXTURES</h1>
                        {fixtures.map(fixture => (
                            <Fixture data={fixture}/>
                        ))}
                    </> : null}
                {upcomingFixtures.length > 0 ?
                    <div className="mt-5">
                        <h1 className="title" style={{marginTop: "1.5rem"}}>GAME SCHEDULES</h1>
                        <Schedules/>
                    </div> : null}

            </section>
        </Fragment>

    );
};

export default Fixtures;
