import React, { useState, useEffect } from 'react';
import { getServiceById } from '../../firebase/collectionsFirebase';
import Card from '../Card';

function About() {
  /*const data = [
    {
      id: 0,
      source:
        'https://res.cloudinary.com/mentalhealth/image/upload/v1651764965/sq0umlhyb3mxisysdafp.jpg',
      name: 'cristian',
      description: 'gerente',
    },
    {
      id: 1,
      source:
        'https://res.cloudinary.com/mentalhealth/image/upload/v1651765260/t5mubmgj9nsl2lrbtbon.jpg',
      name: 'carlos',
      description: 'gerente2',
    },
    {
      id: 2,
      source:
        'https://res.cloudinary.com/mentalhealth/image/upload/v1651604082/k4v180ykcradvmyzw8qr.jpg',
      name: 'diego',
      description: 'web',
    },
  ];
  console.log('data', data[0]);*/
  const [data, setData] = useState({});
  useEffect(() => {
    getServiceById('slider', 'juVGgpVXeGVlEXv4ORH6').then((infoSlider) =>
      setData(infoSlider)
    );
  }, []);
  return (
    <div className='flex justify-between'>
      {data.infoSlider.map((element) => (
        <Card
          source={element.avatar}
          name={element.name}
          description={element.description}
        />
      ))}
    </div>
  );
}

export default About;
