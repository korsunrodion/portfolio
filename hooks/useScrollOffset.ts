import { useEffect, useState } from 'react';

const useScrollOffset = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const getOffset = () => {
      setOffsetY(window.scrollY);
    };

    document.addEventListener('scroll', getOffset);
    return () => document.removeEventListener('scroll', getOffset);
  }, []);

  return offsetY;
};

export default useScrollOffset;
