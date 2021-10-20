import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {AuthContext} from "../Auth/AuthContext";

export const DataContext = createContext()

const DataProvider = ({children}) => {

    const {token} = useContext(AuthContext)

    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };


    const [playerData, setPlayerData] = useState([]);
    const [upcomingFixtures, setUpcomingFixtures] = useState([]);
    const [fixtures, setFixtures] = useState([]);

    const [message, setMessage] = useState("");

    const getPlayers = async () => {
        await axios.get(`http://localhost:1337/players`)
            .then(res => {
                setPlayerData(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getUpcomingFixtures = async () => {
        await axios.get(`http://localhost:1337/upcoming-fixtures?_limit=1&_sort=id:DESC`)
            .then(res => {
                setUpcomingFixtures(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getFixtures = async () => {
        await axios.get(`http://localhost:1337/fixtures?_limit=3&_sort=id:DESC`)
            .then(res => {
                setFixtures(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    useEffect(() => {
        getPlayers()
        getUpcomingFixtures()
        getFixtures()
    }, [])

    const addPlayer = async (data) => {
        await axios.post(`http://localhost:1337/players`, data, config)
            .then(res => {
                setMessage("Player Added Successfully")
            }).catch(err => {
                console.log("Error", err.response)
            })
    }
    const addUpcomingFixture = async (data) => {
        await axios.post(`http://localhost:1337/upcoming-fixtures`, data, config)
            .then(res => {
                setMessage("Upcoming Fixture Added Successfully")
            }).catch(err => {
                console.log("Error", err.response)
            })
    }
    const addFixture = async (data) => {
        await axios.post(`http://localhost:1337/fixtures`, data, config)
            .then(res => {
                setMessage("Fixture Added Successfully")
            }).catch(err => {
                console.log("Error", err.response)
            })
    }

    return (
        <DataContext.Provider
            value={{
                message,
                addPlayer,
                getPlayers,
                playerData,
                addUpcomingFixture,
                upcomingFixtures,
                addFixture,
                fixtures
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
