import React from 'react';
import EmployeeCard from './EmployeeCard';

// EmployeesList: the theme name is NOT passed explicitly to its child.
const employees = [
  { id: 1, name: 'Aarav Sharma', role: 'Developer' },
  { id: 2, name: 'Diya Nair', role: 'Designer' },
  { id: 3, name: 'Kabir Singh', role: 'Tester' }
];

function EmployeesList() {
  return (
    <div>
      <h2>Employees List</h2>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeesList;
