import React, { useState, useEffect } from 'react';
import { getCollection } from '../../firebase/collectionsFirebase';
import Card from '../Card';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCollection('card').then((card) => {
      setData(card);
    });
  }, []);

  return (
    <>
      {!data.length ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className='text-5xl bg-clip-text text-transparent bg-gradient-to-r from-stone-500 to-lime-500 font-bold text-center py-5'>
            NUESTROS PROYECTOS
          </div>
          <div className='flex flex-wrap'>
            {data.map((element) => (
              <div class='carousel carousel-center rounded-box'>
                <Card
                  source={element.avatar}
                  name={element.name}
                  description={element.description}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default About;
