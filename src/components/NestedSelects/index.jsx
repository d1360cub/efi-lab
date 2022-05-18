import React, { useState, useEffect } from 'react';
import {
  createDocument,
  getDocument,
} from '../../firebase/collectionsFirebase';

/*const menus = [
  {
    seleccion: 'Clase de trabajo',
    opciones: [
      'Convertir de carburador a inyección programable',
      'Inyección original a inyección programable',
    ],
    costo: [25, 35],
  },
  {
    seleccion: 'Tipo de inyección',
    opciones: ['Inyección monopunto', 'Inyección multipunto'],
    costo: [55, 65],
  },
  {
    seleccion: 'Número de cilindros',
    opciones: ['4 cilindros', '6 cilindros', '8 cilindros', '3 cilindros'],
    costo: [33, 48, 53, 120],
  },
  {
    seleccion: 'Tipo de entrega',
    opciones: [
      'Inyección simultánea',
      'Inyección secuencial',
      'Inyección semisecuencial',
    ],
    costo: [58, 67, 72],
  },
  {
    seleccion: 'Tipo de gestión',
    opciones: [
      'Gestión de solo combustible',
      'Gestión de combustible e ignición',
    ],
    costo: [29, 34],
  },
  {
    seleccion: 'Módulo de señales de entrada y salida',
    opciones: [
      'Entradas y salidas estándar',
      'Módulo de señales de entrada y salida programables',
    ],
    costo: [88, 115],
  },
  {
    seleccion: 'Módulo de comunicaciones',
    opciones: ['Puerto serial/USB', 'Puerto serial/USB y bluetooth'],
    costo: [47, 74],
  },
];*/

function NestedSelects() {
  const [menus, setMenus] = useState([]);
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    setIndex(index + 1);
  };
  console.log('form', form);

  const handleClick = (event) => {
    event.preventDefault();
    createDocument('test', menus);
  };

  useEffect(() => {
    getDocument('services', 'aHBKBjc63ZOaoRKzgh06').then(({ menus }) => {
      setMenus(menus);
    });
  }, []);
  console.log('menu', menus.displayMenu);

  return (
    <div className='w-full max-w-xs m-auto'>
      <h1 className='text-5xl font-bold py-8'>Cotización</h1>
      {Object.keys(form).length === 0 && (
        <fieldset>
          <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
            1. Clase de trabajo
          </label>
          <select
            name={menus[index].name}
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value=''>Seleccione una opción</option>
            {menus[index].opciones.map((element) => (
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
            name={menus[index].seleccion}
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value=''>Seleccione una opción</option>
            {menus[index].opciones.map((element) => (
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
            name={menus[index].seleccion}
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value=''>Seleccione una opción</option>
            {menus[index].opciones.map((element) => (
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
            name={menus[index].seleccion}
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value=''>Seleccione una opción</option>
            {menus[index].opciones.map((element) => (
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
            name={menus[index].seleccion}
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value=''>Seleccione una opción</option>
            {menus[index].opciones.map((element) => (
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
            name={menus[index].seleccion}
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value=''>Seleccione una opción</option>
            {menus[index].opciones.map((element) => (
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
            name={menus[index].seleccion}
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option value=''>Seleccione una opción</option>
            {menus[index].opciones.map((element) => (
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
    </div>
  );
}

export default NestedSelects;
