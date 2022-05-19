import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDocument } from '../../firebase/collectionsFirebase';
import { uploadFile } from '../../firebase/storage';

const Projects = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState('');

  const avatarUpload = (event) => {
    const localFile = event.target.files[0];
    uploadFile(localFile).then((response) => {
      setForm({
        ...form,
        avatar: response,
      });
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createDocument('card', form);
    setForm({});
    navigate('/about');
  };
  return (
    <>
      <div className='text-5xl text-shadow-lg font-bold m-5 py-1 items-center'>
        COMPARTE TU PROYECTO
      </div>
      <div className='flex justify-center items-center w-screen'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label className='animate-pulse block text-2xl font-bold mb-2 py-1'>
              Cargar imagen
            </label>
            <input
              type='file'
              onChange={avatarUpload}
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </fieldset>
          <fieldset>
            <label className='animate-pulse block text-2xl font-bold mb-2 py-1'>
              Tu nombre
            </label>
            <input
              name='name'
              onChange={handleChange}
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </fieldset>
          <fieldset>
            <label className='animate-pulse block text-2xl font-bold mb-2 py-1'>
              Breve descripción
            </label>
            <textarea
              name='description'
              onChange={handleChange}
              className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </fieldset>
          <button
            type='submit'
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
            rounded-md
            mt-3'
          >
            Crear empleado
          </button>
        </form>
      </div>
    </>
  );
};

export default Projects;
