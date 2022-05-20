import React, { useState, useEffect } from 'react';
import {
  createDocument,
  getDocument,
} from '../../firebase/collectionsFirebase';

function Quotes() {
  const [menu, setMenu] = useState({});
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [quote, setQuote] = useState(0);
  const [form, setForm] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log('dentro del handlechange');
    setIndex(index + 1);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setQuote({ ...form, total });
  };
  console.log(quote);

  function addTotal() {
    console.log('dentro de add total');
    setTotal(total + 1);
  }
  console.log('🚀 ~ file: index.jsx ~ line 32 ~ addTotal ~ total', total);

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
          <h1 className='text-5xl font-bold py-8'>Cotización</h1>
          {Object.keys(form).length === 0 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                {`${index + 1}. ${menu[index].title}`}
              </label>
              <select
                name={`opcion${index + 1}`}
                onChange={addTotal}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].options.map((item) => (
                  <option value={item.value} onClick={handleChange}>
                    {item.value}
                  </option>
                ))}
              </select>
            </fieldset>
          )}
          {/*Object.keys(form).length === 1 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                {`${index + 1}. ${menu[index].title}`}
              </label>
              <select
                name={`opcion${index + 1}`}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].options.map((item) => (
                  <option
                    value={item.value}
                    onChange={() => setTotal(total + Number(item.cost))}
                  >
                    {item.value}
                  </option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 2 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                {`${index + 1}. ${menu[index].title}`}
              </label>
              <select
                name={`opcion${index + 1}`}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].options.map((item) => (
                  <option value={item.value}>{item.value}</option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 3 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                {`${index + 1}. ${menu[index].title}`}
              </label>
              <select
                name={`opcion${index + 1}`}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].options.map((item) => (
                  <option
                    value={item.value}
                    //onChange={() => addTotal(Number(item.cost))}
                  >
                    {item.value}
                  </option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 4 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                {`${index + 1}. ${menu[index].title}`}
              </label>
              <select
                name={`opcion${index + 1}`}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].options.map((item) => (
                  <option
                    value={item.value}
                    //onChange={() => addTotal(Number(item.cost))}
                  >
                    {item.value}
                  </option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 5 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                {`${index + 1}. ${menu[index].title}`}
              </label>
              <select
                name={`opcion${index + 1}`}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].options.map((item) => (
                  <option
                    value={item.value}
                    //onChange={() => addTotal(Number(item.cost))}
                  >
                    {item.value}
                  </option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 6 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                {`${index + 1}. ${menu[index].title}`}
              </label>
              <select
                name={`opcion${index + 1}`}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].options.map((item) => (
                  <option
                    value={item.value}
                    //onChange={() => addTotal(Number(item.cost))}
                  >
                    {item.value}
                  </option>
                ))}
              </select>
            </fieldset>
                )*/}
          {Object.keys(form).length === 7 && (
            <div className='flex items-center justify-between '>
              <button
                onClick={handleClick}
                className='transition 
            duration-700 
            ease-in-out
            transform hover:-translate-y-1 
            hover:scale-110 
            bg-lime-500 
            hover:bg-cyan-300 
            text-slate-900 
            font-semibold 
            py-3 px-6 
            rounded-md'
              >
                Enviar especificaciones
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quotes;
