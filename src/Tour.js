import React, { useState } from 'react';

const Tour = (tourData) => {
  const [tour, setTour] = useState(tourData);
  const [readButtonText, setReadButtonText] = useState('read more');
  const [tourInfo, setTourInfo] = useState(tour.info.slice(0, 200) + '...');

  const changeTourInfo = () => {
    if (tourInfo.length > 300) {
      setTourInfo(tour.info.slice(0, 200) + '...');
      setReadButtonText('read more');
    } else {
      setTourInfo(tour.info);
      setReadButtonText('show less');
    }
  };

  return (
    <article className='single-tour'>
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className='tour-info'>
          <h4>{tour.name}</h4>
          <h4 className='tour-price'>{tour.price}</h4>
        </div>
        <p>
          {tourInfo}
          <button onClick={changeTourInfo}>{readButtonText}</button>
        </p>
        <button className='delete-btn'>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
