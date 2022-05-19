import React from 'react';

function Carousel({ source, alt }) {
  return (
    <div>
      <div class='carousel-item w-1/2'>
        <img src={source} alt={alt} />
      </div>
    </div>
  );
}

export default Carousel;
