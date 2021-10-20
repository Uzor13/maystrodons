import React, {createContext, useState} from 'react';
import axios from "axios";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const [res, setRes] = useState("");

    const registerUser = async (data) => {
       await axios
            .post('http://localhost:1337/auth/local/register', data)
            .then(response => {
                setUser(response.data.user)
                setRes(response)
                console.log('User profile', response.data.user);
                setToken(response.data.jwt)
                console.log('User token', response.data.jwt);

            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                setError(error.response.data.message[0].messages[0].message)
            });
    }

    const loginUser = async (data) => {
        await axios
            .post('http://localhost:1337/auth/local', data)
            .then(response => {
                setUser(response.data.user)
                setRes(response)
                console.log('User profile', response.data.user);
                setToken(response.data.jwt)
                console.log('User token', response.data.jwt);

            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                setError(error.response.data.message[0].messages[0].message)
            });
    }

    return (
        <AuthContext.Provider value={{registerUser, user, token, error, res, loginUser, setToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
