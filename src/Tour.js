import React, { useState } from 'react';

const Tour = ({ id, image, name, price, info, deleteTour }) => {
  const [readButtonText, setReadButtonText] = useState('read more');
  const [tourInfo, setTourInfo] = useState(info.slice(0, 200) + '...');

  const changeTourInfo = () => {
    if (tourInfo.length > 300) {
      setTourInfo(info.slice(0, 200) + '...');
      setReadButtonText('read more');
    } else {
      setTourInfo(info);
      setReadButtonText('show less');
    }
  };

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4 className='tourName'>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {tourInfo}
          <button onClick={changeTourInfo}>{readButtonText}</button>
        </p>
        <button className='delete-btn' onClick={deleteTour.bind(null, id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
