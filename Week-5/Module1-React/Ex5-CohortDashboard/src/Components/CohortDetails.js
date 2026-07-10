import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { cohortCode, startDate, endDate, cohortStatus, format } = props.cohort;

  // Use green font for ongoing cohorts and blue for all other scenarios
  const headingStyle = {
    color: cohortStatus === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{cohortCode}</h3>
      <dl>
        <dt>Start Date</dt>
        <dd>{startDate}</dd>
        <dt>End Date</dt>
        <dd>{endDate}</dd>
        <dt>Status</dt>
        <dd>{cohortStatus}</dd>
        <dt>Format</dt>
        <dd>{format}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
