import React from 'react';
import Logo from './../../../assets/img/MAYSTRODONS.svg'
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
                    <i className="fas fa-times" onClick={() => setShow(false)}/>
                </div>
            </div>
            <ul className="pop-up-nav__ul">
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">NEWS</a></li>
                <li><a href="/">FIXTURES</a></li>
                <li><a href="/">STATS</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
