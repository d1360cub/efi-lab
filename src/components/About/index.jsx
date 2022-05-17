import React from 'react';

function About() {
  return (
    <>
      <div className='card w-90 shadow-xl'>
        <figure>
          <img
            src='https://res.cloudinary.com/mentalhealth/image/upload/v1651764965/sq0umlhyb3mxisysdafp.jpg'
            alt='Album'
            className='object-scale-down h-48 w-96'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title justify-center'>Cristian Osorio</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Listen</button>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure>
          <img
            src='https://res.cloudinary.com/mentalhealth/image/upload/v1651765260/t5mubmgj9nsl2lrbtbon.jpg'
            alt='Album'
            className='object-cover h-48 w-96'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title justify-center'>Carlos Pardo</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Listen</button>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure>
          <img
            src='https://res.cloudinary.com/mentalhealth/image/upload/v1651604082/k4v180ykcradvmyzw8qr.jpg'
            alt='Album'
            className='object-cover h-48 w-96'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title justify-center'>Diego Cubides</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
