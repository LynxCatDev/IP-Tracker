import { Metadata } from 'next';
import { BannerAd, InArticleAd } from '../../components/AdComponents';

export const metadata: Metadata = {
  title: 'About - IP Tracker & Geolocation Tool',
  description:
    'Learn about our free IP tracking service, how it works, and why accurate IP geolocation matters for your online privacy and security.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Our IP Tracker
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding the technology behind IP geolocation and why we built
            this free service.
          </p>
        </header>

        <BannerAd className="mb-8" />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              What We Do
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our IP tracker provides instant, accurate geolocation
                information for any IP address. We use advanced databases and
                real-time data to deliver comprehensive details about internet
                connections, including location, ISP information, and network
                details.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Whether you&apos;re troubleshooting network issues, conducting
                security research, or simply curious about your online
                footprint, our tool provides reliable data in an
                easy-to-understand format.
              </p>
            </div>
          </div>

          {/* <InArticleAd /> */}

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Our Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Data Sources
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Regional Internet Registries (RIRs)</li>
                  <li>• Internet Service Provider databases</li>
                  <li>• Geolocation mapping services</li>
                  <li>• Real-time network topology data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Accuracy & Privacy
                </h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• City-level accuracy in most regions</li>
                  <li>• No logging of user queries</li>
                  <li>• Secure HTTPS connections</li>
                  <li>• Compliant with privacy regulations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Network Troubleshooting
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Diagnose connectivity issues and trace network paths
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Security Research
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Investigate suspicious IP addresses and network threats
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Analytics & Research
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Analyze traffic patterns and geographic distribution
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              ← Back to IP Tracker
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
