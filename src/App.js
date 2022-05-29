import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tour, setTour] = useState('default data');

  const getTours = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.message);
      const fetchData = await response.json();
      setTour(fetchData);
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
  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='underline'></div>
        </div>
        <Tours data={tour} />
      </section>
    </main>
  );
}

export default App;
