import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    {
      cohortCode: 'DELTA 2026',
      startDate: '05-Jan-2026',
      endDate: '05-Apr-2026',
      cohortStatus: 'ongoing',
      format: 'Online'
    },
    {
      cohortCode: 'GAMMA 2025',
      startDate: '10-Sep-2025',
      endDate: '10-Dec-2025',
      cohortStatus: 'completed',
      format: 'Classroom'
    }
  ];

  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
