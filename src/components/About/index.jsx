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
      )}
    </>
  );
}

export default About;
