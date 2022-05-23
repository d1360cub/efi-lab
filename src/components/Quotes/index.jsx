import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDocument, getDocument } from '../../firebase/collectionsFirebase';
import { useAuth } from '../../hooks/useAuth';

function Quotes() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [menu, setMenu] = useState({});
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(1256);
  const [quote, setQuote] = useState({});
  const [form, setForm] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: JSON.parse(value),
    });
    setIndex(index + 1);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const arrayForm = Object.values(Object.values(form));
    //arrayForm.map((element) => setTotal(total + 1));

    setQuote({ ...form, total });
    setDocument('test', `${user.uid}`, form);
    navigate(`/quote/${user.uid}`);
  };
  console.log('quote desde quotes', quote);

  useEffect(() => {
    getDocument('services', 'Ep6ATdkUcqWIqUcTSuC7').then(({ menus }) => {
      setMenu(menus);
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      {!menu.length ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className='text-5xl bg-clip-text text-transparent bg-gradient-to-r from-stone-500 to-lime-500 font-bold pt-10'>
            OPCIONES PARA TU PROYECTO
          </div>
          <div className='w-full max-w-xs m-auto'>
            {Object.keys(form).length === 0 && (
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
                    <option value={JSON.stringify(item)}>{item.value} </option>
                  ))}
                </select>
              </fieldset>
            )}
            {Object.keys(form).length === 1 && (
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
                    <option value={JSON.stringify(item)}>{item.value}</option>
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
                    <option value={JSON.stringify(item)}>{item.value}</option>
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
                    <option value={JSON.stringify(item)}>{item.value}</option>
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
                    <option value={JSON.stringify(item)}>{item.value}</option>
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
                    <option value={JSON.stringify(item)}>{item.value}</option>
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
                    <option value={JSON.stringify(item)}>{item.value}</option>
                  ))}
                </select>
              </fieldset>
            )}
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
          </div>
        </>
      )}
    </div>
  );
}

export default Quotes;
