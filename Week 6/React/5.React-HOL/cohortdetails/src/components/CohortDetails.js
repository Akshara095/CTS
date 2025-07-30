import React from 'react';
import styles from '../styles/CohortDetails.module.css';

function CohortDetails({ name, startDate, endDate, status }) {
  const statusStyle = {
    color: status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <dl>
        <dt>Cohort Name:</dt>
        <dd>{name}</dd>

        <dt>Start Date:</dt>
        <dd>{startDate}</dd>

        <dt>End Date:</dt>
        <dd>{endDate}</dd>

        <dt>Status:</dt>
        <dd style={statusStyle}>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
