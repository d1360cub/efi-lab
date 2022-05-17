import React, { useEffect, useState } from 'react';
import { getServiceById } from '../../firebase/collectionsFirebase';

function SelectList() {
  const [data, setData] = useState({});
  useEffect(() => {
    getServiceById('slider', 'juVGgpVXeGVlEXv4ORH6').then((infoSlider) =>
      setData(infoSlider)
    );
  }, []);
  console.log(
    '🚀 ~ file: index.jsx ~ line 6 ~ SelectList ~ data',
    data.infoSlider,
    typeof data.infoSlider
  );

  return (
    <div className='App-header'>
      <div className='card w-90 shadow-xl'>
        <figure>
          <img
            src='dfsfdsafadfsadfsd'
            alt='dafdfsadf'
            className='object-scale-down h-48 w-96'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title justify-center'>'jhgjghjfg'</h2>
          <p>'jhkhkjhk'</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectList;
