import React, { useEffect, useState } from 'react';
import { getCollection } from '../../firebase/collectionsFirebase';

function SelectList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCollection('options').then((options) => {
      setData(options);
    });
  }, []);

  return <div>{data}</div>;
}

export default SelectList;
