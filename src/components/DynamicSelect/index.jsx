import React, { useState } from 'react';

function DynamicSelect({ menu, index }) {
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    setTotal(total + parseInt(value));
  };

  return (
    <fieldset>
      <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
        {`${index + 1}. ${menu[index].title}`}
      </label>
      <select
        name={`opcion${index}`}
        onChange={handleChange}
        className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      >
        <option selected='selected' value='0'>
          Seleccione una opción
        </option>
        {menu[index].options.map((item) => (
          <option value={item.cost}>{item.value}</option>
        ))}
      </select>
    </fieldset>
  );
}

export default DynamicSelect;
/*AQUI COMIENZA LO QUE ESTABA EN QUOTES
import React, { useState, useEffect } from 'react';
import {
  createDocument,
  getDocument,
} from '../../firebase/collectionsFirebase';
import DynamicSelect from '../DynamicSelect';

function Quotes() {
  const [menu, setMenu] = useState({});
  const [total, setTotal] = useState(0);
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    //console.log(form, typeof form);
    setTotal(total + parseInt(value));
    setIndex(index + 1);
  };

  //console.log('total', total);

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
        <>AQUI COMIENZA LO QUE CRISTIAN HIZO COMENTAR, QUE LO GUARDARA PARA FUTURAS REFERENCIAS
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
                ))}AQUI TERMINA LO QUE COMENTO CRISTIAN
          <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
            {`${index + 1}. ${menu[index].title}`}
          </label>
          <select
            name={`opcion${index}`}
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          >
            <option selected='selected' value='0'>
              Seleccione una opción
            </option>
            {menu[index].options.map((item) => (
              <option value={item.cost}>{item.value}</option>
            ))}
          </select>
          <DynamicSelect menu={menu} index={index} />
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

export default Quotes;*/
