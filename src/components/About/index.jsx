import React, { useState, useEffect } from 'react';
import { getDocument } from '../../firebase/collectionsFirebase';
import Card from '../Card';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDocument('slider', 'juVGgpVXeGVlEXv4ORH6').then(({ infoSlider }) => {
      setData(infoSlider);
    });
  }, []);

  return (
    <>
      {!data.length ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-wrap'>
          {data.map((element) => (
            <div>
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
