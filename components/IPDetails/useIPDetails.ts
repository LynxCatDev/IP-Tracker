import { useState, useEffect } from 'react';
import axios from 'axios';
import { IPDetailsProps } from '@/types/ipData.interface';
import { toast } from 'react-toastify';

interface UseIPDetailsReturn {
  ipData: IPDetailsProps | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useIPDetails = (): UseIPDetailsReturn => {
  const [ipData, setIPData] = useState<IPDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getIPData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://ipapi.co/json/`);
      console.log(response.data, 'response');
      setIPData(response.data);
    } catch (err) {
      setError('Failed to fetch IP information');
      toast.error('Failed to fetch IP information', { autoClose: 4000 });
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    getIPData();
  };

  useEffect(() => {
    getIPData();
  }, []);

  return {
    ipData,
    loading,
    error,
    refetch,
  };
};
