import React from 'react';
import Logo from './../../../assets/img/MAYSTRODONS.svg'

const Header = () => {
    return (
        <header>
            <div className="outer-nav">
                <a href="/" className="nav-brand">
                    <img src={Logo} className="logo" alt=""/>
                        <h1>MAYSTRODONS</h1>
                </a>
                <div>
                    <i className="fas fa-bars"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
