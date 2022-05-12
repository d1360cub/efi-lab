import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Register() {
  const [form, setForm] = useState({});
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await register(form.email, form.password);
      navigate('/');
    } catch (error) {
      setError('Correo o contraseña inválidos');
    }
    setForm({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='email@provider.com'
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='******'
          onChange={handleChange}
        />

        <button type='submit'>Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Register;
