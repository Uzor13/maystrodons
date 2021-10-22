import React from 'react'
import './App.css';
import AuthProvider from "./context/Auth/AuthContext";
import DataProvider from "./context/Data/DataContext";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Components
import Nav from "./components/Hero/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import News from "./components/News/News";
import Players from "./components/Players/Players";
import Fixtures from "./components/Fixtures/Fixtures";
import GameStats from "./components/Stats/GameStats";
import Footer from "./components/Footer/Footer";
import Login from "./components/Admin/Auth/Login";
import Register from "./components/Admin/Auth/Register";
import Dashboard from "./components/Admin/Dashboard";
import AddPlayer from "./components/Admin/Players/AddPlayer";
import UpcomingFixture from "./components/Admin/Fixtures/UpcomingFixture";
import Fixture from "./components/Admin/Fixtures/Fixture";
import Contact from "./components/Contact/Contact";

function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <div className="grid-container">
                                <Hero/>
                                <About/>
                                <News/>
                                <Players/>
                                <Fixtures/>
                                <GameStats/>
                                <Footer/>
                            </div>
                        </Route>
                        <Route component={Contact} path="/contact"/>
                    </Switch>
                </Router>
            </DataProvider>
        </AuthProvider>
    );
}

export default App;
