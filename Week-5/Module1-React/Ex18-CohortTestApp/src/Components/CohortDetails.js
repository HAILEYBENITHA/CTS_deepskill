import React from 'react';
import Cohort from '../Cohort';

// CohortDetails: displays the details of a cohort passed via props.
function CohortDetails(props) {
  const cohort = props.cohort;
  const headingStyle = {
    color: cohort.cohortStatus === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className="box">
      <h3 style={headingStyle}>{cohort.cohortCode}</h3>
      <dl>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt>End Date</dt>
        <dd>{cohort.endDate}</dd>
        <dt>Status</dt>
        <dd>{cohort.cohortStatus}</dd>
        <dt>Format</dt>
        <dd>{cohort.format}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
