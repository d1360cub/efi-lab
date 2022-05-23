import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getDocument } from '../../firebase/collectionsFirebase';

function FinalQuote() {
  const { user } = useAuth();
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    getDocument('test', `${user.uid}`).then((element) => {
      setQuote(element);
    });
  }, []);

  return (
    <div>
      {!Object.values.length ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-col justify-start'>
          <div className='text-5xl bg-clip-text text-transparent bg-gradient-to-r from-stone-500 to-lime-500 font-bold text-center my-5'>
            NUESTRA PROPUESTA
          </div>
          <div className='border-2 border-lime-500 rounded-lg p-5 ml-5 mb-5'>
            <div className='text-5xl text-shadow-lg font-bold m-5 py-1 items-center'>
              Tus datos
            </div>
            <div className='text-2xl px-6'>Nombre: {user.displayName}</div>
            <div className='text-2xl px-6'>
              Correo electrónico: {user.email}
            </div>
          </div>
          <div className='border-2 border-lime-500 rounded-lg p-5 ml-5 mb-5'>
            <div className='text-5xl text-shadow-lg font-bold m-5 py-1 items-center'>
              Tus selecciones
            </div>
            <ul className='px-6'>
              {Object.keys(quote).map((item) =>
                Object.keys(quote[item]).map((elem) =>
                  elem === 'value' ? (
                    <li key={quote[item][elem]}>{quote[item][elem]}</li>
                  ) : (
                    <p></p>
                  )
                )
              )}
            </ul>
          </div>
          <div className='border-2 border-lime-500 rounded-lg p-5 ml-5'>
            <div className='text-5xl text-shadow-lg font-bold m-5 py-1 items-center bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-stone-500'>
              Total cotización: USD {quote.total}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FinalQuote;
