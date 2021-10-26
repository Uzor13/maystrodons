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
                        <Route component={FixturesPage} path="/fixtures" />
                        <Route component={SchedulesPage} path="/schedules" />
                        <Route component={NewsPage} path="/news"/>
                    </Switch>
                </Router>
            </DataProvider>
        </AuthProvider>
    );
}

export default App;
