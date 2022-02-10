import React, { useEffect, useRef, useState } from 'react';

import sl1 from '../assets/sl1_1400x700.png';
import sl2 from '../assets/sl2_1400x700.png';

const sliderImages = [sl1, sl2];

let interval;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideref = useRef();

  useEffect(() => {
    slideref.current.addEventListener('animationend', removeAnimation);
    // startSlider();
    return () => {
      pauseInterval();
    };
  }, []);

  // const startSlider = () => {
  //   interval = setInterval(() => {
  //     handleNext();
  //   }, 7000);
  // };

  const pauseInterval = () => {
    clearInterval(interval);
  };

  const removeAnimation = () => {
    slideref.current.classList.remove('fade-anim');
  };

  // const handleNext = () => {
  //   setCurrentIndex(currentIndex + 1);
  //   slideref.current.classList.add('fade-anim');
  // };

  const handleClick = (index) => {
    if (index === currentIndex) {
      return;
    }
    setCurrentIndex(index);
    slideref.current.classList.add('fade-anim');
  };

  return (
    <div ref={slideref} className="select-none relative">
      <div className="aspect-auto">
        <img src={sliderImages[currentIndex]} alt="" />
      </div>
      <div className="absolute w-full top-[90%] flex justify-center gap-4">
        {sliderImages.map((image, index) => (
          <button
            key={image}
            className="b-none bg-white/60 w-4 h-4 rounded-full"
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
