import React, { useState } from 'react';

const menus = [
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
      'Inyección semisecuencial',
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
];

function NestedSelects() {
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

  return (
    <div className='w-full max-w-xs m-auto'>
      <h1 className='text-5xl font-bold '>Cotización</h1>
      {Object.keys(form).length === 0 && (
        <select
          name={menus[index].seleccion}
          onChange={handleChange}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          {menus[index].opciones.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      )}
      {Object.keys(form).length === 1 && (
        <select
          name={menus[index].seleccion}
          onChange={handleChange}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          {menus[index].opciones.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      )}
      {Object.keys(form).length === 2 && (
        <select
          name={menus[index].seleccion}
          onChange={handleChange}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          {menus[index].opciones.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      )}
      {Object.keys(form).length === 3 && (
        <select
          name={menus[index].seleccion}
          onChange={handleChange}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          {menus[index].opciones.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      )}
      {Object.keys(form).length === 4 && (
        <select
          name={menus[index].seleccion}
          onChange={handleChange}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          {menus[index].opciones.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      )}
      {Object.keys(form).length === 5 && (
        <select
          name={menus[index].seleccion}
          onChange={handleChange}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          {menus[index].opciones.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      )}
      {Object.keys(form).length === 6 && (
        <select
          name={menus[index].seleccion}
          onChange={handleChange}
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          {menus[index].opciones.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default NestedSelects;
