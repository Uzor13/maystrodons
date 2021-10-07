import React from 'react';

const Nav = () => {
    return (
        <nav className="pop-up-nav">
            <div className="outer-nav">
                <a href="/" className="nav-brand">
                    <img src="./../../../assets/img/MAYSTRODONS.svg" className="logo" alt=""/>
                        <h1>MAYSTRODONS</h1>
                </a>
                <div>
                    <i className="fas fa-times"/>
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
