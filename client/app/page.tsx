'use client';

import { useState, useEffect } from 'react';
import CopyButton from '../components/CopyButton';
import { BannerAd, InArticleAd, SquareAd } from '../components/AdComponents';

interface IPData {
  query: string;
  city: string;
  regionName: string;
  country: string;
  countryCode: string;
  isp: string;
  org: string;
  timezone: string;
  lat?: number;
  lon?: number;
  zip?: string;
  as?: string;
}

export default function Home() {
  const [ipData, setIpData] = useState<IPData | null>(null);
  const [loading, setLoading] = useState(true);
  const [customIP, setCustomIP] = useState('');
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentLookups, setRecentLookups] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    fetchIPInfo();
  }, []);

  const fetchIPInfo = async (ip?: string) => {
    try {
      setLoading(true);
      setError(null);

      const url = ip
        ? `https://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`
        : 'https://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query';

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'success') {
        setIpData(data);

        // Add to recent lookups if it's a custom IP
        if (ip && ip !== data.query) {
          setRecentLookups((prev) => {
            const updated = [ip, ...prev.filter((i) => i !== ip)].slice(0, 5);
            return updated;
          });
        }
      } else {
        setError(data.message || 'Failed to fetch IP information');
      }
    } catch (err) {
      setError('Network error occurred. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleCustomLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customIP.trim()) return;

    setIsLookingUp(true);
    await fetchIPInfo(customIP.trim());
    setIsLookingUp(false);
  };

  const resetToMyIP = () => {
    setCustomIP('');
    fetchIPInfo();
  };

  const handleRecentLookup = (ip: string) => {
    setCustomIP(ip);
    fetchIPInfo(ip);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            What Is My IP Address?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover your public IP address and get detailed information about
            your internet connection and location.
          </p>
        </header>

        {/* Banner Ad */}
        <BannerAd className="mb-8" />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">
                Loading your IP information...
              </p>
            </div>
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl shadow-xl p-8 text-center">
              <div className="text-red-600 dark:text-red-400 text-xl mb-4">
                ❌ Error
              </div>
              <p className="text-red-700 dark:text-red-300">{error}</p>
              <button
                onClick={() => fetchIPInfo()}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : ipData ? (
            <div className="space-y-6">
              {/* Main IP Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  {customIP
                    ? 'IP Address Information'
                    : 'Your Public IP Address'}
                </h2>
                <CopyButton
                  textToCopy={ipData.query}
                  className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6 font-mono hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                >
                  {ipData.query}
                </CopyButton>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🌍</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Location
                        </p>
                        <p className="font-semibold text-gray-800 dark:text-white">
                          {ipData.city}, {ipData.regionName}, {ipData.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🏢</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Internet Service Provider
                        </p>
                        <p className="font-semibold text-gray-800 dark:text-white">
                          {ipData.isp}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🕒</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Timezone
                        </p>
                        <p className="font-semibold text-gray-800 dark:text-white">
                          {ipData.timezone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🏛️</span>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Organization
                        </p>
                        <p className="font-semibold text-gray-800 dark:text-white">
                          {ipData.org}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* In-Article Ad */}
              <InArticleAd />

              {/* Additional Details */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Additional Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Country Code
                    </h4>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {ipData.countryCode}
                    </p>
                  </div>
                  {ipData.zip && (
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Postal Code
                      </h4>
                      <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {ipData.zip}
                      </p>
                    </div>
                  )}
                  {ipData.lat && ipData.lon && (
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Coordinates
                      </h4>
                      <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {ipData.lat.toFixed(4)}, {ipData.lon.toFixed(4)}
                      </p>
                    </div>
                  )}
                  {ipData.as && (
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 md:col-span-2 lg:col-span-3">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        AS Information
                      </h4>
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {ipData.as}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          {/* IP Lookup Tool */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              IP Address Lookup Tool
            </h3>
            <form onSubmit={handleCustomLookup} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={customIP}
                  onChange={(e) => setCustomIP(e.target.value)}
                  placeholder="Enter any IP address (e.g., 8.8.8.8)..."
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={isLookingUp || !customIP.trim()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
                >
                  {isLookingUp ? '...' : 'Lookup'}
                </button>
              </div>
            </form>

            {/* Popular IP Addresses */}
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                Try these popular IPs:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['8.8.8.8', '1.1.1.1', '208.67.222.222', '9.9.9.9'].map(
                  (ip) => (
                    <button
                      key={ip}
                      onClick={() => handleRecentLookup(ip)}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {ip}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Recent Lookups */}
            {recentLookups.length > 0 && (
              <div className="mt-6">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="w-full text-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  {showHistory ? 'Hide' : 'Show'} Recent Lookups (
                  {recentLookups.length})
                </button>
                {showHistory && (
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {recentLookups.map((ip, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentLookup(ip)}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        {ip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {customIP && (
              <div className="text-center mt-4">
                <button
                  onClick={resetToMyIP}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  ← Back to my IP
                </button>
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Privacy Focused
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                We don&apos;t store or log your IP address information.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Fast & Accurate
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant and precise IP geolocation data.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Global Coverage
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Works with IP addresses from anywhere in the world.
              </p>
            </div>
          </div>

          {/* Square Ad */}
          <SquareAd className="mt-12" />

          {/* Educational Content Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Understanding IP Addresses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  What is an IP Address?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An IP (Internet Protocol) address is a unique numerical
                  identifier assigned to every device connected to the internet.
                  It serves as a digital address that allows devices to
                  communicate with each other across networks.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  There are two main types: IPv4 (like 192.168.1.1) and IPv6
                  (like 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Why Check Your IP Address?
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Troubleshoot network connectivity issues</li>
                  <li>• Configure firewall and security settings</li>
                  <li>• Access geo-restricted content</li>
                  <li>• Monitor your online privacy</li>
                  <li>• Set up remote access to devices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Is my IP address private information?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Your public IP address is visible to websites and services you
                  visit. However, it only reveals your general location
                  (city/region) and ISP, not your exact physical address or
                  personal identity.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Can I change my IP address?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, you can change your IP address by restarting your router,
                  contacting your ISP, or using a VPN service. Dynamic IP
                  addresses change automatically over time.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  What's the difference between public and private IP addresses?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Public IP addresses are used to communicate over the internet,
                  while private IP addresses are used within local networks
                  (like your home Wi-Fi). Private IPs typically start with
                  192.168, 10.0, or 172.16.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
