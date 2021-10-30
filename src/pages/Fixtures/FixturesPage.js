import React, {Fragment, useContext, useState} from 'react';
import Loader from "react-loader-spinner";
import {DataContext} from "../../context/Data/DataContext";
import {Helmet} from "react-helmet";
import Nav from "../../components/Hero/Nav/Nav";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/MAYSTRODONS.svg";
import styled from 'styled-components'
import {motion} from "framer-motion";


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
  height: 120px;
  background: #D1D5DB;
  align-items: center;
  border-radius: .1rem;
  margin-bottom: 1rem;
  font-size: 1.15rem;
  transition: .3s ease-in;
  color: var(--dark);
  justify-content: space-between;
  &:hover {
    transform: translateY(-5px);
  }
`

const Middle = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
`

const Box = styled.div`
  width: 230px;
  height: 100%;
  background: var(--accent-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--light);
`

const Area = styled.div`
  border-radius: .2rem;
  padding: .1rem 1.3rem;
  margin-top: .5rem;
  background: ${props => props.home ? "green" : "#EF4444"};
`
const Score = styled.h2`
  display: inline;
  font-size: 1.3rem;
  font-weight: bold;
`

const Img = styled.img`
  width: 80px;
`

const Button = styled.button`
  background: var(--primary);
  padding: .3rem 1.4rem;
  color: var(--light);
  outline: none;
  border: none;
  border-radius: .3rem;
  margin-right: 2rem;
`

const FixturesPage = () => {

    const {allFixtures, loading} = useContext(DataContext)
    const [show, setShow] = useState(false);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{
                height: '100%'
            }}>
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
                <meta charSet="utf-8"/>
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
                <Heading>PAST GAMES</Heading>
                <p className="fs-3" style={{paddingLeft: "2rem"}}>Regular Season</p>
            </Fragment>
            <Fixtures>
                {allFixtures.length > 0 ?
                    <div className="">
                        {allFixtures.map(fixture => (
                            <Fragment>
                                <Fixture as={motion.div} transition={{duration: 0.3}}
                                         whileTap={{scale: 0.9}}>
                                    <Box>
                                        <p style={{fontWeight: "bold", fontSize: "1.4rem"}}>{fixture.date}</p>
                                        <p>{fixture.time}</p>
                                        {fixture.home ? <Area primary>Home</Area> : <Area>Away</Area>}
                                    </Box>
                                    <Middle>
                                        <div>
                                            {fixture.home ? <img src={fixture.away_logo} alt={fixture.away_team}/>
                                                : <Img src={fixture.home_logo} alt={fixture.home_team}/>
                                            }
                                        </div>
                                        <div>

                                            {fixture.home ? <p className="fixture-vs">VS {" "}{fixture.away_team}</p> :
                                                <p className="fixture-vs">VS {" "}{fixture.home_team}</p>}
                                            <p>{fixture.venue}</p>
                                            <p>{fixture.home ? fixture.homeTeam_Score > fixture.awayTeam_score ?
                                                <span className="fs-3 text-success">W</span> :
                                                <span>L</span> : fixture.awayTeam_score > fixture.homeTeam_Score ?
                                                <span className="fs-4 text-success">W</span> :
                                                <span>L</span> }{" "}
                                                <Score>{fixture.homeTeam_score}{" "}- {" "} {fixture.awayTeam_score}</Score>

                                            </p>
                                        </div>
                                    </Middle>
                                    <div style={{display: "flex", justifySelf: "flex-end"}}>
                                        <Button>Stats</Button>
                                    </div>
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
