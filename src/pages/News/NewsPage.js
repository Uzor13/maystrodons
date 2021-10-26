import React, {Fragment, useContext, useState} from 'react';
import {DataContext} from "../../context/Data/DataContext";
import {Helmet} from "react-helmet";
import Loader from "react-loader-spinner";
import Nav from "../../components/Hero/Nav/Nav";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/MAYSTRODONS.svg";
import styled from "styled-components";


const Heading = styled.h1`
    padding-top: 6rem;
    padding-left: 2rem;
`

const News = styled.div`
  padding: 2rem 2rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

const NewsPage = () => {

    const {allNews, loading} = useContext(DataContext)
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
                <meta charSet="utf-8"/>
                <title>Maystrodons - News</title>
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
                <Heading>NEWS</Heading>
            </Fragment>
            <News>
                {allNews && allNews.map(data => (
                    <Fragment>
                        <div className="news-card">
                            <img src={data.image_url} alt=""/>
                            <div className="news-card-text">
                                <h2>{data.title}</h2>
                                <Link to="/">Read More</Link>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </News>

        </Fragment>
    );
};

export default NewsPage;
