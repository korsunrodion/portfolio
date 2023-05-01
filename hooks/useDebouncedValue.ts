import {
  useEffect, useRef, useState,
} from 'react';

function useDebounceValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutRef = useRef<NodeJS.Timer | null>(null);

  const forceUpdate = (v: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDebouncedValue(v);
  };

  useEffect(
    () => {
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    },
    [value, delay],
  );
  return { value: debouncedValue, forceUpdate };
}

export default useDebounceValue;
