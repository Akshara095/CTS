import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: "Rohit", score: 82 },
    { name: "Virat", score: 45 },
    { name: "Gill", score: 90 },
    { name: "Rahul", score: 62 },
    { name: "Hardik", score: 75 },
    { name: "Jadeja", score: 38 },
    { name: "Pant", score: 68 },
    { name: "Bumrah", score: 50 },
    { name: "Siraj", score: 33 },
    { name: "Shami", score: 49 },
    { name: "Kuldeep", score: 72 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with Score below 70</h3>
      <ul>
        {below70.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
