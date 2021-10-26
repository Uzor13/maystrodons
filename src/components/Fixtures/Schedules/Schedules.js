import React, {useContext, Fragment} from 'react';
import Schedule from "./Schedule";
import {DataContext} from "../../../context/Data/DataContext";
import Loader from "react-loader-spinner";

const Schedules = () => {

    const {upcomingFixtures, loading} = useContext(DataContext)

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
        <div className="schedules">
            {upcomingFixtures.map(fixture => (
                <Schedule data={fixture}/>
            ))}
        </div>
    );
};

export default Schedules;
