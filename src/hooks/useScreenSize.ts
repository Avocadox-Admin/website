import { useEffect, useState } from 'react';

const getWidth = (): number =>
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const useScreenSize = () => {
  const [width, setWidth] = useState(getWidth());
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const setSize = (updatedWidth: number) => {
      if (updatedWidth >= 768 && updatedWidth < 1024) {
        setScreenSize('md');
      }
      if (updatedWidth >= 1024 && updatedWidth < 1280) {
        setScreenSize('lg');
      }
      if (updatedWidth < 768) {
        setScreenSize('sm');
      }
    };
    const resizeListener = () => {
      const updatedWidth = getWidth();
      setWidth(updatedWidth);
      setSize(updatedWidth);
    };

    window.addEventListener('resize', resizeListener);
    setSize(getWidth())

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
