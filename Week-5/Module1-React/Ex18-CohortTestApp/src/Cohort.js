// Cohort class definition used by the CohortDetails component.
class Cohort {
  constructor(cohortCode, startDate, endDate, cohortStatus, format) {
    this.cohortCode = cohortCode;
    this.startDate = startDate;
    this.endDate = endDate;
    this.cohortStatus = cohortStatus;
    this.format = format;
  }
}

export default Cohort;
