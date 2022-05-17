import React, { useEffect, useState } from 'react';
import { getCollection } from '../../firebase/collectionsFirebase';

function SelectList() {
  const [imag, setImag] = useState([]);
  console.log('🚀 ~ file: index.jsx ~ line 7 ~ SelectList ~ imag', imag.id);

  useEffect(() => {
    getCollection('slider').then((slider) => {
      setImag(slider);
    });
  }, []);

  return <div className='App-header'>fgfgs</div>;
}

export default SelectList;
