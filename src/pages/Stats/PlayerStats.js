import React, {Fragment, useContext, useState} from 'react';
import {Helmet} from "react-helmet";
import Nav from "../../components/Hero/Nav/Nav";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/MAYSTRODONS.svg";
import Loader from "react-loader-spinner";
import {DataContext} from "../../context/Data/DataContext";
import styled from 'styled-components'


const Table = styled.div`
  padding: 2rem;
  color: var(--light);
`

const Heading = styled.h1`
    padding-top: 6rem;
    padding-left: 2rem;
`

const PlayerStats = () => {

    const {loading, playersData} = useContext(DataContext)
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
                <title>Maystrodons - Player Stats</title>
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
            <Heading>2021-22 Player Statistics</Heading>
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
                    {playersData.map(player => (
                        <tbody key={player.id}>
                            <tr>
                                <td className="text-light d-flex flex-column g-2">
                                    <img src={player.image} alt=""/>
                                    {player.last_name} {" "} {player.first_name}
                                    {player.player_number}
                                    {player.position}
                                </td>
                                { player.player_stats.map(stat => (
                                    <Fragment key={stat.id}>
                                        <td className="text-light">{stat.g || "-"}</td>
                                        <td className="text-light">{stat.pts || "-"}</td>
                                        <td className="text-light">{stat.fg || "-"}</td>
                                        <td className="text-light">{stat.fg_percent || "-"}%</td>
                                        <td className="text-light">{stat.three_percent || "-"}%</td>
                                        <td className="text-light">{stat.ft_percent || "-"}%</td>
                                        <td className="text-light">{stat.oreb || "-"}</td>
                                        <td className="text-light">{stat.dreb || "-"}</td>
                                        <td className="text-light">{stat.reb || "-"}</td>
                                        <td className="text-light">{stat.ast || "-"}</td>
                                        <td className="text-light">{stat.stl || "-"}</td>
                                        <td className="text-light">{stat.to || "-"}</td>
                                        <td className="text-light">{stat.pf || "-"}</td>
                                    </Fragment>

                                ))}
                            </tr>
                        </tbody>
                    ))}
                </table>
            </Table>
        </Fragment>

    );
};

export default PlayerStats;
