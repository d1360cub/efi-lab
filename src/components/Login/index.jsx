import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const [form, setForm] = useState({});
  const [error, setError] = useState('');
  const { login, googleLogin, facebookLogin } = useAuth();
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
      await login(form.email, form.password);
      navigate('/');
    } catch (error) {
      setError('Correo o contraseña incorrectos');
    }
    setForm({});
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate('/');
    } catch (error) {
      setError('Correo o contraseña incorrectos');
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await facebookLogin();
      navigate('/');
    } catch (error) {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className='w-full max-w-xs m-auto'>
      <form
        onSubmit={handleSubmit}
        className='bg-slate rounded px-8 pt-6 pb-8 mb-4 border-4 border-lime-500'
      >
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-lime-500 text-sm font-bold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='Correo electrónico'
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-lime-500 text-sm font-bold mb-2'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='******'
            onChange={handleChange}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-between '>
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
            rounded-md'
          >
            Login
          </button>
        </div>
      </form>
      {error && <p>{error}</p>}
      <div className='flex items-center justify-between'>
        <button
          onClick={handleGoogleLogin}
          className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'
        >
          <svg
            className='w-4 h-4 mr-2 -ml-1'
            aria-hidden='true'
            focusable='false'
            data-prefix='fab'
            data-icon='google'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 488 512'
          >
            <path
              fill='currentColor'
              d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
            ></path>
          </svg>
          Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className='text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2'
        >
          <svg
            className='w-4 h-4 mr-2 -ml-1'
            aria-hidden='true'
            focusable='false'
            data-prefix='fab'
            data-icon='facebook-f'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
          >
            <path
              fill='currentColor'
              d='M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z'
            ></path>
          </svg>
          Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
