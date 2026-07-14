import React from 'react';
import ThemeContext from '../ThemeContext';
import EmployeesList from './Components/EmployeesList';

// App: defines the ThemeContext.Provider wrapping the entire JSX and assigns
// the value from the component state. The theme name is no longer passed as
// props to EmployeeList.
function App() {
  const theme = 'dark';

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>Employee Management Application</h1>
        {/* theme name is NOT passed as props */}
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
