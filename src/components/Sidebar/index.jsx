import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import control from '../../assets/control.png';
import logo from '../../assets/logo.png';

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className='flex'>
      <div
        className={`${
          open ? 'w-72' : 'w-20'
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
          <div className='flex gap-x-4 items-center pb-1'>
            <img
              src={logo}
              alt={'Efi lab'}
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
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
          <div className='flex gap-x-4 items-center pb-1'>
            <img
              src={logo}
              alt={'Efi lab'}
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
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
          <div className='flex gap-x-4 items-center pb-1'>
            <img
              src={logo}
              alt={'Efi lab'}
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
            <h1
              className={`origin-left font-medium text-xl duration-300 ${
                !open && 'scale-0'
              }`}
            >
              Nosotros
            </h1>
          </div>
        </Link>
        <Link to='/login'>
          <div className='flex gap-x-4 items-center'>
            <img
              src={logo}
              alt={'Efi lab'}
              className={`cursor-pointer duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
            <h1
              className={`origin-left font-medium text-xl duration-300 ${
                !open && 'scale-0'
              }`}
            >
              Ingresa
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
