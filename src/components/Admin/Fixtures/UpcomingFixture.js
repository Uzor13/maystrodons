import React, {useContext, useState, Fragment} from 'react';
import {DataContext} from "../../../context/Data/DataContext";
import {Link} from "react-router-dom";

const UpcomingFixture = () => {


    const {addUpcomingFixture, message, token} = useContext(DataContext)

    const [venue, setVenue] = useState("");
    const [homeTeam, setHomeTeam] = useState("");
    const [awayTeam, setAwayTeam] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [homeLogo, setHomeLogo] = useState("");
    const [awayLogo, setAwayLogo] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        addUpcomingFixture({
            venue,
            home_team: homeTeam,
            away_team: awayTeam,
            date,
            time,
            home_logo: homeLogo,
            away_logo: awayLogo,
        })
    }

    return (
        <Fragment>
            {token !== "" ? <div className="container">
                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <div className="card px-5 py-3" style={{width: "30rem"}}>
                            <h2 className="text-center mb-4 mt-3">Add Upcoming Fixtures</h2>
                            <form onSubmit={handleSubmit}>
                                {message ? <div className="alert alert-success" role="alert">
                                    {message}
                                </div> : null}
                                <div className="mb-3">
                                    <label htmlFor="venue" className="form-label">Venue</label>
                                    <input type="text" className="form-control" id="venue"
                                           onChange={(e) => setVenue(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="home_team" className="form-label">Home Team</label>
                                    <input type="text" className="form-control" id="home_team"
                                           onChange={(e) => setHomeTeam(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="away_team" className="form-label">Away Team</label>
                                    <input type="text" className="form-control" id="away_team"
                                           onChange={(e) => setAwayTeam(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="date"
                                           onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="time" className="form-label">Time</label>
                                    <input type="time" className="form-control" id="time"
                                           onChange={(e) => setTime(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="home_logo" className="form-label">Home Team Logo</label>
                                    <input type="text" className="form-control" id="home_logo"
                                           onChange={(e) => setHomeLogo(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="away_logo" className="form-label">Away Team Logo</label>
                                    <input type="text" className="form-control" id="away_logo"
                                           onChange={(e) => setAwayLogo(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Add Fixture</button>
                            </form>
                        </div>
                    </div>
                </div> :
                <h1 className="text-center mt-5"><Link to={`/admin/login`}>Please log in</Link></h1>
            }
        </Fragment>
    );
};

export default UpcomingFixture;
