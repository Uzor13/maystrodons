import React, {Fragment, useContext, useState} from 'react';
import styled from "styled-components";
import {DataContext} from "../../context/Data/DataContext";
import Loader from "react-loader-spinner";
import {Helmet} from "react-helmet";
import Nav from "../../components/Hero/Nav/Nav";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/MAYSTRODONS.svg";

const Table = styled.div`
  padding: 6rem 2rem 0 2rem;
`

const TeamStats = () => {

    const {loading} = useContext(DataContext)
    const [show, setShow] = useState(false);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>

        );
    }


    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Maystrodons - Team Stats</title>
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
            <Table className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead style={{background: "var(--accent-dark)"}}>
                    <tr>
                        <th>PLAYER</th>
                        <th>G</th>
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

export default TeamStats;

