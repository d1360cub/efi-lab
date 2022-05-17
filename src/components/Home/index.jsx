/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { getCollection } from '../../firebase/collectionsFirebase';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';

function Home() {
  const imagesSlider = [
    'https://res.cloudinary.com/mentalhealth/image/upload/v1651997102/hzbq9c8mo5wfrfrajn4j.jpg',
    'https://res.cloudinary.com/mentalhealth/image/upload/v1651871941/zlboesf2zecv1owhuvaf.jpg',
    'https://res.cloudinary.com/mentalhealth/image/upload/v1652111886/jb7git5yjolm6u6frj2z.png',
  ];
  let count = 0;
  let slideInterval;
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    slideRef.current.addEventListener('mouseenter', pauseSlider);
    slideRef.current.addEventListener('mouseleave', startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % imagesSlider.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const productsLength = imagesSlider.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };

  return (
    <div ref={slideRef} className='w-full select-none relative'>
      <div className='aspect-w-16 aspect-h-9'>
        <img src={imagesSlider[currentIndex]} alt='' />
      </div>

      <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
        <button
          className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}

export default Home;
