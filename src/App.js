import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState('default data');

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getTours = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.message);
      const fetchData = await response.json();
      setTours(fetchData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      console.error(err);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <h2>Something went wrong💥💥</h2>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={getTours}>
            Refresh tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='underline'></div>
        </div>
        <Tours data={tours} deleteTour={deleteTour} />
      </section>
    </main>
  );
}

export default App;
