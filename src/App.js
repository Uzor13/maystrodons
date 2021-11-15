import React from 'react'
import './App.css';
import AuthProvider from "./context/Auth/AuthContext";
import DataProvider from "./context/Data/DataContext";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//Components
import Nav from "./components/Hero/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import News from "./components/News/News";
import Players from "./components/Players/Players";
import Fixtures from "./components/Fixtures/Fixtures";
import GameStats from "./components/Stats/GameStats";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import FixturesPage from "./pages/Fixtures/FixturesPage";
import SchedulesPage from "./pages/Schedules/SchedulesPage";
import NewsPage from "./pages/News/NewsPage";
import NewsDetails from "./pages/News/NewsDetails";
import PlayerStats from "./pages/Stats/PlayerStats";
import TeamStats from "./pages/Stats/TeamStats";
import GameStatistics from "./pages/Stats/GameStatistics";

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
                                <Footer/>
                            </div>
                        </Route>
                        <Route component={Contact} path="/contact"/>
                        <Route component={FixturesPage} exact path="/fixtures" />
                        <Route component={SchedulesPage} exact path="/schedules" />
                        <Route component={NewsPage} exact path="/news"/>
                        <Route component={NewsDetails} path="/news/:id"/>
                        <Route component={PlayerStats} exact path="/stats"/>
                        <Route component={TeamStats} path="/stats/team"/>
                        <Route component={GameStatistics} path="/stats/game"/>

                    </Switch>
                </Router>
            </DataProvider>
        </AuthProvider>
    );
}

export default App;
