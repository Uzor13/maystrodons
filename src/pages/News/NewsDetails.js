import React, {Fragment, useState, useContext, useEffect} from 'react';
import {Helmet} from "react-helmet";
import Nav from "../../components/Hero/Nav/Nav";
import {Link} from "react-router-dom";
import Logo from "../../assets/img/MAYSTRODONS.svg";
import NewsDetail from "./NewsDetail";
import {DataContext} from "../../context/Data/DataContext";
import styled from 'styled-components'
import Loader from "react-loader-spinner";

const Container = styled.div`
  padding: 6rem 0 2rem 2rem;
`

const NewsDetails = ({match}) => {

    const {getSingleNews, newsDetail, loading} = useContext(DataContext)

    useEffect(() => {
        return () => {
            getSingleNews(match.params.id)
        };
    }, [match.params.id]);


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
            <Container>
                {newsDetail && newsDetail.map(news => (
                    <NewsDetail data={news}/>
                ))}
            </Container>


        </Fragment>
    );
};

export default NewsDetails;
