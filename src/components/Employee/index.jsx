import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDocument } from '../../firebase/collectionsFirebase';
import { uploadFile } from '../../firebase/storage';

const Employee = () => {
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
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
          Avatar
        </label>
        <input type='file' onChange={avatarUpload} />
      </fieldset>
      <fieldset>
        <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
          Nombre
        </label>
        <input name='name' onChange={handleChange} />
      </fieldset>
      <fieldset>
        <label className='animate-bounce block text-lime-500 text-2xl font-bold mb-2 py-1'>
          Descripción
        </label>
        <input name='description' onChange={handleChange} />
      </fieldset>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default Employee;
