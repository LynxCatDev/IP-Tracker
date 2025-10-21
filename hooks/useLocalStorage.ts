import { useState, useEffect, useCallback } from 'react';

const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue),
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  // Function to remove the item from localStorage
  const removeItem = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setValue(defaultValue);
    } catch (error) {
      console.error('Error removing item from localStorage:', error);
    }
  }, [key, defaultValue]);

  return [value, setValue, removeItem];
};

export default useLocalStorage;
