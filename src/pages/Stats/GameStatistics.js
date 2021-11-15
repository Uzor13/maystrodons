import React, {Fragment, useState} from 'react';
import {Helmet} from "react-helmet";
import Nav from "../../components/Hero/Nav/Nav";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/MAYSTRODONS.svg";
import styled from "styled-components";

const Table = styled.div`
  padding: 2rem;
  color: var(--light);
`

const Heading = styled.h1`
    padding-top: 6rem;
    padding-left: 2rem;
`


const GameStatistics = () => {

    const [show, setShow] = useState(false);

    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Maystrodons - Game Stats</title>
            </Helmet>
            <>
                <Nav show={show} setShow={setShow}/>
                <header>
                    <div className="outer-nav">
                        <Link to="/" className="nav-brand">
                            <img src={Logo} className="logo" alt=""/>
                            <h1 style={{fontSize: "20px"}}>MAYSTRODONS</h1>
                        </Link>
                        <div className="cta-nav">
                            <i className="fas fa-bars" onClick={() => setShow(true)}/>
                        </div>
                    </div>
                </header>
            </>
            <Heading>2021-22 Game Statistics</Heading>
            <Table className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead style={{background: "var(--accent-dark)"}}>
                    <tr>
                        <th>Player</th>
                        <th>G</th>
                        <th>PTS</th>
                        <th>FG</th>
                        <th>FG%</th>
                        <th>3P%</th>
                        <th>FT%</th>
                        <th>OREB</th>
                        <th>DREB</th>
                        <th>REB</th>
                        <th>AST</th>
                        <th>STL</th>
                        <th>TO</th>
                        <th>PF</th>
                    </tr>
                    </thead>
                </table>
            </Table>
        </Fragment>
    );
};

export default GameStatistics;
