import React, {Fragment, useContext} from 'react';
import PlayerCards from "./PlayerCards";
import {DataContext} from "../../context/Data/DataContext";


const Players = () => {

    const {playersData} = useContext(DataContext)

    return (
        <Fragment>
            {playersData.length > 0 ?
                <div className="players-section">
                    <h1 className="title mb-5">MEET THE TEAM</h1>
                    <PlayerCards/>
                </div>
                : null
            }
        </Fragment>
    );
};

export default Players;
