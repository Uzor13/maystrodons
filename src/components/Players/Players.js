import React, {Fragment, useContext} from 'react';
import PlayerCards from "./PlayerCards";
import {DataContext} from "../../context/Data/DataContext";


const Players = () => {

    const {playerData} = useContext(DataContext)

    return (
        <Fragment>
            {playerData.length > 0 ?

                <div className="players-section">
                    <h1 className="title">MEET THE TEAM</h1>
                    <PlayerCards/>
                </div>
                : null
            }
        </Fragment>
    );
};

export default Players;
