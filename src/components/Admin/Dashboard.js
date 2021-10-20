import React, {useContext} from 'react';
import {AuthContext} from "../../context/Auth/AuthContext";
import {Link} from "react-router-dom";

const Dashboard = ({history}) => {

    const {user, setToken} = useContext(AuthContext)

    const logout = () => {
        setToken("")
        history.push('/admin/login')
    }

    return (
        <>
            {user !== undefined ?
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center mt-5">
                            <div className="card px-5 py-3" style={{width: "auto"}}>
                                <div className="d-flex justify-content-between mb-4">
                                    <h1 className="text-capitalize">Welcome {user.username}</h1>
                                    <button className="btn btn-primary" onClick={logout}>Logout</button>
                                </div>
                                <ul className="list-unstyled">
                                    <li><Link className="fs-3 me-3" to={'/admin/add-player'}>Add a Player</Link></li>
                                    <li><Link className="fs-3 me-3" to={'/admin/game-stats'}>Add Game Stats</Link></li>
                                    <li><Link className="fs-3" to={'/admin/add-upcoming'}>Add Upcoming Fixture</Link>
                                    </li>
                                    <li><Link className="fs-3" to={'/admin/add-fixture'}>Add Played Fixture</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div> :
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center mt-5">
                            <div className="card px-5 py-3" style={{width: "32rem"}}>
                                <h1>Unauthorized User</h1>
                                <h1 className="fs-3 text-center">Please <Link to="/admin/login">Log in</Link></h1>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Dashboard;
