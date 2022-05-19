import React from 'react';
import logo from '../../assets/efilab.svg';

function Logo() {
  return (
    <div className='max-w-lg'>
      <img src={logo} alt='Efi Lab' className='w-1/2' />
    </div>
  );
}

export default Logo;
