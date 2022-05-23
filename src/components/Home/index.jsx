import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCollection } from '../../firebase/collectionsFirebase';
import { useAuth } from '../../hooks/useAuth';

function Home() {
  const [data, setData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getCollection('card').then((card) => {
      setData(card);
    });
  }, []);

  return (
    <>
      {!data.length ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className='text-8xl bg-clip-text text-transparent bg-gradient-to-r from-stone-500 to-lime-500 font-bold text-center'>
            EFI LAB
          </div>
          <section className='text-justify m-6'>
            <p>
              El sistema de inyección electrónica de combustible remplaza al
              carburador en los motores a gasolina, su importancia radica en su
              mejor capacidad para dosificar el combustible y crear una mezcla
              aire/combustible muy próxima a la estequiométrica (14,7:1 para la
              gasolina), lo que garantiza una muy buena combustión con reducción
              de los porcentajes de gases tóxicos a la atmósfera.
            </p>
            <br />
            <p>
              El factor Lambda determina la proporción de aire y combustible que
              debe mezclarse en el cilindro para una óptima combustión en un
              motor.
            </p>
            <br />
            <p>
              Este factor se representa con la letra griega «λ» y entre más
              cerca se encuentre a 1 es más probable que se consiga el máximo
              rendimiento del motor con el menor porcentaje posible de emisiones
              contaminantes
            </p>
          </section>
          <section className='text-justify m-6 content-center'>
            <p>
              Ya diste un vistazo a todas las cosas interesantes que nuestros
              clientes han adquirido implementando nuestro sistema, ahora es tu
              turno!!!
            </p>
            <br />
            {!user && (
              <Link
                to='/login'
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
            '
              >
                Cotiza ya
              </Link>
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default Home;
