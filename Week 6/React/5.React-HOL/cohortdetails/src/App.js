import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  return (
    <div>
      <h1>My Academy Cohort Dashboard</h1>
      <CohortDetails 
        name="React Bootcamp" 
        startDate="2025-06-01" 
        endDate="2025-07-15" 
        status="Ongoing" 
      />
      <CohortDetails 
        name="Python AI Track" 
        startDate="2025-04-01" 
        endDate="2025-05-30" 
        status="Completed" 
      />
    </div>
  );
}

export default App;
