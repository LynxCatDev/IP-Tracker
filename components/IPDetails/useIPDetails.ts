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

const normalizeLanguageField = (value?: string | string[]): string[] => {
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((lang) => lang.trim())
      .filter(Boolean);
  }

  return [];
};

const normalizeNumber = (value: unknown): number => {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === 'string') {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
};

const transformIpwhoisResponse = (
  data: Record<string, any>,
): IPDetailsProps => ({
  asn: data.connection?.asn ? String(data.connection.asn) : '',
  city: data.city ?? '',
  continent_code: data.continent_code ?? '',
  country: data.country_code ?? data.country ?? '',
  country_area: normalizeNumber(data.country_area),
  country_calling_code: data.calling_code
    ? `+${String(data.calling_code).replace('+', '')}`
    : '',
  country_capital: data.capital ?? '',
  country_code: data.country_code ?? '',
  country_code_iso3: data.country_code3 ?? '',
  country_name: data.country ?? '',
  country_population: normalizeNumber(data.country_population),
  country_tld: data.tld ?? '',
  currency: data.currency?.code ?? '',
  currency_name: data.currency?.name ?? '',
  in_eu: Boolean(data.is_eu),
  ip: data.ip ?? '',
  languages: normalizeLanguageField(data.languages),
  latitude: normalizeNumber(data.latitude),
  longitude: normalizeNumber(data.longitude),
  network: data.connection?.domain ?? data.connection?.isp ?? '',
  org: data.connection?.org ?? '',
  postal: data.postal ?? '',
  region: data.region ?? '',
  region_code: data.region_code ?? '',
  timezone: data.timezone?.id ?? '',
  utc_offset: data.timezone?.utc ?? '',
  version: data.type ?? '',
});

const fetchIPData = async (ip?: string): Promise<IPDetailsProps> => {
  const url = ip ? `/api/ip?ip=${ip}` : '/api/ip';
  const response = await axios.get(url);

  if (response.data?.error) {
    throw new Error(response.data?.error);
  }

  // Handle ipwho.is format (has 'success' field)
  if (response.data?.success !== undefined) {
    return transformIpwhoisResponse(response.data);
  }

  return response.data as IPDetailsProps;
};

const deriveFriendlyError = (err: unknown): string => {
  if (axios.isAxiosError(err) && err.response?.status === 429) {
    return 'Rate limit exceeded. Please try again in a few minutes.';
  }

  return 'Failed to fetch IP information. Please try again later.';
};

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

  const getIPData = async (skipCache = false) => {
    // Check cache first (unless skipCache is true for manual refetch)
    if (!skipCache && cachedData) {
      setIPData(cachedData);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await fetchIPData(ip);
      setIPData(data);
      setCachedData(data);
    } catch (err) {
      console.error('IP lookup failed:', err);
      const friendlyMessage = deriveFriendlyError(err);
      setError(friendlyMessage);
      toast.error(friendlyMessage, { autoClose: 4000 });
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
