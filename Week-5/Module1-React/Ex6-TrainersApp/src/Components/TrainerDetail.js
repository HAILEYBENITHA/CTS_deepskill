import React from 'react';
import { useParams } from 'react-router-dom';
import TrainersMock from '../TrainersMock';

function TrainerDetail() {
  // Retrieve the id parameter from the URL
  const { id } = useParams();
  const trainer = TrainersMock.find(
    (t) => t.trainerId === parseInt(id, 10)
  );

  if (!trainer) {
    return <h2>Trainer not found</h2>;
  }

  return (
    <div>
      <h1>Trainer Details</h1>
      <dl>
        <dt>Trainer ID</dt>
        <dd>{trainer.trainerId}</dd>
        <dt>Name</dt>
        <dd>{trainer.name}</dd>
        <dt>Email</dt>
        <dd>{trainer.email}</dd>
        <dt>Phone</dt>
        <dd>{trainer.phone}</dd>
        <dt>Technology</dt>
        <dd>{trainer.technology}</dd>
        <dt>Skills</dt>
        <dd>{trainer.skills.join(', ')}</dd>
      </dl>
    </div>
  );
}

export default TrainerDetail;
