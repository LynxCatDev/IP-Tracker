import { useState, useEffect, useCallback } from 'react';

interface CachedData<T> {
  data: T;
  timestamp: number;
}

const useSessionStorage = (
  key: string,
  defaultValue: any,
  duration: number = 30 * 60 * 1000, //30 minutes by default
) => {
  const [value, setValue] = useState(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    let currentValue;

    try {
      const stored = sessionStorage.getItem(key);
      if (stored) {
        const parsed: CachedData<any> = JSON.parse(stored);

        // Check if cache is still valid
        const isValid = Date.now() - parsed.timestamp < duration;

        if (isValid) {
          console.log('✅ Session cache hit:', key);
          currentValue = parsed.data;
        } else {
          console.log('⏰ Session cache expired:', key);
          sessionStorage.removeItem(key);
          currentValue = defaultValue;
        }
      } else {
        currentValue = defaultValue;
      }
    } catch (error) {
      console.error('Error reading from sessionStorage:', error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') {
      return;
    }

    if (value !== null && value !== undefined) {
      try {
        const cacheData: CachedData<any> = {
          data: value,
          timestamp: Date.now(),
        };
        console.log('💾 Setting sessionStorage:', key);
        sessionStorage.setItem(key, JSON.stringify(cacheData));
      } catch (error) {
        console.error('Error writing to sessionStorage:', error);
      }
    }
  }, [value, key]);

  // Function to remove the item from sessionStorage
  const removeItem = useCallback(() => {
    // Only run in browser
    if (typeof window === 'undefined') {
      return;
    }

    try {
      sessionStorage.removeItem(key);
      setValue(defaultValue);
      console.log('🗑️ Removed from sessionStorage:', key);
    } catch (error) {
      console.error('Error removing item from sessionStorage:', error);
    }
  }, [key, defaultValue]);

  return [value, setValue, removeItem];
};

export default useSessionStorage;
