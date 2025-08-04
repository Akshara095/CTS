import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Rohit', 'Gill', 'Rahul', 'Jadeja', 'Siraj'];
  const evenTeam = ['Virat', 'Hardik', 'Pant', 'Bumrah', 'Shami', 'Kuldeep'];

  // Destructuring
  const [p1, p2, p3, p4, p5] = oddTeam;
  const [q1, q2, q3, q4, q5, q6] = evenTeam;

  // Merge arrays using spread operator
  const T20players = ['Surya', 'Tilak', 'Arshdeep'];
  const RanjiTrophy = ['Jaiswal', 'Mukesh'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
        <li>{p4}</li>
        <li>{p5}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{q1}</li>
        <li>{q2}</li>
        <li>{q3}</li>
        <li>{q4}</li>
        <li>{q5}</li>
        <li>{q6}</li>
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
