import React, { useState } from 'react';
import SelectList from '../SelectList';

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
    opciones: ['4 clilindros', '6 clilindros', '8 clilindros', '3 clilindros'],
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
  const [labor, setLabor] = useState('');
  const [injection, setInjection] = useState('');
  const [cilinders, setCilinders] = useState('');
  const [delivery, setDelivery] = useState('');
  const [management, setManagement] = useState('');
  const [module, setModule] = useState('');
  const [comms, setComms] = useState('');
  const [form, setForm] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  return (
    <div className='w-full max-w-xs m-auto'>
      <h1 className='text-5xl font-bold '>Cotización</h1>
      <SelectList
        title='labor'
        //title='opcion1'
        content=''
        onChange={handleChange}
      />
      {labor && (
        <SelectList
          title='injection'
          //title='opcion1'
          content=''
          onChange={handleChange}
        />
      )}
      {injection && (
        <SelectList
          title='cilinders'
          //title='opcion1'
          content=''
          onChange={handleChange}
        />
      )}
      {cilinders && (
        <SelectList
          title='delivery'
          //title='opcion1'
          content=''
          onChange={handleChange}
        />
      )}
      {delivery && (
        <SelectList
          title='efficiency'
          //title='opcion1'
          content=''
          onChange={handleChange}
        />
      )}
      {management && (
        <SelectList
          title='module'
          //title='opcion1'
          content=''
          onChange={handleChange}
        />
      )}
      {module && (
        <SelectList
          title='comms'
          //title='opcion1'
          content=''
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default NestedSelects;
