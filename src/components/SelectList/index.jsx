import React, { useState, useEffect } from 'react';
import {
  createDocument,
  getDocument,
} from '../../firebase/collectionsFirebase';

function SelectList() {
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
    getDocument('services', 'aHBKBjc63ZOaoRKzgh06').then(({ menus }) => {
      setMenu(menus);
    });
  }, []);
  console.log(menu);
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
                1. Clase de trabajo
              </label>
              <select
                name={menu[index].opciones}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].opciones.map((element) => (
                  <option value={element}>{element}</option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 1 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                2. Tipo de inyección
              </label>
              <select
                name={menu[index].opciones}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].opciones.map((element) => (
                  <option value={element}>{element}</option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 2 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                3. Número de cilindros
              </label>
              <select
                name={menu[index].opciones}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].opciones.map((element) => (
                  <option value={element}>{element}</option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 3 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                4. Tipo de entrega
              </label>
              <select
                name={menu[index].opciones}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].opciones.map((element) => (
                  <option value={element}>{element}</option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 4 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                5. Tipo de gestión
              </label>
              <select
                name={menu[index].opciones}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].opciones.map((element) => (
                  <option value={element}>{element}</option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 5 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                6. Módulo de señales de entrada y salida
              </label>
              <select
                name={menu[index].opciones}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].opciones.map((element) => (
                  <option value={element}>{element}</option>
                ))}
              </select>
            </fieldset>
          )}
          {Object.keys(form).length === 6 && (
            <fieldset>
              <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
                7. Módulo de comunicaciones
              </label>
              <select
                name={menu[index].opciones}
                onChange={handleChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
                <option value=''>Seleccione una opción</option>
                {menu[index].opciones.map((element) => (
                  <option value={element}>{element}</option>
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
        </>
      )}
    </div>
  );
}

export default SelectList;
