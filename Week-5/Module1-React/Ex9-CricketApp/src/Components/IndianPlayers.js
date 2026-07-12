import React from 'react';

// IndianPlayers: display Odd Team Players and Even Team Players using the
// Destructuring features of ES6. Declare two arrays (T20players and
// RanjiTrophyplayers), merge them with the spread/merge feature of ES6 and
// display them.
function IndianPlayers() {
  const t20Players = ['Rohit', 'Virat', 'KL Rahul', 'Hardik', 'Jasprit'];
  const ranjiTrophyPlayers = ['Mayank', 'Pujara', 'Rahane', 'Vihari', 'Siraj'];

  // Merge the two arrays using the spread (merge) feature of ES6
  const mergedPlayers = [...t20Players, ...ranjiTrophyPlayers];

  // Destructuring feature of ES6 - split into odd and even indexed players
  const oddTeam = mergedPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = mergedPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h1>Indian Players</h1>

      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Merged Team (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
