import { useState, useEffect, cache } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IPDetailsProps } from '@/types/ipData.interface';

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

  const getIPData = async () => {
    try {
      let url = '';
      if (!ip) {
        url = 'https://ipapi.co/json/';
      } else {
        url = `https://ipapi.co/${ip}/json/`;
      }
      setLoading(true);
      setError(null);
      const response = await axios.get(url, {
        headers: {
          'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
        },
      });
      console.log(response.data, 'response');
      setIPData(response.data);
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
    getIPData();
  };

  useEffect(() => {
    cache(getIPData)();
  }, []);

  return {
    ipData,
    loading,
    error,
    refetch,
  };
};
