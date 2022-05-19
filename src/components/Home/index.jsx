import React, { useState, useEffect } from 'react';
import { getDocument } from '../../firebase/collectionsFirebase';
import Carousel from '../Carousel';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDocument('slider', 'lNqQ3jpxpPcmjhOZFikn').then(({ images }) => {
      setData(images);
    });
  }, []);

  console.log('data', data);

  return (
    <>
      {!data.length ? (
        <div>Loading...</div>
      ) : (
        <>
          <p>
            El sistema de inyección electrónica de combustible remplaza al
            carburador en los motores a gasolina, su importancia radica en su
            mejor capacidad para dosificar el combustible y crear una mezcla
            aire/combustible muy próxima a la estequiométrica (14,7:1 para la
            gasolina), lo que garantiza una muy buena combustión con reducción
            de los porcentajes de gases tóxicos a la atmósfera.
          </p>
          <p>
            El factor Lambda determina la proporción de aire y combustible que
            debe mezclarse en el cilindro para una óptima combustión en un
            motor.
          </p>
          <p>
            Este factor se representa con la letra griega «λ» y entre más cerca
            se encuentre a 1 es más probable que se consiga el máximo
            rendimiento del motor con el menor porcentaje posible de emisiones
            contaminantes
          </p>
          {data.map((element) => (
            <div>
              <Carousel source={element} name='imagen' />
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Home;
