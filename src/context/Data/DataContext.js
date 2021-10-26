import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

export const DataContext = createContext()

const DataProvider = ({children}) => {

    const [playerData, setPlayerData] = useState([]);
    const [upcomingFixtures, setUpcomingFixtures] = useState([]);
    const [allUpcomingFixtures, setAllUpcomingFixtures] = useState([]);
    const [fixtures, setFixtures] = useState([]);
    const [allFixtures, setAllFixtures] = useState([]);
    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");

    const getPlayers = async () => {
        setLoading(true)
        await axios.get(`https://maystrodon-strapi.herokuapp.com/players`)
            .then(res => {
                setPlayerData(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const getUpcomingFixtures = async () => {
        setLoading(true)
        await axios.get(`https://maystrodon-strapi.herokuapp.com/upcoming-fixtures?_limit=3&_sort=id:DESC`)
            .then(res => {
                setUpcomingFixtures(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }

    const getAllUpcomingFixtures = async () => {
        setLoading(true)
        await axios.get(`https://maystrodon-strapi.herokuapp.com/upcoming-fixtures?_sort=id:DESC`)
            .then(res => {
                setAllUpcomingFixtures(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
    }

    const getFixtures = async () => {
        setLoading(true)
        await axios.get(`https://maystrodon-strapi.herokuapp.com/fixtures?_limit=1&_sort=id:DESC`)
            .then(res => {
                setFixtures(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const getAllFixtures = async () => {
        setLoading(true)
        await axios.get(`https://maystrodon-strapi.herokuapp.com/fixtures?_sort=id:DESC`)
            .then(res => {
                setAllFixtures(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    useEffect(() => {
        getPlayers()
        getUpcomingFixtures()
        getFixtures()
        getAllFixtures()
        getAllUpcomingFixtures()
    }, [])


    const addContact = async (data) => {
        setLoading(true)
        await axios.post(`https://maystrodon-strapi.herokuapp.com/contacts`, data)
            .then(res => {
                setMessage("Thanks for reaching out, we'll get back to you shortly")
            }).catch(err => {
                console.log("Error", err.response)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <DataContext.Provider
            value={{
                message,
                getPlayers,
                playerData,
                upcomingFixtures,
                fixtures,
                addContact,
                allFixtures,
                loading,
                allUpcomingFixtures
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
