import React from 'react';
import CohortDetails from './Components/CohortDetails';
import Cohort from './Cohort';

// Sample data reused in the app and available for tests.
export const CohortData = [
  new Cohort('DELTA 2026', '05-Jan-2026', '05-Apr-2026', 'ongoing', 'Online')
];

function App() {
  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      {CohortData.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
