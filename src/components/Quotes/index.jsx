import React, { useState, useEffect } from 'react';
import {
  createDocument,
  getDocument,
} from '../../firebase/collectionsFirebase';

function Quotes() {
  const [menu, setMenu] = useState({});
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form, typeof form);
    setIndex(index + 1);
  };

  const handleClick = (event) => {
    event.preventDefault();
    createDocument('test', form);
  };

  useEffect(() => {
    getDocument('services', 'Ep6ATdkUcqWIqUcTSuC7').then(({ menus }) => {
      setMenu(menus);
    });
  }, []);

  return (
    <div className='w-full max-w-xs m-auto'>
      {!menu.length ? (
        <p>Loading...</p>
      ) : (
        <>
          {/*menu.map((element) => (
            <>
              <p>{element.title}</p>
              <select
                name='opcion1'
                //onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {element.options.map((item) => (
                  <option value={item.cost}>{item.value}</option>
                ))}
              </select>
            </>
                ))*/}
          <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
            {`${index + 1}. ${menu[index].title}`}
          </label>
          <select
            name='opcion1'
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value=''>Seleccione una opción</option>
            {menu[index].options.map((item) => (
              <option value={item.cost}>{item.value}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default Quotes;
