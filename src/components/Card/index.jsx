import React from 'react';

function Card({ source, name, description }) {
  return (
    <div className='card w-64 bg-base-100 shadow-lg ml-6 border-2 border-lime-500'>
      <figure className='px-4 pt-6 '>
        <img
          src={source}
          alt={name}
          className='rounded-lg object-cover h-48 w-96'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title justify-center'>{name}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Listen</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
