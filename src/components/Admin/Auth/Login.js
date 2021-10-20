import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/Auth/AuthContext";

const Login = ({history}) => {

    const {loginUser, error, res} = useContext(AuthContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        loginUser({identifier: email, password})
        if (res.status === 200) {
            history.push('/admin/')
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center mt-5">
                    <div className="card px-5 py-3" style={{width: "30rem"}}>
                        <h1 className="text-center">Please sign in</h1>
                        <form onSubmit={handleSubmit}>
                            {error ? <div className="alert alert-danger" role="alert">
                                {error}
                            </div> : null}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="mt-3 mb-3">
                                <p>Don't have an account, <Link to={'/admin/register'}>click here</Link> to create one
                                </p>

                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;
