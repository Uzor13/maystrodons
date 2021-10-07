import React from 'react';
import SpinnerImg from './../../assets/img/curve.svg'

const Spinner = () => {
    return (
        <div className="hero-content__spinner">
            <img src={SpinnerImg} alt=""/>
                <i className="fas fa-basketball-ball"/>
        </div>
    );
};

export default Spinner;
