import React, {useState} from 'react';
import Logo from './../../../assets/img/MAYSTRODONS.svg'
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom";

const Header = () => {

    const [show, setShow] = useState(false);

    return (
        <>
        <Nav show={show} setShow={setShow}/>
        <header>
            <div className="outer-nav">
                <a href="/" className="nav-brand">
                    <img src={Logo} className="logo" alt=""/>
                        <h1 style={{fontSize: "20px"}}>MAYSTRODONS</h1>
                </a>
                <div className="cta-nav">
                    <Link to={`/contact`}>
                        <button className="cta-btn">Get in Touch</button>
                    </Link>
                    <i className="fas fa-bars" onClick={() => setShow(true)}/>
                </div>
            </div>
        </header>
            </>
    );
};

export default Header;
