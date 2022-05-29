import React, { useState } from 'react';

const Tour = (tourData) => {
  const [readButtonText, setReadButtonText] = useState('read more');
  const [tour, setTour] = useState(tourData);

  const changeTourInfo = () => {};

  return (
    <article className='single-tour'>
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className='tour-info'>
          <h4>{tour.name}</h4>
          <h4 className='tour-price'>{tour.price}</h4>
        </div>
        <p>
          {tour.info} <button onClick={changeTourInfo}>{readButtonText}</button>
        </p>
        <button className='delete-btn'>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
