import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/Auth/AuthContext";
import axios from "axios";

const Register = ({history}) => {

    const {registerUser, error} = useContext(AuthContext)

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        registerUser({username, email, password})
        history.push('/admin/')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center mt-5">
                    <div className="card px-5 py-3" style={{width: "30rem"}}>
                        <h1 className="text-center">Register to Start</h1>
                        <form onSubmit={handleSubmit}>
                            {error ? <div className="alert alert-danger" role="alert">
                                {error}
                            </div> : null}
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username"
                                       aria-describedby="user" onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="mt-3 mb-3">
                                <p>Have an account, <Link to={'/admin/login'}> click here</Link> to sign in</p>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;
