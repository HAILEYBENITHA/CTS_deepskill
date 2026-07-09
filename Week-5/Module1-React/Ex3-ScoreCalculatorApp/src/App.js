import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Hailey Benitha"
        school="St. Joseph's Matric Hr Sec School"
        total={475}
        goalScore={5}
      />
    </div>
  );
}

export default App;
