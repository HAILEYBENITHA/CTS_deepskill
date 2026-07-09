import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const average = props.total / props.goalScore;

  return (
    <div className="main">
      <h1>Student Score Details</h1>
      <div className="score">
        <p>Name of the Student: {props.name}</p>
        <p>School of the Student: {props.school}</p>
        <p>Total marks scored: {props.total}</p>
        <p>Goal Score: {props.goalScore}</p>
        <h2>Average Score of the Student is: {average}</h2>
      </div>
    </div>
  );
}

export default CalculateScore;
