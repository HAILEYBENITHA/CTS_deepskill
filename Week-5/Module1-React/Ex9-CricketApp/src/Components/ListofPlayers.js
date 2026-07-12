import React from 'react';

// ListofPlayers: declare an array with 11 players storing name and score
// using the ES6 map feature, then filter players with scores below 70
// using arrow functions.
function ListofPlayers() {
  const players = [
    { name: 'Rohit', score: 85 },
    { name: 'Virat', score: 92 },
    { name: 'Shikhar', score: 65 },
    { name: 'KL Rahul', score: 78 },
    { name: 'Hardik', score: 55 },
    { name: 'Rishabh', score: 88 },
    { name: 'Ravindra', score: 41 },
    { name: 'Bhuvneshwar', score: 72 },
    { name: 'Jasprit', score: 60 },
    { name: 'Yuzvendra', score: 95 },
    { name: 'Mohammed', score: 68 }
  ];

  // map() feature of ES6 - render each player
  const allPlayers = players.map((player) => (
    <tr key={player.name}>
      <td>{player.name}</td>
      <td>{player.score}</td>
    </tr>
  ));

  // arrow functions of ES6 - filter players with scores below 70
  const lowScorers = players.filter((player) => player.score < 70);

  const lowScoreRows = lowScorers.map((player) => (
    <tr key={player.name}>
      <td>{player.name}</td>
      <td>{player.score}</td>
    </tr>
  ));

  return (
    <div>
      <h1>List of Players (11)</h1>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{allPlayers}</tbody>
      </table>

      <h2>Players with score below 70</h2>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{lowScoreRows}</tbody>
      </table>
    </div>
  );
}

export default ListofPlayers;
