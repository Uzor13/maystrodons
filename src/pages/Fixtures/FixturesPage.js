import React, {Fragment, useContext, useState} from 'react';
import Loader from "react-loader-spinner";
import {DataContext} from "../../context/Data/DataContext";
import {Helmet} from "react-helmet";
import Nav from "../../components/Hero/Nav/Nav";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/MAYSTRODONS.svg";
import styled from 'styled-components'


const Fixtures = styled.div`
  padding: 2rem 2rem 0 2rem;
`

const Heading = styled.h1`
    padding-top: 6rem;
    padding-left: 2rem;
`

const Fixture = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background: var(--accent-dark);
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  border-radius: .3rem;
  margin-bottom: 1rem;
  font-size: 1.15rem;
  transition: .3s ease-in;
  &:hover {
    transform: translateY(-5px);
  }
`

const Score = styled.div`
  display: flex;
  background: var(--dark);
  align-items: center;
  justify-content: space-around;
  width: 90px;
  border-radius: .5rem;
  height: 40px;
`

const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Venue = styled.div`
  display: flex;
  gap: .6rem;
  align-items: center;
`

const Img = styled.img`
  width: 60px;
`

const FixturesPage = () => {

    const {allFixtures, loading} = useContext(DataContext)
    const [show, setShow] = useState(false);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>

        );
    }

    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Maystrodons - Fixtures</title>
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
            <Fragment>
                <Heading>FIXTURES</Heading>
            </Fragment>
            <Fixtures>
                {allFixtures.length > 0 ?
                    <div className="">
                        {allFixtures.map(fixture => (
                            <Fragment>
                                <h3>{fixture.date}</h3>
                                <Fixture>
                                    <Team>
                                        <p>{fixture.home_team}</p>
                                        <Img src={fixture.home_logo} alt=""/>
                                    </Team>
                                    <Score>
                                        <p>{fixture.homeTeam_Score}</p>
                                        <p>{fixture.awayTeam_score}</p>
                                    </Score>
                                    <Team>
                                        <Img src={fixture.away_logo} alt=""/>
                                        <p>{fixture.away_team}</p>
                                    </Team>
                                    <Venue>
                                        <i className="fas fa-map-marker"/>
                                        <p>{fixture.venue}</p>
                                    </Venue>
                                </Fixture>
                            </Fragment>
                        ))}
                    </div> :
                    <p>No data available</p>
                }
            </Fixtures>

        </Fragment>
    );
};

export default FixturesPage;
