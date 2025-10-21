import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IPDetailsProps } from '@/types/ipData.interface';
import useSessionStorage from '@/hooks/useSessionStorage';

interface UseIPDetailsReturn {
  ipData: IPDetailsProps | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useIPDetails = (ip: string): UseIPDetailsReturn => {
  const [ipData, setIPData] = useState<IPDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  // Cache with 30-minute duration
  const [cachedData, setCachedData] = useSessionStorage(
    `ipData-${ip || 'current'}`,
    null,
    30 * 60 * 1000, // 30 minutes in milliseconds
  );

  console.log(cachedData, 'cachedData');

  const getIPData = async (skipCache = false) => {
    // Check cache first (unless skipCache is true for manual refetch)
    if (!skipCache && cachedData) {
      console.log('Using cached data');
      setIPData(cachedData);
      setLoading(false);
      return;
    }

    try {
      let url = '';
      if (!ip) {
        url = 'https://ipapi.co/json/';
      } else {
        url = `https://ipapi.co/${ip}/json/`;
      }
      setLoading(true);
      setError(null);
      const response = await axios.get(url);
      console.log(response.data, 'response');

      // Save the full response data (not just the IP)
      setIPData(response.data);
      setCachedData(response.data); // Save the entire data object
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 429) {
        setError('Rate limit exceeded. Please try again in a few minutes.');
        toast.error('Too many requests. Please wait a moment.', {
          autoClose: 4000,
        });
      } else {
        setError('Failed to fetch IP information');
        toast.error('Failed to fetch IP information', { autoClose: 4000 });
      }
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    getIPData(true); // Skip cache for manual refetch
  };

  useEffect(() => {
    if (hasFetched.current) return;
    getIPData(); // Use cache on initial load
    hasFetched.current = true;
  }, []);

  return {
    ipData,
    loading,
    error,
    refetch,
  };
};
