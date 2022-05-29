import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const data = props.data;
  return (
    <div>
      {data.map((tourData) => (
        <Tour key={tourData.id} {...tourData} />
      ))}
    </div>
  );
};

export default Tours;
