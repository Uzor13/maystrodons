import React, {Fragment, useContext, useState} from 'react';
import {DataContext} from "../../../context/Data/DataContext";
import {AuthContext} from "../../../context/Auth/AuthContext";
import {Link} from "react-router-dom";

const AddPlayer = () => {

    const {addPlayer, message} = useContext(DataContext)
    const {token} = useContext(AuthContext)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [position, setPosition] = useState("");
    const [height, setHeight] = useState("");
    const [homeTown, setHomeTown] = useState("");
    const [image, setImage] = useState();

    const handleSubmit = e => {
        e.preventDefault()
        addPlayer({
            first_name: firstName,
            last_name: lastName,
            email,
            player_number: number,
            age,
            gender,
            height,
            hometown: homeTown,
            image,
            position
        })
    }

    return (
        <Fragment>
            {token !== "" ? <div className="container">
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <div className="card px-5 py-3" style={{width: "30rem"}}>
                        <h1 className="text-center">Add Player</h1>
                        <form onSubmit={handleSubmit}>
                            {message ? <div className="alert alert-success" role="alert">
                                {message}
                            </div> : null}
                            <div className="mb-3">
                                <label htmlFor="first_name" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="first_name"
                                       onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="last_name"
                                       onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email"
                                       onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Player Number</label>
                                <input type="number" className="form-control" id="number"
                                       onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input type="number" className="form-control" id="age"
                                       onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="position" className="form-label">Player Position</label>
                                <input type="text" className="form-control" id="position"
                                       onChange={(e) => setPosition(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <input type="text" className="form-control" id="gender"
                                       onChange={(e) => setGender(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="height" className="form-label">Height</label>
                                <input type="text" className="form-control" id="height"
                                       onChange={(e) => setHeight(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="home_town" className="form-label">Home Town</label>
                                <input type="text" className="form-control" id="home_town"
                                       onChange={(e) => setHomeTown(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input type="file" className="form-control" id="image"
                                       onChange={(e) => console.log(e.target.files[0].path)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Add Player</button>
                        </form>
                    </div>
                </div>
            </div> :
                <h1 className="text-center mt-5"><Link to={`/admin/login`}>Please log in</Link></h1>
            }
        </Fragment>
    );
};

export default AddPlayer;
