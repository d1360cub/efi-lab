import React from 'react';

function SelectList({ source, name, description }) {
  return (
    <div className='App-header'>
      <div className='card w-90 shadow-xl'>
        <figure>
          <img
            src={source}
            alt={name}
            className='object-scale-down h-48 w-96'
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
    </div>
  );
}

export default SelectList;
