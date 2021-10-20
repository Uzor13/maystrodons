import React from 'react';

const GameStats = () => {
    return (
        <section className="stats-section">
            <h1 className="title">GAME STATS</h1>
            <div className="table-responsive">
                <table className="table table-bordered table-striped bg-danger">
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>MIN</th>
                        <th>FGM</th>
                        <th>FGA</th>
                        <th>FG%</th>
                        <th>3PM</th>
                        <th>3PA</th>
                        <th>3P%</th>
                        <th>FTM</th>
                        <th>FTA</th>
                        <th>FT%</th>
                        <th>OREB</th>
                        <th>DREB</th>
                        <th>REB</th>
                        <th>AST</th>
                        <th>STL</th>
                        <th>TO</th>
                        <th>PF</th>
                        <th>PTS</th>
                        <th>+/-</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>I. Okoro</td>
                        <td>24:16</td>
                        <td>3</td>
                        <td>8</td>
                        <td>37.5</td>
                        <td>1</td>
                        <td>4</td>
                        <td>25.0</td>
                        <td>5</td>
                        <td>8</td>
                        <td>62.5</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>3</td>
                        <td>1</td>
                        <td>5</td>
                        <td>12</td>
                        <td>1</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default GameStats;
