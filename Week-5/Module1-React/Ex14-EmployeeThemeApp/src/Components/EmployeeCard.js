import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

// EmployeeCard: retrieve the context value with useContext() and use it as the
// className for the buttons.
function EmployeeCard(props) {
  const theme = useContext(ThemeContext);

  return (
    <div className="card">
      <h3>{props.employee.name}</h3>
      <p>{props.employee.role}</p>
      <button className={theme}>Edit</button>
      <button className={theme}>Delete</button>
    </div>
  );
}

export default EmployeeCard;
