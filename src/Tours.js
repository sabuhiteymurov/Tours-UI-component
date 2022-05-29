import React from 'react';
import Tour from './Tour';

const Tours = ({ data, deleteTour }) => {
  return (
    <div>
      {data.map((tourData) => (
        <Tour key={tourData.id} {...tourData} deleteTour={deleteTour} />
      ))}
    </div>
  );
};

export default Tours;
