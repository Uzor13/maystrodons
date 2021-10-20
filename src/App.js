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
                        <Route path="/admin/login" component={Login} exact/>
                        <Route path="/admin/register" component={Register}/>
                        <Route path="/admin/" exact component={Dashboard}/>
                        <Route path="/admin/add-player" component={AddPlayer}/>
                        <Route path="/admin/add-upcoming" component={UpcomingFixture}/>
                        <Route path="/admin/add-fixture" component={Fixture}/>
                    </Switch>
                </Router>
            </DataProvider>
        </AuthProvider>
    );
}

export default App;
