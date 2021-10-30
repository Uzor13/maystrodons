import React from 'react';
import Logo from './../../../assets/img/MAYSTRODONS.svg'
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom'

const Nav = ({show, setShow}) => {

    if (!show) {
        return null
    }


    return (
        <nav className="pop-up-nav">
            <div className="outer-nav">
                <a href="/" className="nav-brand">
                    <img src={Logo} className="logo" alt=""/>
                        <h1 style={{fontSize: "20px"}}>MAYSTRODONS</h1>
                </a>
                <div>
                    <i className="fas fa-times me-5" onClick={() => setShow(false)}/>
                </div>
            </div>
            <ul className="pop-up-nav__ul">
                <li><Link smooth to="/">HOME</Link></li>
                <li><HashLink smooth to="/#about">ABOUT</HashLink></li>
                <li><Link to="/news">NEWS</Link></li>
                <li><Link to="/fixtures">FIXTURES</Link></li>
                <li><Link to="/schedules">SCHEDULES</Link></li>
                <li><Link to="/stats">STATS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
