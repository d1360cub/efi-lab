import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import control from '../../assets/control.png';
import {
  FcAdvance,
  FcCollaboration,
  FcHome,
  FcRatings,
  FcKey,
} from 'react-icons/fc';
import { useAuth } from '../../hooks/useAuth';

function Sidebar() {
  const [open, setOpen] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className='flex'>
      <div
        className={`${
          open ? 'w-55' : 'w-20'
        } border-2 border-lime-500 rounded h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src={control}
          alt={'control'}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-lime-500 border-2 rounded-full ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className='flex gap-x-4 items-center pb-1 hover:bg-sky-700'>
            <div
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            >
              <div className='tooltip tooltip-success' data-tip='Inicio'>
                <FcHome size='2.4rem' />
              </div>
            </div>
            <h1
              className={`origin-left font-medium text-xl duration-300 ${
                !open && 'scale-0'
              }`}
            >
              Inicio
            </h1>
          </div>
        </Link>
        <Link to='/login'>
          <div className='flex gap-x-4 items-center pb-1 hover:bg-sky-700'>
            <div
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            >
              <div className='tooltip tooltip-success' data-tip='Cotiza'>
                <FcRatings size='2.4rem' />
              </div>
            </div>
            <h1
              className={`origin-left font-medium text-xl duration-300 ${
                !open && 'scale-0'
              }`}
            >
              Cotiza
            </h1>
          </div>
        </Link>
        <Link to='/about'>
          <div className='flex gap-x-4 items-center pb-1 hover:bg-sky-700'>
            <div
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            >
              <div className='tooltip tooltip-success' data-tip='Nosotros'>
                <FcCollaboration size='2.4rem' />
              </div>
            </div>
            <h1
              className={`origin-left font-medium text-xl duration-300 ${
                !open && 'scale-0'
              }`}
            >
              Nosotros
            </h1>
          </div>
        </Link>
        {user ? (
          <div className='flex gap-x-4 items-center hover:bg-sky-700'>
            <div
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            >
              <div className='tooltip tooltip-success' data-tip='Cerrar sesión'>
                <FcKey size='2.4rem' />
              </div>
            </div>
            <button onClick={handleLogout}>
              <h1
                className={`origin-left font-medium text-xl duration-300 ${
                  !open && 'scale-0'
                }`}
              >
                Cerrar sesión
              </h1>
            </button>
          </div>
        ) : (
          <Link to='/login'>
            <div className='flex gap-x-4 items-center hover:bg-sky-700'>
              <div
                className={`cursor-pointer duration-500 ${
                  open && 'rotate-[360deg]'
                }`}
              >
                <div className='tooltip tooltip-success' data-tip='Ingresa'>
                  <FcAdvance size='2.4rem' />
                </div>
              </div>
              <h1
                className={`origin-left font-medium text-xl duration-300 ${
                  !open && 'scale-0'
                }`}
              >
                Ingresa
              </h1>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
