import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Akshara" school="Kongu Engineering College" total={470} goal={5} />
    </div>
  );
}

export default App;
